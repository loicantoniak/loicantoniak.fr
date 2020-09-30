import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import TypeWriter from "./TypeWriter/TypeWriter";
import DownloadButton from "./Download/DownloadButton";
import SocialIcons from "./SocialIcons/SocialIcons";
import { connect } from "react-redux";

function Header(props) {

  const { reverseClass } = props;

  const reverse = reverseClass ? "reverse" : "";

  return (
    <div className={"name-block " + reverse}>
      <div className={"name-block-container " + reverse}>
        <h1>
          <span>Je m'appelle Loïc Antoniak</span>Développeur front-end
        </h1>
        <TypeWriter />
        <DownloadButton />
        <SocialIcons />
      </div>
    </div>
  );
}

Header.propTypes = {
  reverseClass: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  reverseClass: state.reverseClass,
});

export default connect(mapStateToProps, null)(Header);
