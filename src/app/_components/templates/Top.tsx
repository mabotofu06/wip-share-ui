'use client'

import { OrganismsTabMenu } from "../organisms/TabMenu";
import { fetchWorkGroups } from "@/app/_constants/supabase/client";
import { useEffect, useState } from "react";
import { OrganismsGroupCard } from "../organisms/GroupCard";
import { WorkGroup } from "@/app/_type/data";
import { SupabaseResponse, GetWorkGroupsData } from "@/app/_type/supabase";
import { setUserInfo } from "@/app/_composables/userInfo";

const navigationMenu = [
  // {label: "Pick Up!", code: 0},
  {label: "最新", code: 1},
  // {label: "フォロー中", code: 2},
  {label: "作業中のポスト", code: 3},
  {label: "完了したポスト", code: 4},
]

export default function TemplateTop() {
  const [groups, setGroups] = useState<WorkGroup[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchWorkGroups()
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

  const initialTab = navigationMenu[0].code;
  console.log(groups)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <span className="text-gray-500 text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-white h-full">
      <OrganismsTabMenu tabMenu={navigationMenu} activeTab={initialTab} onChange={()=>{}}>
        <div className="timeline overflow-y-auto custom-scrollbar px-3">
          {groups.map((group, index) => (
            <div key={index}>
              <OrganismsGroupCard className="mt-3" group={group} />
            </div>
          ))}
        </div>
      </OrganismsTabMenu>
    </div>
  );
}
