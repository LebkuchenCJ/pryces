import React from "react";
import PropTypes from "prop-types";
import deleteSrc from "../assets/delete_icon.svg";
import styled from "@emotion/styled";

function ListItemDelete(props) {
  return (
    <DeleteButton>
      <img src={deleteSrc} alt="Delete icon" />
    </DeleteButton>
  );
}

export default ListItemDelete;

ListItemDelete.propTypes = {
  props: PropTypes.any,
};

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  justify-self: flex-end;
`;
