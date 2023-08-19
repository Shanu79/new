import React from "react";
import "./subcard.css";

const SubCard = (props) => {
  return (
    <div className="subcard">
      <div className="flex justify-between">
        <span className="text-sm">{props.id}</span>
        <span class="material-symbols-outlined">
          account_circle
        </span>
      </div>
      <div className="flex">
        <span className="material-symbols-outlined mt-0 pr-2">
          check_circle
        </span>
        <p className="text-sm font-medium my-auto">{props.title}</p>
      </div>

      {props.tag.map((item, i) => (
        <div className="request-box">
          <span class="material-symbols-outlined">
            circle
          </span>
          <h1 key={i}>{item}</h1>
        </div>
      ))}
    </div>
  );
};

export default SubCard;
