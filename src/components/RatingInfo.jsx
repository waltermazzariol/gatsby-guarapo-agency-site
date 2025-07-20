import React from 'react';

const RatingInfo = ({data}) => {
  return (
    <div className="rating-info-wrapper">
      <div className="avatar-wrapper">
      {data.slice(0, 4).map((key, index) =>
          <div key={index} className="avatar">
            <img src={key.image.publicURL} alt={key.name} />
          </div>
      )}
      </div>
      <div className="rating-details">
        <span>
          <span className="stars">★★★★★</span>
          <span className="rating-score">5.0</span>
        </span>
        <p className="rating-text">Trusted by 1k+ customers</p>
      </div>
    </div>
  );
};

export default RatingInfo;