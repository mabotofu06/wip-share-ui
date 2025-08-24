"use client"

import { APP_NAME } from "@/app/_constants/app";
import { openModal } from "@/app/_state/slice/modal";
import { store } from "@/app/_state/store";
import { OrganismsUserMenu } from "./UserMenu";

export default function OrganismsMenuBar_L() {
  return (
    <header className="bg-white-300 shadow flex flex-col justify-between w-80">
      <div>
        <div className="p-3">
          <h1 className="text-4xl font-semibold text-green-800">{APP_NAME}</h1>
        </div>

        <OrganismsUserMenu />

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
