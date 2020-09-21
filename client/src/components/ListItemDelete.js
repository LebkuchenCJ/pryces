import React from "react";
import PropTypes from "prop-types";
import deleteSrc from "../assets/delete_icon.svg";
import styled from "@emotion/styled";

function ListItemDelete(props) {
  return (
    <Wrapper>
      <input type="checkbox" />
      <button>
        <img src={deleteSrc} alt="Delete icon" />
      </button>
    </Wrapper>
  );
}

export default ListItemDelete;

ListItemDelete.propTypes = {
  props: PropTypes.any,
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
