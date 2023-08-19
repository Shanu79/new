import React from "react";
import "./subcard.css";

const SubCard = ({title}) => {
  return (
    <div
      className="subcard"
    >
      <p>{title}</p>
    </div>
  );
};

export default SubCard;
