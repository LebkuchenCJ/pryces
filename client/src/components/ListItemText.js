import React from "react";
import PropTypes from "prop-types";

function ListItemText({ titel }) {
  return (
    <div>
      <p>1.1.2020</p>
      <h4>{titel}</h4>
    </div>
  );
}

export default ListItemText;
ListItemText.propTypes = {
  titel: PropTypes.any,
};
