import React from "react";
import PropTypes from "prop-types";
import "./ResumeBlock.css";
import { Link } from "react-router-dom";

export default function ResumeBlock(props) {
  const { add_reverse_and_init_burger } = props;
  return (
    <Link to="/cv" onClick={() => add_reverse_and_init_burger()}>
      <div className="about-block menu-block">
        <div className="about-block-container">
          <h2 className="about menu-item">CV</h2>
        </div>
      </div>
    </Link>
  );
}

ResumeBlock.propTypes = {
  onClick: PropTypes.func,
};
