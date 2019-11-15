import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../partial/Header";
import Footer from "../partial/Footer";

import Home from "../pages/Home";
import Philosophy from "../pages/Philosophy";
import Statement from "../pages/Statement";
import Explained from "../pages/Explained";
import Leadership from "../pages/Leadership";
import Partner from "../pages/Partner";
import Testimonies from "../pages/Testimonies";
import Endorsements from "../pages/Endorsements";
import Participate from "../pages/Participate";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";
import Involved from "../pages/Involved";
import Report from "../pages/Report";
import Event from "../pages/Event";
import Training from "../pages/Training";

import NotFound from "../pages/NotFound";

class Normal extends Component {
  state = {};
  onlyHome = () => {
    if (window.location.pathname == "/") return "transparent";
    return "normal";
  };
  componentDidMount() {
    this.onlyHome();
  }
  render() {
    const { path } = this.props.match;
    return (
      <div className="go--main--canvas">
        <Header type={this.onlyHome()} path={path}></Header>
        <div className="go--main-wrapper">
          <Route exact path={`${path}/`} component={Home} />
          <Route path={`${path}/philosophy`} component={Philosophy} />
          <Route path={`${path}/statement-faith`} component={Statement} />
          <Route path={`${path}/explained`} component={Explained} />
          <Route
            path={`${path}/leadership-team-structure`}
            component={Leadership}
          />
          <Route path={`${path}/partner`} component={Partner} />
          <Route path={`${path}/testimonies`} component={Testimonies} />
          <Route path={`${path}/endorsements`} component={Endorsements} />
          <Route path={`${path}/how-participate`} component={Participate} />
          <Route path={`${path}/resources`} component={Resources} />
          <Route path={`${path}/contact`} component={Contact} />
          <Route path={`${path}/get-involved`} component={Involved} />
          <Route path={`${path}/all-reports`} component={Report} />
          <Route path={`${path}/all-events`} component={Event} />
          <Route path={`${path}/all-trainings`} component={Training} />
          <Route path="/404" component={NotFound} />
        </div>
        <Footer path={path}></Footer>
      </div>
    );
  }
}

export default Normal;
