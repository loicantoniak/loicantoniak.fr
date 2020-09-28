import React from "react";
import PropTypes from 'prop-types';

import "./PortfolioBlock.css";
import { Link } from "react-router-dom";

export default function PortfolioBlock(props) {
  return (
    <Link to="/portfolio" onClick={props.onClick}>
      <div className="portfolio-block menu-block">
        <div className="portfolio-block-container">
          <h2 className="portfolio menu-item">Portfolio</h2>
        </div>
      </div>
    </Link>
  );
}


PortfolioBlock.propTypes = {
  onClick: PropTypes.func
};