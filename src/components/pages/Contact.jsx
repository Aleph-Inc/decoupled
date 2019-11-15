import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="hero--section hero--section__title hero--section__gradient"
          style={{
            backgroundImage: 'url("/media/city-1440px.jpg")'
          }}
        >
          <div className="container">
            <div className="hero--section__title--inner hero--section__title--midheight go__pt--elarge go__pb--elarge d-flex align-items-center justify-content-center">
              <div>
                <h1>Contact</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section--wrap go__pt--elarge go__pb--elarge"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content--section">
                  <div className="content--section">
                    <h2>Get in Touch with Us:</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="go--form-section go__pt--medium">
                  <form>
                    <div className="form-group">
                      <label htmlFor="">Your Name</label>
                      <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Your Email</label>
                      <input type="email" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Subject</label>
                      <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Message</label>
                      <textarea
                        name=""
                        className="form-control"
                        id=""
                        cols={30}
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                    <div
                      className="g-recaptcha"
                      data-sitekey="1abc234de56fab7c89012d34e56fa7b8"
                    />
                    <button type="submit" className="btn btn-primary">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section--wrap go__pt--large go__pb--large">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content--section">
                  <div className="content--section">
                    <h2>Our Offices</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="content--section go__pt--large">
                  <div className="content--section">
                    <p>
                      <strong>International Office Berlin</strong>
                      <br />
                      Grabbeallee 19
                      <br />
                      13156 Berlin
                      <br />
                      Germany
                      <br />
                      Phone +49 (0)30 - 499 874 - 60
                      <br />
                      Fax +49 (0)30 - 499 874 - 61
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content--section go__pt--large">
                  <div className="content--section">
                    <p>
                      <strong>Office Lesotho</strong>
                      <br />
                      National Coordinator - Josias Mohanoe
                      <br />
                      <a href="mailto:lesotho@globaloutreachday.com">
                        lesotho@globaloutreachday.com
                      </a>
                      <br />
                      Phone: +266 2295 0473
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
