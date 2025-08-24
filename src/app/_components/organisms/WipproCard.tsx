"use client";

import React, { useState } from "react";
import { createElement } from "react";
import { AtomsIconHeart } from "../atoms/icon/Heart";
import { ActionButton } from "../molecules/ActionButton";
import { AtomsIconBookmark } from "../atoms/icon/Bookmark";
import { AtomsIconFace } from "../atoms/icon/Face";
import { OrganismsReactionButton } from "./ActionButton";
import { OrganismsStampButton } from "./StampButton";

const userInfo = {
  name: "まーぼーどーふ",
  id: "@mabotofu06"
};

const wippoData = {
  title: "",
  content: "",
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
      <OrganismsReactionButton
        isLike={false}
        isBookmark={false}
        likeNum={0}
        bookmarkNum={0}
      />
      <OrganismsStampButton />
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
