import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#fff] flex items-center h-[45px] py-7 w-full pl-6">
            <div className=" flex items-center text-sm shadow-md hover:bg-[#f4f5f8] px-1 border-solid border-2 border-zinc-100 rounded-md">
            <span class="material-symbols-outlined text-sm">tune</span>
              <h1 className="text-xs font-medium px-1">Display</h1>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
      </div>
    </>
  );
};

export default Navbar;
