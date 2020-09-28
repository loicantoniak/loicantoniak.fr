import React from "react";
import PropTypes from 'prop-types';
import "./Filter.css";

export default function Filter(props) {
  const { name, onClick } = props;

  return (
    <>
      <li onClick={onClick}>{name}</li>
    </>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
};
