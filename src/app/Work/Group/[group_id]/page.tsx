"use client"

import { useEffect, useState } from "react";
import { store } from "@/app/_state/store";
import { openModal } from "@/app/_state/slice/modal";
import { OrganismsPostFormModal } from "@/app/_components/organisms/modal/PostFormModal";
import { OrganismsPostCard } from "@/app/_components/organisms/PostCard";
import { OrganismsPostListHeaderCard } from "@/app/_components/organisms/PostListHeaderCard";
import { fetchWorkGroupByGroupId } from "@/app/_constants/supabase/workGroupClient";
import { useParams } from "next/navigation";
import { SupabaseResponse, GetWorkGroupsData, GetPostsData } from "@/app/_type/supabase";
import { WorkGroup } from "@/app/_type/data";
import { fetchPostsByGroupId } from "@/app/_constants/supabase/postClient";
import { getUserInfo } from "@/app/_composables/userInfo";

const userInfo = {
  name     : "まーぼーどーふ",
  id       : "@mabotofu06",
  iconImage: "",
  info     : "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
  links    : [
    { title: "リンク1", url: "https://example.com/1" },
    { title: "リンク2", url: "https://example.com/2" },
    { title: "リンク3", url: "https://example.com/3" },
  ]
};

export default function TemplatesWippro() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const groupId = useParams().group_id as string;
  console.log("Group ID:", groupId);
  const [group, setGroup] = useState<WorkGroup | null>(null);
  const [posts, setPosts] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchWorkGroupByGroupId(groupId)
      .then((data: SupabaseResponse<GetWorkGroupsData>) => {
        const result = data as GetWorkGroupsData;
        if (result) {
          console.log("Fetched group data:", result);
          setGroup({
            id: result.group_id,
            userInfo: {
              id: result.user_id,
              name: "不明なユーザー",
              iconImg: "",
            },
            note: result.content ?? "",
            updatedAt: result.update_datetime,
            title: result.title ?? "",
            images: result.images,
            isClose: result.close_flag,
          });
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));

      fetchPostsByGroupId(groupId)
        .then((data: SupabaseResponse<GetPostsData[]>) => {
          console.log("Fetched posts data:", data);
          const result = data as GetPostsData[];
          if (Array.isArray(result)) {
            setPosts(result.map(item => ({
                id: item.post_id,
                userInfo: {
                  id: item.user_id,
                  name: "不明なユーザー",
                  iconImg: "",
                },
                note: item.content ?? "",
                image: item.image ?? "",
                createdAt: item.create_datetime,
            })));
          } else {
            console.error("Invalid data format:", data);
          }
        })
        .catch(console.error)
        .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col bg-white h-screen">
      <OrganismsPostListHeaderCard
        userInfo={group ? group.userInfo : {id: "", name: "不明なユーザー", iconImg: ""}}
        editable={group ? group.userInfo.id === getUserInfo()?.id : false}
        updated={group ? new Date(group.updatedAt).toLocaleDateString() : ""}
        title={group ? group.title : ""}
        note={group ? group.note : ""}
        likeNum={0}
        isLike={false}
        bookmarkNum={0}
        isBookmark={false}
        stamps={[]}
        postNum={group ? group.images.length : 0}
      />

      {/* 表示切替タブ（アイコンボタン） */}
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
        <span className="mr-2">表示サイズ：</span>
        <button
          className={`p-2 rounded-full border flex items-center justify-center w-10 h-10 ${activeTab===0 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
          onClick={()=>setActiveTab(0)}
          aria-label="カード表示"
        >
            {/* カードアイコン（リスト→■3つ） */}
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" />
            </svg>
        </button>
        <button
          className={`p-2 rounded-full border flex items-center justify-center w-10 h-10 ${activeTab===1 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
          onClick={()=>setActiveTab(1)}
          aria-label="タイル表示"
        >
          {/* タイルアイコン（グリッド） */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="4" width="7" height="7" rx="2" />
            <rect x="13" y="4" width="7" height="7" rx="2" />
            <rect x="4" y="13" width="7" height="7" rx="2" />
            <rect x="13" y="13" width="7" height="7" rx="2" />
          </svg>
        </button>
        </div>

        {group && (group.userInfo.id === userInfo.id) && (
          <button
            className="new-post-button bg-green-500 text-white py-2 px-4 rounded-3xl"
            onClick={() => store.dispatch(openModal())}
          >
            新しいポスト
          </button>
        )}
      </div>

      <div className="flex flex-col" style={{minHeight: "calc(100vh - 350px)"}}>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === 0 ? (
            posts.map((post, index) => (
              <OrganismsPostCard className="mt-3" key={index} post={post} />
            ))
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
              {posts.map((post, index) => (
                <OrganismsPostCard key={index} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>

      <OrganismsPostFormModal />
    </div>
  );
}