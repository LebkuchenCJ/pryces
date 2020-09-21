import React from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ListItemDelete from "./ListItemDelete";

function ListItem({ list, href }) {
  return (
    <Link to={href}>
      <Container>
        <ListItemText title={list.name} />
        <ListItemDelete />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--bg-color-light);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #fff;
  border-radius: 50px;
  margin: 5px 0;
`;

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.any,
  href: PropTypes.any,
};
