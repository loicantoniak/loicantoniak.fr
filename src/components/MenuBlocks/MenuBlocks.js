import React from "react";
import PropTypes from 'prop-types';
import ResumeBlock from "./ResumeBlock/ResumeBlock";
import PortfolioBlock from "./PortfolioBlock/PortfolioBlock";
import ContactBlock from "./ContactBlock/ContactBlock";
import "./MenuBlocks.css";

// This component represente the MenuBlock on the homePage

export default function MenuBlocks(props) {
  return (
    <div className="menu">
      <ResumeBlock onClick={props.onClick}/>
      <PortfolioBlock onClick={props.onClick}/>
      <ContactBlock onClick={props.onClick}/>
    </div>
  );
}

MenuBlocks.propTypes = {
  onClick: PropTypes.func
};