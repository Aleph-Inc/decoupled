import React, { Component } from "react";

import ExplainedSection from "../sections/ExplainedSection";
import EndorsementItems from "../sections/EndorsementItems";

class Explained extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/about-head-1440px.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner  hero--section__title--height go__pt--elarge go__pb--elarge d-flex align-items-center  justify-content-center">
              <div>
                <h1>GO 2020 - explained</h1>
                <p>
                  100 Million Christians reaching 1 Billion people with the
                  Gospel in May 2020
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="content--section go__pb--large">
                  <div className="content--section__large">
                    <ExplainedSection>
                      <p>
                        GO 2020 is a global vision to activate the whole Body of
                        Christ – millions of individual believers, churches and
                        large global ministries - to pray and share the Gospel
                        all over the world in an joint effort of evangelism
                        during the month of May 2020.
                      </p>
                    </ExplainedSection>
                  </div>
                </div>
                <div className="content--section go__pb--large">
                  <ExplainedSection>
                    <h2>THE CALLING</h2>
                    <p>
                      <em>
                        “The harvest is plentiful, but the workers are few.” Mt
                        9:37
                      </em>
                    </p>
                    <p>
                      The Great Commission is not an “optional assignment” for
                      the Church. Yet 93% of church members never share the
                      Gospel with others. GO 2020 aims to turn those numbers
                      upside down … to pursue the following:
                    </p>
                  </ExplainedSection>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="content--section go__pb--large">
                      <ExplainedSection>
                        <h2> VISION</h2>
                        <p>
                          To activate and train every Christian believer,
                          everywhere to share the Gospel of Jesus Christ.
                          Through a unique partnership effort involving many
                          different denominations and parachurch organizations,
                          this massive moment is meant to train and inspire
                          every believer to live a lifestyle of evangelism.
                        </p>
                      </ExplainedSection>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content--section go__pb--large">
                      <ExplainedSection>
                        <h2> GOAL</h2>
                        <p>
                          Mobilize 100 million believers to reach 1 Billion
                          people with the Gospel in May 2020.
                        </p>
                      </ExplainedSection>
                    </div>
                  </div>
                </div>
                <div className="content--section go__pb--large">
                  <div className="content--section">
                    <h2>HOW?</h2>
                    <p>
                      Through a strategic <a href="#">partnership network</a>{" "}
                      built over nearly a decade, GO 2020:
                    </p>
                    <ul>
                      <li>
                        <strong>
                          Encourages ordinary believers to share the Gospel
                        </strong>
                        through personal conversation and to demonstrate God’s
                        love through prayer, caring, and sharing in numerous
                        different ways.
                      </li>
                      <li>
                        <strong>Equips Churches </strong>
                        with training and materials in evangelism, discipleship
                        and church planting (<a href="#">see Resources</a>).
                      </li>
                      <li>
                        <strong>Promotes Kingdom partnership </strong>
                        as churches, denominations and ministries from many
                        different backgrounds work together to reach the world (
                        <a href="#">see Partner</a>).
                      </li>
                      <li>
                        <strong>
                          Invites every church to be part of a church planting
                        </strong>
                        initiative during the year 2020. Every church is
                        planting a church – together we can establish 1 million
                        new faith communities.
                      </li>
                      <li>
                        <strong>Makes the Gospel visible</strong>
                        through thousands of “Jesus Celebrations”, GO 2020
                        Events, March for Jesus and more.
                      </li>
                    </ul>
                    <ExplainedSection>
                      <p>&nbsp;</p>
                      <p>
                        GO 2020 is a special edition of Global Outreach Day,
                        which has been taking place every last Saturday of May
                        since 2012. On this day, every year, believers worldwide
                        have stepped out together in faith to share the Good
                        News.
                      </p>
                    </ExplainedSection>
                    <ExplainedSection>
                      <p>
                        25 million believers have already participated in Global
                        Outreach Day. To see what God has done, view Global
                        Outreach Day testimonies.
                      </p>
                    </ExplainedSection>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="go--expaline__endorsement">
                  <EndorsementItems></EndorsementItems>
                  <EndorsementItems></EndorsementItems>
                  <EndorsementItems></EndorsementItems>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap section--wrap__center go--shout go__pt--elarge go__pb--elarge">
          <div className="container">
            <div className="go--shout__content">
              <h1>
                «Every believer is a witness and a disciple maker – Every church
                is planting new churches»
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Explained;
