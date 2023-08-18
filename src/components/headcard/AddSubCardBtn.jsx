import React from 'react'
import "./headcard.css";

const AddSubCardBtn = ({isClick, handleAddSubCard}) => {
  const handleClick=()=>{
    isClick();
  }
  return (
    <>
      <span onClick={handleClick} className="material-symbols-outlined">add</span>
    </>
  )
}

export default AddSubCardBtn
