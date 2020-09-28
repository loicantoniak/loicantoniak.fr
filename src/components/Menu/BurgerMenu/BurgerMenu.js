import React from "react";
import "./BurgerMenu.css";
import PropTypes from "prop-types";

export default function BurgerMenu(props) {
  const { isOpen, setIsOpen } = props;

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen ? "burger-button" : "cross-button"}
    >
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </button>
  );
}

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
