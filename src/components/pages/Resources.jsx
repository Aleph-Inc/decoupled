import React, { Component } from "react";

class Resources extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage:
              'url("/media/avi-richards-183715-unsplash-1440px.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner  hero--section__title--height go__pt--elarge go__pb--elarge d-flex align-items-center ">
              <div style={{ textAlign: "left" }}>
                <h1>Resources</h1>
                <p>Free download resources for GO 2020</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large">
          <div className="container">
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                GO 2020 Declaration of Intent.pdf
              </a>
            </div>
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>GO 2020
                Declaration of Intent.pdf
              </a>
            </div>
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>GO 2020
                Declaration of Intent.pdf
              </a>
            </div>
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>GO 2020
                Declaration of Intent.pdf
              </a>
            </div>
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>GO 2020
                Declaration of Intent.pdf
              </a>
            </div>
            <div className="download-button">
              <a href="#">
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>GO 2020
                Declaration of Intent.pdf
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resources;
