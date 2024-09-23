import React from "react";
import { CiLogout } from "react-icons/ci";
import useLogOut from "../../hooks/useLogout";

const LogOutButton = () => {
  const { loading, logOut } = useLogOut();
  return (
    <div className="mt-auto">
      {logOut ? (
        <CiLogout
          className="w-6 h-6 text-white hover:fill-slate-300 cursor-pointer"
          onClick={logOut}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogOutButton;
