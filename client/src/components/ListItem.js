import React from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ListItemDelete from "./ListItemDelete";
import ListItemCount from "./ListItemCount";

function ListItem({ list, href }) {
  return (
    <Link to={href}>
      <Container>
        <ListItemCount />
        <ListItemText title={list.name} />
        <ListItemDelete />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 3 * 1fr;
  width: 100%;
  background-color: var(--bg-color-light);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #fff;
  border-radius: 50px;
  margin: 5px 0;
  padding: 0 20px;
`;

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.any,
  href: PropTypes.any,
};
