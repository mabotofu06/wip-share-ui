'use client'

import { OrganismsWipproCard } from "../organisms/WipproCard";
import { OrganismsTabMenu } from "../organisms/TabMenu";
import { OrganismsPostCard } from "../organisms/PostCard";

const navigationMenu = [
  {label: "Pick Up!", code: 0},
  {label: "最新", code: 1},
  {label: "フォロー中", code: 2},
]

export default function TemplateTop() {
  if(typeof window !== 'undefined' && window.localStorage.getItem('user_info') === null){
    window.localStorage.setItem('user_info', JSON.stringify({
      id: "@mabotofu06",
      name: "まーぼーどーふ",
      iconImage: "https://lh3.googleusercontent.com/a/ACg8ocJ5ARk3Lglj09EI5AYML1WXuktkksCPWTKJqIuwfJ9R0w0-EqXg=s288-c-no",
    }));
  }

  const initialTab = navigationMenu[0].code;

  return (
    <div className="flex flex-col bg-white h-full">
      <OrganismsTabMenu tabMenu={navigationMenu} activeTab={initialTab} onChange={()=>{}}>
        <div className="timeline overflow-y-auto custom-scrollbar px-3">
          {Array.from({ length: 5 }, (_, index) => (
            <div>
            <OrganismsWipproCard className="mt-3" key={index} />
            </div>
          ))}
        </div>
      </OrganismsTabMenu>
    </div>
  );
}
