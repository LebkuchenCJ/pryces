import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItemText from "./ListItemText";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import ListItemOptions from "./ListItemOptions";
import ListItemDetails from "./ListItemDetails";
import ListDeleterContainer from "./ListDeleterContainer";

function ListItem({ list, href, onDeleteConfirm }) {
  const [checked, setChecked] = useState(false);
  const [deleterOverlay, setDeleterOverlay] = useState(false);
  return (
    <Container>
      <ListItemDetails date={list.creationDate} />
      <Link to={href}>
        <ListItemText title={list.name} value={checked} />
      </Link>
      <ListItemOptions
        onCheck={() => setChecked(!checked)}
        onDelete={setDeleterOverlay}
      />
      {deleterOverlay && (
        <ListDeleterContainer
          onCancel={setDeleterOverlay}
          onDeleteConfirm={onDeleteConfirm}
        />
      )}
    </Container>
  );
}

export default ListItem;
ListItem.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string,
    creationDate: PropTypes.string,
  }),
  href: PropTypes.string,
  onDelete: PropTypes.func,
  onDeleteConfirm: PropTypes.func,
};

const Container = styled.li`
  display: grid;
  grid-template-rows: 3 * 1fr;
  width: 100%;
  background-color: var(--bg-color-light);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid #fff;
  border-radius: 2rem;
  margin: 5px 0;
  padding: 5px 20px;
`;
