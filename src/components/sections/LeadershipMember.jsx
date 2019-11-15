import React from "react";

const LeadershipMember = props => {
  return (
    <React.Fragment>
      <div className="col-lg-4">
        <div className="go--staff-member go--staff-member__card">
          <div className="go--staff-member__card--image">
            <div className="go--staff-member__card--image__inner">
              <img src="/media/Loren-Cunningham.jpg" />
            </div>
          </div>
          <div className="go--staff-member__card--content">
            <h5> Loren Cunningham </h5>
            <p> Youth With A Mission (YWAM)</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeadershipMember;
