import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListItemText({ title }) {
  return <ListName>{title}</ListName>;
}

export default ListItemText;
ListItemText.propTypes = {
  title: PropTypes.any,
};

const ListName = styled.h4`
  font-size: 1.2rem;
`;
