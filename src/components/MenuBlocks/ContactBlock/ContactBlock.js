import React from "react";
import PropTypes from "prop-types";
import "./ContactBlock.css";
import { Link } from "react-router-dom";

export default function ContactBlock(props) {
  const { add_reverse_and_init_burger } = props;
  return (
    <Link to="/contact" onClick={() => add_reverse_and_init_burger()}>
      <div className="contact-block menu-block">
        <div className="contact-block-container">
          <h2 className="contact menu-item">Contact</h2>
        </div>
      </div>
    </Link>
  );
}

ContactBlock.propTypes = {
  onClick: PropTypes.func,
};
