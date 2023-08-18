import React from "react";

const AddCardBtn = ({isClick}) => {
  const handleClick = () => {
    isClick();
  };
  return (
    <>
      <span onClick={handleClick} className="material-symbols-outlined">add</span>
    </>
  );
};

export default AddCardBtn;
