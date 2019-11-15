import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  state = { active: false };
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  componentDidMount() {}
  render() {
    const path = this.props.path;
    return (
      <header className={"go--header " + this.props.type}>
        <div className="container">
          {/* Top Nav bar */}
          <div className="top-navbar" id="navbar">
            <div className="nav-item user-icon">
              <ul>
                <li>
                  <select className="country ">
                    <option value="volvo">Sri Lanka</option>
                  </select>
                </li>
                <li>
                  <select className="langage">
                    <option value="English">English</option>
                    <option value="Francais">Francais</option>
                    <option value="Italian">Italian</option>
                    <option value="audi">Audi</option>
                  </select>
                </li>
                <li className="login">
                  <Link className="" to="/user/login">
                    Login
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              <img src="/media/logo-go2020-small.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={e => {
                this.toggleClass(e);
              }}
            >
              <span className="navbar-toggler-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bars"
                  className="svg-inline--fa fa-bars fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 
                              7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16
                              16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837
                              0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  />
                </svg>
              </span>
            </button>
            <div
              className={
                this.state.active
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse "
              }
              id="navbarclick"
            >
              <ul className="navbar-nav ml-auto mr-0 align-items-end">
                <li className="nav-item active">
                  <Link className="nav-link" to={`${path}/`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link has-children" href="#">
                    About <i className="fa fa-chevron-down" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="" to={`${path}/explained`}>
                        GO 2020 - explained
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=""
                        to={`${path}/leadership-team-structure`}
                      >
                        Leadership Team & Structure
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/philosophy`}>
                        GO 2020 Philosophy
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/all-reports`}>
                        Reports
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/testimonies`}>
                        Testimonies
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/partner`}>
                        Partner
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/statement-faith`}>
                        Statement of Faith
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link has-children" href="#">
                    Participate <i className="fa fa-chevron-down" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link className="" to={`${path}/how-participate`}>
                        How to participate
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/all-events`}>
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/all-trainings`}>
                        Trainings
                      </Link>
                    </li>
                    <li>
                      <Link className="" to={`${path}/endorsements`}>
                        Endorsements
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${path}/resources`}>
                    Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${path}/contact`}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item red-background">
                  <Link className="nav-link" to={`${path}/get-involved`}>
                    Get Involved
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
