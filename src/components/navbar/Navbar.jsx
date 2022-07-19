import React from "react";
import logo from "./download.gif";
import icon from "./apps_white.2aa687f0.svg";

const Navbar = () => {
  const items = [
    {
      name: "Workspaces",
    },
    {
      name: "Recent",
    },
    {
      name: "Starred",
    },
    {
      name: "Templates",
    },
  ];
  return (
    <>
      <div className="bg-[#004269] flex items-center h-[45px] w-full px-1">
        <div className="flex mr-auto h-[33px]">
          <div className=" text-white rounded-sm pt-1.5 pb-2 px-2 hover:bg-[#4D7B96]">
            <img className="w-[20px] min-w-[20px] h-[20px] min-h-[20px]" src={icon} alt="icon" />
          </div>
          <div className="h-fit py-2 px-2 text-white my-auto rounded-sm hover:bg-[#4D7B96]">
            <img className="w-[75px] min-w-[75px] h-[15px] min-h-[15px]" src={logo} alt="icon" />
          </div>
          {items.map((i) => (
            <div className=" flex items-center text-sm px-3 rounded-sm text-white hover:bg-[#4D7B96]">
              <h1>{i.name}</h1>
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </div>
          ))}
          <button className="px-4 py-1 ml-3 text-white bg-[#003250] focus:bg-white hover:bg-[#336887] rounded-sm my-auto">
            Create
          </button>
        </div>
        <div className="flex gap-2 items-center ml-auto">
          <div className="h-fit items-center flex text-sm bg-[#4D7B96] rounded-sm">
            <span className="material-symbols-outlined text-[#d3e7f380] px-1">
              search
            </span>
            <div className="flex">
              <input
                type="search"
                id="default-search"
                className="bg-[#4D7B96] focus:bg-white p-1 rounded-sm focus:outline-none"
                required=""
                placeholder="Search"
              />
            </div>
          </div>
          <span className="material-symbols-outlined text-white">error</span>
          <span className="material-symbols-outlined text-white">
            notifications
          </span>
          <div className=" bg-zinc-300 flex items-center justify-center rounded-full w-[33px] h-[33px] my-auto">
            <span className="font-semibold text-indigo-900 text-lg">QK</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
