import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListItemText({ title, value }) {
  return <ListName value={value}>{title}</ListName>;
}

export default ListItemText;
ListItemText.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
};

const ListName = styled.h4`
  font-size: 1.2rem;
  text-decoration: ${({ value }) => (value ? "line-through" : "none")};
`;
