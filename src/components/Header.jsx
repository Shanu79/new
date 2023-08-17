import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-[#f4f5f8]  flex h-[45px] p-9 items-center w-full">
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
    </>
  );
};

export default Header;
