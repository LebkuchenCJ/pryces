import React from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import ListItemIcon from "./ListItemIcon";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function ListItem({ list, href }) {
  return (
    <Container>
      <Link to={href}>
        <ListItemText title={list.name} />
        <ListItemIcon />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border: 1px solid;
    margin: 5px;
    * {
      margin: 0;
    }
  }
`;

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.any,
  href: PropTypes.any,
};
