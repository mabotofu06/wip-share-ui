'use client'

import { useState } from "react";
import { ActionMenu, OrganismsWipproCard } from "../organisms/WipproCard";
import { OrganismsPostCard } from "../organisms/PostCard";
import { store } from "@/app/_state/store";
import { openModal } from "@/app/_state/slice/modal";

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

const postData = {
  title: "エッチなバニーガール衣装を描きたい",
  content: `バニーガール衣装のデザインについて考えています。セクシーさと可愛らしさを両立させるために、素材や色使い、アクセサリーの選定が重要です。<br>例えば、黒や赤のサテン生地を使うことで高級感を出しつつ、胸元や背中のカットを大胆にすることでセクシーさを演出できます。<br>耳やしっぽなどの小物も、ふわふわした素材を使うことで可愛らしさをプラスできます。<br>さらに、網タイツやハイヒールなどの定番アイテムも忘れずに取り入れたいです。<br>ポージングや表情も衣装の魅力を引き立てる要素なので、描く際にはキャラクターの個性や雰囲気に合わせて工夫したいです。<br>背景にはカジノやステージなど、バニーガールが映えるシチュエーションを選ぶとより魅力的なイラストになります。<br>衣装の細部までこだわり、見る人が思わず惹き込まれるような作品を目指して描いていきたいです。<br>今後は、他のカラーやデザインバリエーションも試してみて、自分だけのオリジナルバニーガール衣装を完成させたいと思います。`,
  image: "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
  update: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
  postNum: 13
};


export default function TemplatesWippro() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const iconSize = "w-15 h-15";

  return (
    <div className="flex flex-col bg-white h-screen">
      <div className="shadow rounded-4xl">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <div className={"user-icon bg-green-800 rounded-full " + iconSize}></div>
            <div className="user-info ml-3 flex flex-col justify-center text-md">
              <h2 className="user-name font-semibold">{userInfo.name}</h2>
              <p className="user-id text-xs">{userInfo.id}</p>
            </div>
          </div>
          <div className="post-update text-gray-500">
            更新：{new Date(postData.update).toLocaleDateString()}
          </div>
        </div>

        <div>
          <div className="post-details flex w-full">
            <div className="w-full">
              <h2 className="post-title text-xl font-semibold mb-3">{postData.title}</h2>
              <p className="post-content ms-3 max-h-42 overflow-y-scroll mb-8 custom-scrollbar" dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 border-t border-t-green-600">
            <ActionMenu />
            <div>
              投稿数: <span className="post-num text-green-600 font-semibold">{postData.postNum}</span>
            </div>
          </div>
        </div>
      </div>

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
        <button
          className={`p-2 rounded-full border flex items-center justify-center w-10 h-10 ${activeTab===2 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
          onClick={()=>setActiveTab(2)}
          aria-label="タイル表示"
        >
          {/* タイルアイコン（グリッド） */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="2" width="5" height="5" rx="1" />
            <rect x="9" y="2" width="5" height="5" rx="1" />
            <rect x="16" y="2" width="5" height="5" rx="1" />
            <rect x="2" y="9" width="5" height="5" rx="1" />
            <rect x="9" y="9" width="5" height="5" rx="1" />
            <rect x="16" y="9" width="5" height="5" rx="1" />
            <rect x="2" y="16" width="5" height="5" rx="1" />
            <rect x="9" y="16" width="5" height="5" rx="1" />
            <rect x="16" y="16" width="5" height="5" rx="1" />
          </svg>
        </button>
        </div>

        <button
          className="new-post-button bg-green-500 text-white py-2 px-4 rounded-3xl"
          onClick={() => store.dispatch(openModal())}
        >
          新しいポスト
        </button>

      </div>

      <div className="flex flex-col" style={{minHeight: "calc(100vh - 350px)"}}>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === 0 ? (
            Array.from({ length: 13 }, (_, index) => (
              <OrganismsPostCard className="mt-3" key={index} />
            ))
          ) : activeTab === 1 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
              {Array.from({ length: 13 }, (_, index) => (
                <OrganismsPostCard key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-4 p-2">
              {Array.from({ length: 13 }, (_, index) => (
                <OrganismsPostCard key={index} />
              ))}
            </div>
          )}
        </div>
      </div>

      <OrganismsPostCard/>
    </div>
  );
}