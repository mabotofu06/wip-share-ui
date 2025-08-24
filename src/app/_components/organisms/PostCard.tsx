"use client";

import { createElement, useState } from "react";
import { OrganismsReactionButton } from "./ActionButton";
import { OrganismsStampButton } from "./StampButton";

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
      <OrganismsStampButton />
    </div>
  )
}

type Props = {
  className?: string;
  size?: 'normal'|'small';
}

export function OrganismsPostCard(props: Props) {
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
          <div className="actions flex items-center gap-6 mt-2">
            <OrganismsStampButton />
          </div>
          
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
