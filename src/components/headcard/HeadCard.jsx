import React from "react";
import "./headcard.css";
import AddSubCard from "../subcards/AddSubCard";

const HeadCard = ({ section, addSubCard }) => {
  return (
    <div className="head-card-container">
      <div className="head-card-content">
        <div className="head-card-data">
          <span className="material-symbols-outlined">report</span>
          <h1>{section.title}</h1>
          <span>2</span>
        </div>
        <div className="head-card-icon">
        <AddSubCard handleAddSubCard={addSubCard} cardId={section.id} />
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      </div>
    </div>
  );
};

export default HeadCard;
