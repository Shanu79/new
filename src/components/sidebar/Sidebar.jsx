import React from "react";
import user from "./user-blue.022f390c.png";
import arrow from "./download.png";
const Sidebar = () => {
  return (
    <div
      className="w=[40px] h-[100vh] p-1 bg-[#03629A] hover:bg-white fixed top-[44px] left-0 flex-col justify-start items-center cursor-pointer"
      style={{
        boxShadow: "-6px 2px 8px 1px #000",
      }}
    >
      <button className="w-8 h-8 rounded-sm cursor-pointer flex items-center bg-white">
        <img className="flex items-center mx-auto w-5 h-5" src={user} alt="user"></img>
      </button>
      <button className="w-8 h-8 mt-3 rounded-sm cursor-pointer flex items-center ">
        <img className="flex items-center mx-auto w-5 h-5" src={arrow} alt="user"></img>
      </button>
    </div>
  );
};

export default Sidebar;
