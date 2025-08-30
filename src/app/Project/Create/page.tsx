"use client";
import { OrganismsPostFormModal } from "@/app/_components/organisms/modal/PostFormModal";
import { openPostFormModal } from "@/app/_state/slice/modal";
import { store } from "@/app/_state/store";
import { useState } from "react";
import { useEffect } from "react";

export default function ProjectCreatePage() {
  useEffect(() => {
    document.title = "新しいプロジェクトを作成 | WIP Share";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "新しいプロジェクトの作成ページです。タイトルと説明を入力して投稿できます。");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "新しいプロジェクトの作成ページです。タイトルと説明を入力して投稿できます。";
      document.head.appendChild(meta);
    }
  }, []);

  const [open, setopenPostFormModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitProjectDraft = () =>{
    setopenPostFormModal(true);
  }

  const submitProject = () => {
    // TODO:ここでAPI送信などの処理を実装
    console.log("Project submitted:", { title, description });
    //store.dispatch(open())
    //setopenPostFormModal(true);
    window.location.href = "/Project/Create/Complete";
  }

  return (
    <div className="flex flex-col justify-center items-center w-full m-8">
      <h1 className="text-2xl font-bold mb-8">新しいプロジェクトを作成</h1>
      <div className="project-form w-[800px]">
          <div className="mb-4">
            <input
              type="text"
              className="w-full border rounded-3xl p-3"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="タイトルを入力"
              required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full border rounded-3xl p-5 resize-none"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={30}
            placeholder="プロジェクトの説明を入力"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-2xl font-bold border text-lg mt-4"
          onClick={submitProjectDraft}
        >
          下書きとして投稿
        </button>
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-2xl font-bold text-lg mt-4"
          onClick={submitProject}
        >
          投稿する
        </button>
      </div>

      {
        open
        ? (
          <div className="overlay">
            <div className="flex flex-col justify-center items-end h-full">
              <button
                className="text-6xl text-gray-600 hover:text-gray-800 flex items-center justify-center rounded-full"
                onClick={() => setopenPostFormModal(false)}
                aria-label="閉じる"
              >
              ×
              </button>
              <div className="bg-white text-2xl flex flex-col items-center w-[800px] rounded-2xl p-8">
                <span className="font-bold text-green-700 flex text-center mb-3">
                  作業状況を下書きとして保存しました
                </span>
              </div>
            </div>
          </div>)
        : null
      }

      <OrganismsPostFormModal />
    </div>
  );
};
