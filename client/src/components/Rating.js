import React from "react";
import PropTypes from "prop-types";
import fullStarSrc from "../assets/rating_star_full.svg";
import emptyStarSrc from "../assets/rating_star_empty.svg";

function Star({ active }) {
  return (
    <span>
      {active ? (
        <img src={fullStarSrc} alt="Full star rating" />
      ) : (
        <img src={emptyStarSrc} alt="Empty star rating" />
      )}
    </span>
  );
}

function Rating({ value }) {
  return (
    <div>
      <Star active={value > 0.5} />
      <Star active={value > 1.5} />
      <Star active={value > 2.5} />
      <Star active={value > 3.5} />
      <Star active={value > 4.5} />
    </div>
  );
}

export default Rating;

Rating.propTypes = {
  value: PropTypes.number,
};
Star.propTypes = {
  active: PropTypes.bool,
};
