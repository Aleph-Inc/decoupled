import React, { Component } from "react";

import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    const path = this.props.path;
    return (
      <footer className="go--footer">
        <div className="container">
          <div className="row">
            {/* Contact destails col */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="go--footer__title">
                <h2>Contact</h2>
              </div>
              <div className="go--footer__content content--contact">
                <ul>
                  <li>
                    <i className="fa fa-home" />
                    <p>
                      GO 2020 <br />
                      Global Outreach e.V.
                      <br />
                      Grabbeallee 19
                      <br />
                      13156 Berlin
                      <br />
                      Germany
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-mobile" />
                    <p>+49 30 499 874 60</p>
                  </li>
                  <li className="icon email">
                    <i className="fa fa-envelope" />
                    <p>
                      <a href="mailto:info@go2020.world">info@go2020.world</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick links col */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="go--footer__title">
                <h2>Quicklinks</h2>
              </div>
              <div className="go--footer__content content--as">
                <ul>
                  <li>
                    <Link to={`${path}/`}>Home</Link>
                  </li>
                  <li>
                    <Link to={`${path}/explained`}>About</Link>
                  </li>
                  <li>
                    <Link to={`${path}/how-participate`}>
                      How to participate
                    </Link>
                  </li>
                  <li>
                    <Link to={`${path}/resources`}>Resources</Link>
                  </li>
                  <li>
                    <Link to={`${path}/contact`}>Contact</Link>
                  </li>
                  <li>
                    <Link to={`${path}/get-involved`}>Get Involved</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4" />
            {/* Logo  */}
            <div className="col-lg-2">
              <div className="go--footer__image">
                <img src="/media/god-logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="go--footer__bottom">
            <div className="go--footer__bottom--social">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="go--footer__bottom--copyright">
              <p>© Copyright 2018 by GO 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
