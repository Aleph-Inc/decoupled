import React, { Component } from "react";

class Training extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/training_bg.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner  hero--section__title--height go__pt--elarge go__pb--elarge d-flex align-items-center ">
              <div style={{ textAlign: "left" }}>
                <h1>ALL TRAININGS</h1>
                <p>All Go2020 training information</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large"></div>
      </React.Fragment>
    );
  }
}

export default Training;
