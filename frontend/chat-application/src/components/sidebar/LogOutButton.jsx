import React from "react";
import { CiLogout } from "react-icons/ci";

const LogOutButton = () => {
  return (
    <div className="mt-auto">
      <CiLogout className="w-6 h-6 text-white hover:fill-slate-300 cursor-pointer" />
    </div>
  );
};

export default LogOutButton;
