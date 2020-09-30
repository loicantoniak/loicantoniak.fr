import React from "react";
import "./BurgerMenu.css";
import PropTypes from "prop-types";

export default function BurgerMenu(props) {
  const { isOpen, open_burger } = props;

  return (
    <button
      onClick={() => open_burger()}
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
  open_burger: PropTypes.func.isRequired,
};
