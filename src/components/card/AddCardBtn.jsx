import React from "react";

const AddCardBtn = (props) => {
  const handleClick = () => {
    props.isClick();
  };
  return (
    <div
      className="bg-[#3394CC] flex text-white hover:cursor-pointer gap-2 hover:bg-[#64b2e0] px-2 pt-2.5 pb-2 ml-1 h-fit w-[272px] min-w-[272px] rounded-sm shadow-md mr-2"
      onClick={handleClick}
    >
      <span className="material-symbols-outlined">add</span>
      <span>Add another list</span>
    </div>
  );
};

export default AddCardBtn;
