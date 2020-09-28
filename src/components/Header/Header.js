import React from "react";
import PropTypes from 'prop-types';
import "./Header.css";
import TypeWriter from "./TypeWriter/TypeWriter";
import DownloadButton from './Download/DownloadButton'
import SocialIcons from "./SocialIcons/SocialIcons";

export default function Header(props) {
  const reverseClassName = props.reverse ? "reverse" : "";

  return (
    <div className={"name-block " + reverseClassName}>
      <div className={"name-block-container " + reverseClassName}>
        <h1>
          <span>Je m'appelle Loïc Antoniak</span>Développeur front-end
        </h1>
        <TypeWriter />
        <DownloadButton/>
        <SocialIcons/>
      </div>
    </div>
  );
}

Header.propTypes = {
  reverse: PropTypes.bool
};