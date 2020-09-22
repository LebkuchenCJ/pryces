import React from "react";
import PropTypes from "prop-types";
import deleteSrc from "../assets/delete_icon.svg";
import styled from "@emotion/styled";

function ListItemOptions({ onCheck, onDelete }) {
  return (
    <Wrapper>
      <input type="checkbox" onClick={() => onCheck()} />
      <button onClick={() => onDelete(true)}>
        <img src={deleteSrc} alt="Delete icon" />
      </button>
    </Wrapper>
  );
}

export default ListItemOptions;

ListItemOptions.propTypes = {
  onCheck: PropTypes.func,
  onDelete: PropTypes.func,
};

const Wrapper = styled.div`
  justify-self: flex-end;

  > button {
    background-color: transparent;
    border: none;
  }
  img {
    height: 1rem;
  }

  > input {
    height: 1rem;
  }
`;
