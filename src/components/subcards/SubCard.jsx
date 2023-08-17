import React from "react";

const SubCard = (props) => {
  return (
    <div
      className=" h-[35px] font-light px-2 py-1 my-2 rounded-sm shadow-md"
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.innerRef}
    >
      <p>{props.title}</p>
    </div>
  );
};

export default SubCard;
