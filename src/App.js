import React from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import MenuBlocks from "./components/MenuBlocks/MenuBlocks";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Porfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import RouteProjectDetails from "./components/Porfolio/Project/RouteProjectDetails"
import Menu from "./components/Menu/Menu";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reverseClass: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.initialState = this.initialState.bind(this);
  }

  //Change state : add reverse class when you use onClick
  handleClick() {
    this.setState({
      reverseClass: true,
    });
  }

  // Return to the default state of reverseClass when you click on Home menu
  initialState() {
    this.setState({
      reverseClass: false,
    });
  }

  render() {
    return (
      <>
      {/* they are the differents routes of application*/}
        <Router>
          <Menu onClick={this.initialState} />
          <div className="content-home">
            <div className="overlay"></div>
            <div className="container-fluid">
              <Header reverse={this.state.reverseClass} />
              <Switch>
              <Route path="/accueil">
                <MenuBlocks onClick={this.handleClick} />
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
      </>
    );
  }
}
