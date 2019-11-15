import React, { Component } from "react";

import { Link } from "react-router-dom";

class Forgot extends Component {
  state = {};
  render() {
    return (
      <section className="container-fluid p-0 m-0 authpage">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div
              className="forgot_bg"
              style={{ backgroundImage: "url('/media/forgot_bg.jpg')" }}
            >
              {/* <a href="javascript:history.go(-1)" class="btn btn-default btn-back">
                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
    
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="61022" fill="#FFFFFF" fill-rule="nonzero">
                                    <polygon id="Shape"
                                        points="22 9.625 5.225 9.625 12.925 1.925 11 0 0 11 11 22 12.925 20.075 5.225 12.375 22 12.375">
                                    </polygon>
                                </g>
                            </g>
                        </svg>
                        Back
                    </a> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="small-logo-wrapper">
              <a href="#" className="logo-small">
                <img src="/media/logo-small_.jpg" alt="" />
              </a>

              <Link
                to="/user/login"
                className="btn btn-default btn-create-account"
              >
                Login
              </Link>
            </div>

            <form action="#">
              <div className="auth-form-wrapper">
                <div className="form-title">
                  <h2>Forgot Password ?</h2>
                </div>
                <div className="input-wrapper">
                  <label className="input-label">Email Address</label>
                  <input
                    type="text"
                    className="form-element"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <div className="input-wrapper">
                      <button
                        type="submit"
                        className="btn btn-default btn-danger float-right"
                      >
                        Send confirmation link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Forgot;
