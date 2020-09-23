import React from "react";
import PropTypes from "prop-types";

function Star({ active }) {
  return <span>{active ? "x" : "o"}</span>;
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
