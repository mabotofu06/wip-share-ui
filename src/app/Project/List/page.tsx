"use client"

import { OrganismsGroupCard } from "@/app/_components/organisms/GroupCard";
import { OrganismsTabMenu } from "@/app/_components/organisms/TabMenu";
import { fetchMyWorkingGroups } from "@/app/_constants/supabase/client";
import { WorkGroup } from "@/app/_type/data";
import { SupabaseResponse, GetWorkGroupsData } from "@/app/_type/supabase";
import { useEffect, useState } from "react";

const navigationMenu = [
  {label: "すべての投稿", code: 0},
  {label: "作業中の投稿", code: 1},
  {label: "完了した投稿", code: 2},
]

export default function ProjectListPage() {
  const [activeMenu, setActiveMenu] = useState<number>(navigationMenu[0].code);
  const [groups, setGroups] = useState<Array<WorkGroup>>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchMyWorkingGroups()
      .then((data: SupabaseResponse<GetWorkGroupsData[]>) => {
        if (Array.isArray(data)) {

          setGroups(data.map(item => ({
            id: item.group_id,
            userInfo: {
              id: item.user_id,
              name: "不明なユーザー",
              iconImg: "",
            },
            title: item.title ?? "",
            images: item.images,
            note: item.content ?? "",
            isClose: item.close_flag,
            updatedAt: item.update_datetime ?? item.create_datetime,
          })));
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  //TODO:ローディングを状態管理できるように
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-gray-500 text-xl">Loading...</span>
      </div>
    );
  }


  return(
      <div className="timeline bg-white h-full overflow-y-auto custom-scrollbar px-3">
      <OrganismsTabMenu tabMenu={navigationMenu} activeTab={activeMenu} onChange={(num) => setActiveMenu(num)}>
      {groups.map((group, index) => (
        <OrganismsGroupCard className="mt-3" key={index} group={group} />
      ))}
      </OrganismsTabMenu>
    </div>
  )
}