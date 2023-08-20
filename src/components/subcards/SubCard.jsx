import React from "react";
import "./subcard.css";

const statusIcon = {
  "Todo": "circle",
  "In progress": "clock_loader_60",
  "Done": "check_circle",
  "Backlog": "report",
  "cancel": "cancel"
};

const SubCard = (props) => {
  const activeStatus={};
  props.userdata.map((idx) =>{
    activeStatus[idx.id]=idx.available
  })

  console.log(activeStatus)
  return (
    <div className="subcard" {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
      ref={props.innerRef}>
      <div className="topdata flex justify-between">
        <span className="text-sm">{props.id}</span>
        {props.grouping === "users" ? "" : <div class="userprofile-pic">
          <span class="material-symbols-outlined">
            account_circle
          </span>
          <span class={`status ${activeStatus[props.userId]? 'active-status' : 'unactive-status'}`}></span>
        </div>}
      </div>
      <div className="middledata">
        <span class="material-symbols-outlined">
          {(props.grouping === "priority") ? statusIcon[props.status] : ""}
        </span>
        <p className="text-sm font-medium my-auto">{props.title}</p>
      </div>
      <div className="lastdata">
        {props.grouping === "priority" ? "" : <div className="priority-box">
          <span class="material-symbols-outlined">
            {(props.grouping === "priority") ? "" : "signal_cellular_" + props.priority + "_bar"}
          </span>
        </div>}
        {props.tag.map((item, i) => (
          <div className="request-box">
            <span class="material-symbols-outlined">
              circle
            </span>
            <h1 key={i}>{item}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCard;
