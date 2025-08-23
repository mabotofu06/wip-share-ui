'use client'

import { useState } from "react";
import { OrganismsWipproCard } from "../organisms/WipproCard";


const NavigationTab = (props: { activeTab: number; onChange: (index: number) => void; }) => {
  const navigationMenu = [
    {label: "Pick Up!", code: 0},
    {label: "最新", code: 1},
    {label: "フォロー中", code: 2},
  ]

  const activeNavCode = navigationMenu[props.activeTab].code;

  const onTabClick = (index: number) => {
    props.onChange(index);
  }

  const navTabElements = navigationMenu.map((item, index) => {
    if(item.code !== activeNavCode){return (
      <button className="nav-tab-item-button w-1/3 py-2 border rounded-t-xl" key={index} onClick={() => onTabClick(index)}>
        {item.label}
      </button>
    )}
    else {
      return (
        <button className="nav-tab-item-button w-1/3 py-2 rounded-t-xl bg-green-500 text-white" key={index} onClick={() => onTabClick(index)}>
          {item.label}
        </button>
      );
    }
  });

  return (
    <div className="nav-tab flex mt-3">
      {navTabElements}
    </div>
  );
};

export default function TemplateTop() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col bg-white h-full">
      <NavigationTab activeTab={activeTab} onChange={setActiveTab} />
      <div className="timeline overflow-y-auto custom-scrollbar px-3">
        {Array.from({ length: 5 }, (_, index) => (
          <OrganismsWipproCard className="mt-3" key={index} />
        ))}
      </div>
    </div>
  );
}
