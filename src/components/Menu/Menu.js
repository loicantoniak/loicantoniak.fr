import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { connect } from "react-redux";
import { actions } from "../../store/store";

function Menu(props) {
  let accueil = useRouteMatch("/accueil");

  const { isOpen, open_burger, init_burger, init_reverse_class } = props;
  return (
    <>
      {accueil ? (
        <div></div>
      ) : (
        <div className="inline-menu-container">
          <Link to="/contact">
            <span className="status">Disponible </span>
          </Link>
          <BurgerMenu isOpen={isOpen} open_burger={open_burger} />
          <ul className={isOpen ? "burger-menu" : "inline-menu"}>
            <li>
              <Link to="/accueil" onClick={() => init_reverse_class()}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/cv" onClick={() => init_burger()}>
                CV
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => init_burger()}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => init_burger()}>
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
  isOpen: PropTypes.bool.isRequired,
  open_burger: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = {
  init_reverse_class: () => actions.init_reverse_class(),
  open_burger: () => actions.open_burger(),
  init_burger: () => actions.init_burger(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
