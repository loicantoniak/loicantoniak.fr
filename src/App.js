import React from "react";
import "./App.css";

//import REDUX
import { Provider } from "react-redux";
import store from "./store/store";

//Import REACT ROUTER DOM
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

//Import Components
import Header from "./components/Header/Header";
import MenuBlocks from "./components/MenuBlocks/MenuBlocks";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Porfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import RouteProjectDetails from "./components/Porfolio/Project/RouteProjectDetails";
import Menu from "./components/Menu/Menu";

export default function App() {
  return (
    <Provider store={store}>
      {/* they are the differents routes of application*/}
      <Router>
        <Menu />
        <div className="content-home">
          <div className="overlay"></div>
          <div className="container-fluid">
            <Header />
            <Switch>
              <Route path="/accueil">
                <MenuBlocks />
              </Route>
              <Route path="/cv">
                <Resume />
              </Route>
              <Route path="/portfolio/:name">
                <RouteProjectDetails />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Redirect to="/accueil" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}
