import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel2";

import EndorsementItems from "../sections/EndorsementItems";

class Endorsement extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large go--endorsements ">
          <div className="container">
            <div className="go--endorsements__title">
              <h1>Endorsements</h1>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pb--large go--endorsements ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--elarge go__pb--elarge go--endorsements go--endorsements__slider ">
          <div className="container">
            <div className="go--endorsements__slider--carousel-vedio">
              <OwlCarousel
                className="owl-carousel video-embed endorsements-vedio"
                options={{
                  loop: true,
                  margin: 0,
                  nav: true,
                  items: 1
                }}
              >
                <div className="endorsements-vedio__items">
                  <iframe
                    width="854"
                    height="480"
                    frameBorder="0"
                    allowFullScreen="allowfullscreen"
                    src="https://www.youtube.com/embed/htaqzgXQt6g?autoplay=0&amp;start=0&amp;rel=0"
                  ></iframe>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large go--endorsements ">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
              <div className="col-lg-4">
                <EndorsementItems></EndorsementItems>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Endorsement;
