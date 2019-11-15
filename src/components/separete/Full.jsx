import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgot from "../pages/Forgot";

class Full extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const { path } = this.props.match;
    return (
      <React.Fragment>
        <Route exact path={`${path}/login`} component={Login} />
        <Route path={`${path}/register`} component={Register} />
        <Route path={`${path}/forgot`} component={Forgot} />
      </React.Fragment>
    );
  }
}

export default Full;
