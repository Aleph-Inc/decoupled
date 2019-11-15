import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Normal from "./components/separete/Normal";
import Full from "./components/separete/Full";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Normal} />
          <Route path="/user" component={Full} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default App;
