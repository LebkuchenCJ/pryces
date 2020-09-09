import React from "react";
import PropTypes from "prop-types";

function ListItemText({ title }) {
  return (
    <div>
      <p>1.1.2020</p>
      <h4>{title}</h4>
    </div>
  );
}

export default ListItemText;
ListItemText.propTypes = {
  title: PropTypes.any,
};
