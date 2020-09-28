import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function Menu(props) {
  let accueil = useRouteMatch("/accueil");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {accueil ? (
        <div></div>
      ) : (
        <div className="inline-menu-container">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <span className="status">Disponible </span>
          </Link>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul className={isOpen ? "burger-menu" : "inline-menu"}>
            <li>
              <Link to="/accueil" onClick={props.onClick}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/cv" onClick={() => setIsOpen(false)}>
                CV
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func,
};
