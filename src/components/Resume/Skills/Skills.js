import React from "react";
import "./Skills.css";
import Progress from "./Progress";

export default function Skills() {
  return (
    <div className="block-content">
      <h3 className="block-title">COMPETENCES</h3>

      <label className="progress-bar-label">HTML5 / CSS3</label>
      <div className="progress">
        <Progress width={90} />
      </div>

      <label className="progress-bar-label">JAVASCRIPT</label>
      <div className="progress">
        <Progress width={70} />
      </div>

      <label className="progress-bar-label">REACT - REDUX</label>
      <div className="progress">
        <Progress width={60} />
      </div>

      <label className="progress-bar-label">LESS - SASS</label>
      <div className="progress">
        <Progress width={60} />
      </div>

      <label className="progress-bar-label">PHP - SYMFONY</label>
      <div className="progress">
        <Progress width={50} />
      </div>

      <label className="progress-bar-label">WORDPRESS</label>
      <div className="progress">
        <Progress width={80} />
      </div>

      <label className="progress-bar-label">SQL</label>
      <div className="progress">
        <Progress width={70} />
      </div>
    </div>
  );
}
