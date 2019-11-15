import React from "react";

const EndorsementItems = props => {
  return (
    <div className="go--endorsements go--endorsements__carousel--item">
      <div className="go--endorsements__image">
        <div className="go--endorsements__image--inner">
          <img src="/media/Loren-Cunningham.jpg" />
        </div>
      </div>
      <div className="go--endorsements__content">
        <div className="go--endorsements__title">
          <h5>Loren Cunningham</h5>
          <p>Youth With A Mission (YWAM)</p>
        </div>
        <div className="go--endorsements__body">
          <p>
            This is a vision from God. I am sha­ring this vision so that every
            nation will be reached with the Gospel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EndorsementItems;
