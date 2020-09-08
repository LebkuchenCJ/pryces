import React from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import ListItemIcon from "./ListItemIcon";
import styled from "@emotion/styled";

function ListItem({ list }) {
  return (
    <Container>
      <ListItemText titel={list.name} />
      <ListItemIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  background-color: #fff;
  border: 1px solid;
  margin: 5px;
  * {
    margin: 0;
  }
`;

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.any,
};
