"use client";

import { createElement, useState } from "react";

const userInfo = {
  name: "まーぼーどーふ",
  id: "@mabotofu06"
};

const postData = {
  title: "新しいイラストを描きました！",
  content: "最近はデジタルペイントに挑戦しています。色使いや構図を工夫して、見る人が楽しめる作品を目指しています。ご感想やアドバイスがあればぜひ教えてください！これからも色々なジャンルに挑戦していきたいです。",
  image: "https://pbs.twimg.com/media/GMQKeJIaoAAhx9v?format=jpg",
  update: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
  postNum: 13
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

export function OrganismsPostCard(props:{className?: string, size?: 'normal'|'small'}) {
  const iconSize = props.size === 'small' ? "w-7 h-7" : "w-10 h-10";
  const [footerOpen, setFooterOpen] = useState(false);
  const [footerAnim, setFooterAnim] = useState<'expand'|'collapse'|''>('');
  const [showFooter, setShowFooter] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleFooterToggle = () => {
    if (footerOpen) {
      setFooterAnim('collapse');
      setTimeout(() => {
        setFooterOpen(false);
        setFooterAnim('');
        setShowFooter(false);
      }, 600); // collapse animation duration
    } else {
      setShowFooter(true);
      setFooterOpen(true);
      setFooterAnim('expand');
    }
  };

  return createElement("div",
    { className: `post-card relative border border-lime-500 rounded-2xl overflow-hidden bg-white${props.className ? ' '+props.className : ''}` }, (
    <div>
      <div className="header absolute top-0 p-2 w-full bg-white border-b border-green-500 opacity-40 hover:opacity-100">
        <span>投稿日: {new Date(postData.update).toLocaleDateString()}</span>
      </div>
      {/* 画像 全体表示（高さは画像に合わせる） */}
      <div className="flex justify-center items-center bg-gray-100">
        <img
          src={postData.image}
          alt="Post Image"
          onClick={() => setShowOverlay(true)}
        />
      </div>

      {/* オーバーレイ画像表示 */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setShowOverlay(false)}
        >
          <img
            src={postData.image}
            alt="拡大画像"
            style={{maxWidth: "90vw", maxHeight: "90vh", borderRadius: "16px", boxShadow: "0 0 32px #0008"}}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* フッター */}
      <div className="footer absolute bottom-0 bg-white p-2 w-full border-green-500 border-t opacity-40 hover:opacity-100">
        {showFooter && (
          <div
            className={`w-full ${footerAnim === 'expand' ? 'animate-footer-expand' : ''} ${footerAnim === 'collapse' ? 'animate-footer-collapse' : ''}`}
            style={{bottom: '60px', maxHeight: footerAnim === '' ? '0' : undefined, overflow: 'hidden'}}
          >
            <p className="post-content m-3">{postData.content}</p>
          </div>
        )}
        <div className="flex justify-between items-center">
          <ActionMenu />
          <button
            onClick={handleFooterToggle}
            className="bg-none border-none cursor-pointer p-0 mr-2"
          >
            {footerOpen ? (
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5"/></svg>
            ) : (
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  ));
}
