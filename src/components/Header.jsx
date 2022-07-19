import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white  flex h-[45px] items-center w-full ml-[40px]">
        <div className="flex items-center text-sm mx-auto">
          <span className="material-symbols-outlined px-2">public</span>
          <h1 className="font-bold py-2">
            This board is set to public. Board admins can change its visibility
            setting at any time.
          </h1>
          <h2 className="ml-3 font-light underline">Learn more here.</h2>
        </div>
        <span className="material-symbols-outlined">close</span>
      </div>
      <div className="flex h-[45px] w-full ml-[40px]">
        <div className="flex gap-2 mx-3 items-center">
          <h1 className="font-bold h-fit text-xl px-2 py-1 text-white">
            Kanban Board
          </h1>
          <div className=" bg-[#4DA1D2] p-1 pb-0 cursor-pointer rounded-sm">
            <span className="material-symbols-outlined m-0 text-white hover:text-yellow-300 scale-75 hover:scale-100">
              grade
            </span>
          </div>
          <span className="text-blue-400 font-light text-xl">|</span>
          <div className="flex items-center cursor-pointer gap-2 bg-[#4DA1D2] hover:bg-[#5faad5] py-1 px-3 rounded-sm">
            <span className="material-symbols-outlined m-0 text-white">public</span>
            <span className="text-white text-sm">Public</span>
          </div>
          <span className="text-blue-400 font-light text-xl">|</span>
          <div className=" bg-zinc-300 flex items-center justify-center rounded-full w-[33px] h-[33px] my-auto">
            <span className="font-semibold text-indigo-900 text-base">AH</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
