"use client"

import { OrganismsGroupCard } from "@/app/_components/organisms/GroupCard";
import { fetchMyWorkingGroups, fetchWorkGroups } from "@/app/_constants/supabase/client";
import { WorkGroup } from "@/app/_type/data";
import { SupabaseResponse, GetWorkGroupsData } from "@/app/_type/supabase";
import { useEffect, useState } from "react";

export default function ProjectListPage() {
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
      {groups.map((group, index) => (
        <OrganismsGroupCard className="mt-3" key={index} group={group} />
      ))}
    </div>
  )
}