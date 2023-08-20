import React from "react";
import "./headcard.css";
import AddSubCard from "../subcards/AddSubCard";

const priorityData = {
  "4": "Urgent",
  "3": "High",
  "2": "Medium",
  "1": "Low",
  "0": "No priority",
};

const statusIcon = {
  "Todo": "circle",
  "In progress": "clock_loader_60",
  "Done": "check_circle",
  "Backlog": "report",
  "cancel": "cancel"
};

const HeadCard = ({ title, count, userdata, grouping }) => {

  const tempUsersData = {}
  userdata.map((idx) => {
    tempUsersData[idx.id] = idx.name
  });
  const activeStatus = {};
  userdata.map((idx) => {
    activeStatus[idx.id] = idx.available
  });
  return (
    <div className="head-card-container">
      <div className="head-card-content">
        <div className="head-card-data">
          {grouping === "users" ? <div className="userprofile-pic-head">
            <span className="material-symbols-outlined">
              account_circle
            </span>
            <h2 class={`status-head ${activeStatus[title] ? 'active-status' : 'unactive-status'}`}></h2>
          </div> : <span class="material-symbols-outlined">
            {(title === "0" || title === "1" || title === "2" || title === "3" || title === "4") ? "signal_cellular_" + title + "_bar" : statusIcon[title]}
          </span>}
          <h1>{(title === "0" || title === "1" || title === "2" || title === "3" || title === "4") ? priorityData[title] : grouping === "status" ? title : tempUsersData[title]}</h1>
          <span>{count}</span>
        </div>
        <div className="head-card-icon">
          <AddSubCard />
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      </div>
    </div>
  );
};

export default HeadCard;
