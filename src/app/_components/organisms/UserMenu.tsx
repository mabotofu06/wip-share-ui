"use client";

import { useState } from "react";


type Props = {
  name: string;
  id: string;
  iconImg: string;
};

export const OrganismsUserMenu = (props: Props) => {
  const [open, setOpen] = useState(true);
  const iconSize = "w-10 h-10";

  return (
    <div
      className="user-menu mt-5 p-3 flex items-center bg-white hover:opacity-80 hover:bg-green-100"
      onClick={() => window.location.href = "/User"}
    >
      <div className={"user-icon bg-green-800 rounded-full " + iconSize}></div>
      <div className="user-info ml-6 flex flex-col justify-center text-md">
        <h2 className="user-name font-semibold">{props.name}</h2>
        <p className="user-id text-xs">{props.id}</p>
      </div>
    </div>
  );
};
