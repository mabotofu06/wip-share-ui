"use client"

import { APP_NAME } from "@/app/_constants/app";
import { openModal } from "@/app/_state/slice/modal";
import { store } from "@/app/_state/store";
import { OrganismsUserMenu } from "./UserMenu";

const appName="Wippy"

const userInfo = {
  name: "まーぼーどーふ",
  id: "@mabotofu06"
};

const menuItems = [
  {
    name: "ホーム",
    link: "/Top",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9M4 10v10h16V10" />
      </svg>
    )
  },{
    name: "プロフィール",
    link: "/User",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8v4l3 3h-2l-3-3V8h2z" />
      </svg>
    )
  },{
    name: "作業中の投稿",
    link: "/Project/List",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10.5a8.38 8.38 0 01-7.5 7.5A8.38 8.38 0 013 10.5V7a4 4 0 014-4h6a4 4 0 014 4v3.5z" />
        <path d="M8 15h8" />
      </svg>
    )
  },{
    name: "ブックマーク",
    link: "/Top",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10.5a8.38 8.38 0 01-7.5 7.5A8.38 8.38 0 013 10.5V7a4 4 0 014-4h6a4 4 0 014 4v3.5z" />
        <path d="M8 15h8" />
      </svg>
    )
  },{
    name: "フォローしているユーザー",
    link: "/Top",
    icon: (
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10.5a8.38 8.38 0 01-7.5 7.5A8.38 8.38 0 013 10.5V7a4 4 0 014-4h6a4 4 0 014 4v3.5z" />
        <path d="M8 15h8" />
      </svg>
    )
  }
];

function getMenuItems() {
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return menuItems.map((item, index) => {
    return (
      <button className="flex items-center text-lg hover:bg-green-50 py-3" key={index} onClick={() => navigateTo(item.link)}>
        {item.icon}
        {item.name}
      </button>
    );
  });
}

export default function OrganismsMenuBar_L() {
  return (
    <header className="bg-white-300 shadow flex flex-col justify-between w-80">
      <div>
        <div className="p-3">
          <h1 className="text-4xl font-semibold text-green-800">{APP_NAME}</h1>
        </div>

        <OrganismsUserMenu
          name={userInfo.name}
          id={userInfo.id}
          iconImg={""}
        />

        <div className="navigation px-8">
          <nav className="flex flex-col">
            {getMenuItems()}
          </nav>
        </div>

        <div className="flex justify-center items-center mt-3">
          <button
            className="new-project-button p-4 bg-green-500 text-white rounded-3xl text-xl"
            onClick={() => {
              console.log("新しいプロジェクトを作成");
              store.dispatch(openModal());
              //window.location.href = "/Project/Create";
            }}
          >
            新しい投稿を開始
          </button>
        </div>
      </div>
    </header>
  );
}
