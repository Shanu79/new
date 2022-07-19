import React from 'react'

const AddSubCardBtn = (props) => {
  const handleClick=()=>{
    props.isClick();
  }
  return (
    <div
      className="hover:cursor-pointer flex items-center h-[35px] font-light px-2 py-1 my-2 rounded-sm hover:bg-gray-300"
      onClick={handleClick}
    >
      <span className="material-symbols-outlined">add</span>
      <span>Add a Card</span>
    </div>
  )
}

export default AddSubCardBtn
