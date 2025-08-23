"use client";

import React, { useState } from "react";
import { createElement } from "react";

const userInfo = {
  name: "まーぼーどーふ",
  id: "@mabotofu06"
};

const wippoData = {
  title: "エッチなバニーガール衣装を描きたい 😀",
  content: "てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてす",
  images: [
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
    "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
    "https://pbs.twimg.com/media/GKi6EmfbEAAfXKG?format=jpg",
  ],
  update: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
};

export const ActionMenu = ()=>{
  return(
    <div className="actions flex items-center gap-6 mt-2">
      <button
        className="like flex items-center gap-1 text-gray-600 hover:text-red-500 transition"
        onClick={() => alert("いいねしました")}
        aria-label="いいね"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="heart-icon"
        >
          <path d="M10 17.5l-1.45-1.32C4.4 12.36 2 10.28 2 7.5 2 5.5 3.5 4 5.5 4c1.04 0 2.04.51 2.65 1.35C8.96 4.51 9.96 4 11 4c2 0 3.5 1.5 3.5 3.5 0 2.78-2.4 4.86-6.55 8.68L10 17.5z" />
        </svg>
      </button>
      
      <button
        className="bookmark flex items-center gap-1 text-gray-600 hover:text-blue-500 transition"
        onClick={() => alert("ブクマしました")}
        aria-label="ブクマ"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 20 20"
          className="bookmark-icon"
        >
          <path d="M5 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a1 1 0 0 1-1.447.894L10 15.618l-4.553 2.276A1 1 0 0 1 4 17V3zm2 0v13.382l3-1.5 3 1.5V3H7z" />
        </svg>
      </button>

          <button
            className="stamp flex items-center gap-1 text-gray-600 hover:text-green-500 transition"
            onClick={() => alert("スタンプしました")}
            aria-label="スタンプ"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="stamp-icon"
            >
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="7" cy="9" r="1" fill="currentColor" />
              <circle cx="13" cy="9" r="1" fill="currentColor" />
              <path d="M7 13c1.5 1 4.5 1 6 0" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </button>
    </div>
  )
}

export function OrganismsWipproCard(props:{className?: string}) {
  const iconSize = "w-10 h-10";
  const [imgIdx, setImgIdx] = useState(0);
  const total = wippoData.images.length;
  const handlePrev = () => setImgIdx(idx => (idx - 1 + total) % total);
  const handleNext = () => setImgIdx(idx => (idx + 1) % total);
  return createElement("div", { className: `post-card relative border rounded-lg overflow-hidden h-[600px] ${props.className}` }, (
    <div>
      {/* Header */}
      <div className="header absolute top-0 bg-white flex items-center justify-between w-full p-2 z-50">
        <div className="flex items-center">
          <div className={"user-icon bg-green-800 rounded-full " + iconSize}></div>
          <div className="user-info ml-3 flex flex-col justify-center text-md">
            <h2 className="user-name font-semibold">{userInfo.name}</h2>
            <p className="user-id text-xs">{userInfo.id}</p>
          </div>
        </div>
        <div className="post-update text-gray-500">
          更新：{new Date(wippoData.update).toLocaleDateString()}
        </div>
      </div>

      <img
        src={wippoData.images[imgIdx]}
        alt={`Post Image ${imgIdx+1}`}
        onClick={()=>{window.location.href = "/Wippro"}}
      />
      {/* 画像スライダー */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-green-100"
          onClick={handlePrev}
          aria-label="前の画像"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-green-100"
          onClick={handleNext}
          aria-label="次の画像"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>

      {/* Footer */}
      <div className="footer absolute bottom-0 bg-white p-4 w-full">
        {/* インジケーター */}
        <div className="flex justify-center">
        <div className="flex gap-2 z-50">
          {wippoData.images.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-3 h-3 rounded-full ${imgIdx === i ? 'bg-green-600' : 'bg-gray-300'} transition-all`}
            />
          ))}
        </div>
        </div>
        
        <div className="post-details flex w-full max-h-16">
          <div className="w-4/5 overflow-hidden">
            <h2 className="post-title text-xl font-semibold">{wippoData.title}</h2>
            <p className="post-content">{wippoData.content}</p>
          </div>
          <div className="ms-8">
            投稿数: <span className="post-num text-green-600 font-semibold">{wippoData.images.length}</span>
          </div>
        </div>
        <ActionMenu />
      </div>
    </div>
  ));
}
