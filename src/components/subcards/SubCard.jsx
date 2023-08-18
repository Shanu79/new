import React from "react";
import "./subcard.css";

const SubCard = (props) => {
  return (
    <div
      className="subcard"
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.innerRef}
    >
      <p>{props.title}</p>
    </div>
  );
};

export default SubCard;
