import React from "react";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <>
      <ul className="social">
        <li>
          <a href="https://twitter.com/AntoniakLoic" title="twitter" target="blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lolo_rocks_/" title="instagram" target="blank">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lo%C3%AFc-antoniak/" title="linkedin" target="blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/loicantoniak" title="github" target="blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </>
  );
}
