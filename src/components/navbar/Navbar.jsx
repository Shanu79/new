import React, { useState } from "react";
import "./navCss.css";
import { useSelector, useDispatch } from "react-redux";
import { setGrouping } from "../../store/groupingSlice";

const Navbar = () => {
  const [viewer, setViewer] = useState(false);
  const grouping = useSelector((state) => state.grouping);
  const dispatch = useDispatch();

  return (
    <>
      <div className="header">
        <div onClick={() => {
          setViewer(!viewer);
        }} className={`selector`}>
          <span className="material-symbols-outlined">tune</span>
          <button>Display</button>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </div>
      <div className={`selector-expand ${viewer ? 'selector-expand-clicked' : 'selector-expand-unclicked'}`}>
        <div className="label">
          <h1>Grouping</h1>
        </div>
        <div className="selector">
          <select value={grouping}
            onChange={(e) => dispatch(setGrouping(e.target.value))}>
            <option value="status">Status</option>
            <option value="users">Users</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="label">
          <h1>Ordering</h1>
        </div>
        <div className="selector">
          <select>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
