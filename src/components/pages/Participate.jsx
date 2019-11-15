import React, { Component } from "react";

class Participate extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/every-believer-small.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner  hero--section__title--height go__pt--elarge go__pb--elarge d-flex align-items-center  justify-content-center">
              <div>
                <h1>How to participate</h1>
                <p>
                  GO 2020 is dedicated to mobilizing and training every believer
                  possible for personal evangelism.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large">
          <div className="container">
            <div className="content--section go__pb--large">
              <div className="content--section__large">
                <p>
                  You can participate as an individual, church, ministry, or
                  denomination. Everyone committed to the biblical message of
                  the Gospel is invited to be involved.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="content--section go__pb--large">
                  <div className="content--section">
                    <p>
                      <strong> As a church </strong> use May 2020 for strategic
                      prayer for the lost, prepare your congregation with
                      evangelistic training, start to organize team outreaches,
                      larger events etc. and motivate every member of your
                      congregation to share their faith personally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content--section go__pb--large">
                  <div className="content--section">
                    <p>
                      <strong> As an individual believer </strong>, make your
                      plans to pray for your unsaved friends and family,
                      neighborhood and find creative ways to reach them in a way
                      that fits your gift and calling. Do it in your own way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="content--section go__pb--large">
                  <div className="content--section">
                    <p>
                      <strong> As a denomination </strong> – use this unique
                      global dynamic within the Body of Christ to activate and
                      inspire your churches and leaders to renew their passion
                      for the lost and put a fresh focus on prayer, evangelism,
                      discipling new believers and church planting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content--section">
              <div className="content--section__large align-text-center">
                <p>
                  “Everyone can reach someone - Together we can reach the
                  world!”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large participate--wrap align-text-center">
          <div className="container">
            <div className="content--section go__pb--large">
              <div className="content--section__large go__pb--medium">
                <p>
                  <strong> GET INVOLVED</strong>
                </p>
                <p>
                  We encourage you, your church or your network or organization
                  to join GO 2020 launching beginning of the month with prayer
                  doing all sorts of joint or individual evangelistic outreaches
                  during the whole month.
                </p>
              </div>
              <div className="content--section">
                <p>
                  <b>JOIN AS...</b>
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Individual
                  </a>
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Church
                  </a>
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Denomination
                  </a>
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Ministry
                  </a>
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Network
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Participate;
