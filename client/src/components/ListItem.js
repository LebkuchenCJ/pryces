import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ListItemOptions from "./ListItemOptions";
import ListItemCount from "./ListItemCount";

function ListItem({ list, href }) {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <ListItemCount />
      <Link to={href}>
        <ListItemText title={list.name} value={checked} />
      </Link>
      <ListItemOptions onCheck={() => setChecked(!checked)} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 3 * 1fr;
  width: 98%;
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
