import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

export default function ProjectList(props) {
  const { name, category, image } = props;

  return (
    <div className="portfolio-item col-md-4">
      <Link to={"/portfolio/" + name}>
        <div className="portfolio-column">
          <div className="portfolio-hover">
            <div className="portfolio-content">
              <h2>{name}</h2>
              <hr />
              <p>{category}</p>
            </div>
            <div className="portfolio-overlay"></div>
            <img alt="portfolio" src={image} />
          </div>
        </div>
      </Link>
    </div>
  );
}

ProjectList.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
};