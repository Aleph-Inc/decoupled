import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel2";
import EndorsementItems from "../sections/EndorsementItems";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="home--revice"></div>
        <div className="hero--section hero--section__video">
          <div
            className="hero--section__video--inner"
            style={{
              backgroundImage: 'url("/media/go2020_background_video_image.jpg")'
            }}
          >
            <iframe
              className="video--youtube"
              width={1280}
              height={720}
              src="https://www.youtube.com/embed/RFtvsPlR4kI?autoplay=0&cc_load_policy=0&controls=0&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&version=3&loop=0&playlist=RFtvsPlR4kI&modestbranding=1&origin=http%3A%2F%2Fdev01.go2020.world&rel=0&showinfo=0&widgetid=1"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video--content">
              <img src="/media/logo-go2020-white-big.png" />
              <h1>Every Believer is a Witness! </h1>
              <h2> Together we can reach one billion people with the Gospel</h2>
              <p />
            </div>
          </div>
        </div>
        <div className="hero--section hero--section__responsive">
          <div
            className="hero--section__responsive--img go__pb--elarge go__pt--elarge d-flex align-items-end justify-content-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.4)), url("/media/black-man_0.jpg")'
            }}
          >
            <h1>
              Every Believer
              <br />
              is a Witness!
            </h1>
          </div>
          <div className="hero--section__responsive--together">
            <h2>Together we can reach one billion people with the Gospel!</h2>
          </div>
          <div className="hero--section__responsive--together no-padding">
            <img src="/media/globus-half.png" alt="" />
          </div>
        </div>
        <div
          className="section--wrap section--wrap__home section--wrap__home--gradient"
          style={{ backgroundImage: 'url("/media/goals.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div
                  className="d-flex align-items-center go__pt--large go__pb--large"
                  style={{ minHeight: "75vh" }}
                >
                  <div className="go__home--text go__home--text__dark">
                    <h2>
                      GOAL:
                      <br />
                      <br />
                      Mobilize 100 million believers to reach 1 Billion people
                      with the Gospel in May 2020{" "}
                    </h2>
                    <p>
                      GO 2020 is a special edition of Global Outreach Day. Join
                      thousands of churches and ministries worldwide and
                      dedicate the month of May 2020 to prayer and evangelism.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12" />
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__home go__pt--large go__pb--large">
          <div className="container">
            <div className="go--video-embed">
              <iframe
                width={854}
                height={480}
                frameBorder={0}
                allowFullScreen="allowfullscreen"
                src="https://www.youtube.com/embed/FG0TUfGF7SQ?autoplay=0&start=0&rel=0"
              />
            </div>
          </div>
        </div>
        <div
          className="section--wrap section--wrap__home section--wrap__home--gradient"
          style={{
            backgroundImage: 'url("/media/pray_and_send_bg_1440x582.jpg")'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div
                  className="d-flex align-items-center go__pt--large go__pb--large"
                  style={{ minHeight: "75vh" }}
                >
                  <div className="go__home--text go__home--text__quotation">
                    <h4> Activities</h4>
                    <h1>pray</h1>
                    <p>
                      Pray with millions of Christians on the first weekend and
                      send them out to share the Gospel during May 2020.
                    </p>
                    <h5>
                      <em>
                        “Ask the Lord of the harvest, therefore, to send out
                        workers into his harvest field.” Mth 9,37
                      </em>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12" />
            </div>
          </div>
        </div>
        <div
          className="section--wrap section--wrap__home section--wrap__home--gradient"
          style={{ backgroundImage: 'url("/media/train_bg_1440x1080.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12" />
              <div className="col-md-6 col-12">
                <div
                  className="d-flex align-items-center go__pt--large go__pb--large"
                  style={{ minHeight: "75vh" }}
                >
                  <div className="go__home--text go__home--text__quotation">
                    <h4> Activities</h4>
                    <h1>train</h1>
                    <p>
                      In the church and through online resources, ordinary
                      believers are being trained to share their faith through
                      personal conversation.
                    </p>
                    <h5>
                      <em />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section--wrap section--wrap__home section--wrap__home--gradient"
          style={{
            backgroundImage: 'url("/media/share_bg_1440x960.jpg")',
            backgroundPosition: "50% 0%"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div
                  className="d-flex align-items-center go__pt--large go__pb--large"
                  style={{ minHeight: "75vh" }}
                >
                  <div className="go__home--text go__home--text__quotation">
                    <h4> Activities</h4>
                    <h1>share</h1>
                    <p>
                      Evangelize through one-on-one witnessing or joint
                      outrea­ches during May ending with Global Outreach Day on
                      May 30th, 2020.
                    </p>
                    <h5>
                      <em />
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12" />
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large">
          <div className="container">
            <div className="go--endorsements__carousel">
              <OwlCarousel
                options={{
                  loop: true,
                  margin: 0,
                  nav: true,
                  dots: true,

                  responsive: {
                    0: {
                      items: 1
                    },
                    992: {
                      items: 3
                    },
                    1440: {
                      items: 3
                    }
                  }
                }}
                className="owl-carousel endorsements"
              >
                <EndorsementItems></EndorsementItems>
                <EndorsementItems></EndorsementItems>
                <EndorsementItems></EndorsementItems>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div
          className="section--wrap section--wrap__home"
          style={{
            backgroundImage: 'url("/media/how-to-participate-bg.jpg")'
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12" />
              <div className="col-md-6 col-12">
                <div
                  className="d-flex align-items-end go__pt--large go__pb--large"
                  style={{ minHeight: "75vh" }}
                >
                  <div>
                    <img src="/media/do-it-your-own-way.png" alt="" />
                    <div className="go__home--text go__home--text__white">
                      <h3>How to participate</h3>
                      <p>
                        You can participate with your whole denomination,
                        ministry and church through mobilizing and training
                        every believer possible for personal evangelism.. Every
                        church is invited to be involved into planting a new
                        church.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__gray section--wrap__center go__pt--large go__pb--large">
          <div className="container">
            <figure>
              <a href="#">
                <img src="/media/we-want-to-join-go2020_1.png" alt="" />
              </a>
            </figure>
          </div>
        </div>
        <div className="section--wrap section--wrap__gray section--wrap__center go__pb--elarge">
          <div className="container">
            <div className="go--dropshadow">
              <p>
                Together we can reach 1 billion with the Gospel! Register today
                and you will get access to helpful training resources.
              </p>
              <a href="#" className="btn btn-primary">
                Join Now!
              </a>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go__pt--large go__pb--large">
          <div className="container">
            <div className="go--partners__home">
              <div className="go--partners__home--title go__pb--medium">
                <h2>GO 2020 Partners</h2>
              </div>
              <div className="go--partners__home--carousel">
                <OwlCarousel
                  options={{
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,

                    responsive: {
                      0: {
                        items: 4
                      },

                      767: {
                        items: 4
                      },

                      992: {
                        items: 8
                      }
                    }
                  }}
                  className="owl-carousel partners"
                >
                  <div className="item">
                    <div className="item_inner d-flex align-items-center">
                      <div className="go--partners__home--carousel__logo">
                        <img src="/media/07_Foursquare.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item_inner d-flex align-items-center">
                      <div className="go--partners__home--carousel__logo">
                        <img src="/media/TableCoalition_Mark.png" alt="" />
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go--shout go__pt--elarge go__pb--elarge">
          <div className="container">
            <div className="go--shout__content">
              <h1>
                «If we all stand together <br />
                we can reach 1 billion <br />
                people with the Gospel!» <br />
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
