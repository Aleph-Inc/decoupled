import React, { Component } from "react";

class Involved extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/involved-head-1440px.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner  hero--section__title--height go__pt--elarge go__pb--elarge d-flex align-items-center  justify-content-center">
              <div>
                <h1>Get involved</h1>
                <p>Together we can reach 1 billion with the Gospel!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--elarge go__pb--large">
          <div className="container">
            <div className="content--section go__pb--large">
              <div className="content--section__large">
                <p>
                  Register today and you will get access to helpful training
                  resources.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-primary"
              style={{ padding: "1.25rem", textTransform: "uppercase" }}
            >
              join now and get involved
            </a>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large">
          <div className="container">
            <figure>
              <a href="#">
                <img src="/media/we-want-to-join-go2020_1.png" alt="" />
              </a>
            </figure>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Involved;
