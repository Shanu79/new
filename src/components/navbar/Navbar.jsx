import React, {useState} from "react";
import "./navCss.css";

const Navbar = () => {

  const [viewer, setViewer] = useState(false);

  return (
    <>
      <div className="header">
        <div onClick={()=>{
                setViewer(!viewer);
              }} className={`selector`}>
            <span className="material-symbols-outlined">tune</span>
              <button>Display</button>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
      </div>
      <div className={`selector-expand ${viewer? 'selector-expand-clicked':''}`}>
            <div className="label">
              <h1>Grouping</h1>
            </div>
            <div className="selector">
              <h1>Status</h1>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
            <div className="label">
              <h1>Ordering</h1>
            </div>
            <div className="selector">
              <h1>Priority</h1>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
      </div>
    </>
  );
};

export default Navbar;
