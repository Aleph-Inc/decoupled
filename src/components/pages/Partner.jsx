import React, { Component } from "react";

class Partner extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/partners-1440px.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner go__pt--elarge go__pb--elarge d-flex align-items-center  justify-content-center">
              <div>
                <h1>Partner</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large">
          <div className="container partner-list">
            <img src="/media/icon/icon_1.png" alt="" />
            <img src="/media/icon/icon_2.png" alt="" />
            <img src="/media/icon/icon_3.png" alt="" />
            <img src="/media/icon/icon_4.png" alt="" />
            <img src="/media/icon/icon_5.png" alt="" />
            <img src="/media/icon/icon_6.png" alt="" />
            <img src="/media/icon/icon_7.png" alt="" />
            <img src="/media/icon/icon_8.png" alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Partner;
