import React from "react";
import PropTypes from "prop-types";

function List({ children }) {
  return <div>{children}</div>;
}

export default List;
List.propTypes = {
  children: PropTypes.any,
};
