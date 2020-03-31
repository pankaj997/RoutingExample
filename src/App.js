import React from "react";
import Move from "./Move.js";
import Login from "./Login.js";
import About from "./About.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Move />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
