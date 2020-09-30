import React from "react";
import PropTypes from "prop-types";
import ResumeBlock from "./ResumeBlock/ResumeBlock";
import PortfolioBlock from "./PortfolioBlock/PortfolioBlock";
import ContactBlock from "./ContactBlock/ContactBlock";
import "./MenuBlocks.css";
import { connect } from "react-redux";
import { actions } from "../../store/store";

// This component represente the MenuBlock on the homePage

function MenuBlocks(props) {

  const { add_reverse_and_init_burger } = props;

  return (
    <div className="menu">
      <ResumeBlock add_reverse_and_init_burger={add_reverse_and_init_burger} />
      <PortfolioBlock add_reverse_and_init_burger={add_reverse_and_init_burger} />
      <ContactBlock add_reverse_and_init_burger={add_reverse_and_init_burger} />
    </div>
  );
}

MenuBlocks.propTypes = {
  add_reverse_and_init_burger: PropTypes.func,
};

const mapDispatchToProps = {
  add_reverse_and_init_burger: () => actions.add_reverse_and_init_burger(),
};

export default connect(null, mapDispatchToProps)(MenuBlocks);
