import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListDeleter(props) {
  return (
    <Wrapper>
      <h4>Do you want to delete this list?</h4>
      <div>
        <button>Cancel</button>
        <button>Proceed</button>
      </div>
    </Wrapper>
  );
}

export default ListDeleter;
ListDeleter.propTypes = {
  props: PropTypes.any,
};

const Wrapper = styled.div`
  width: 70%;
  height: 20%;
  padding: 0 15px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (min-width: 600px) {
    width: 30%;
  }
  h4 {
    color: var(--font-title-welcome);
  }
  button {
    background-color: transparent;
    border: none;
    margin-left: 10px;
    font-size: 1rem;
  }
  > div {
    align-self: flex-end;
  }

  button:last-of-type {
    color: var(--font-title-welcome);
  }
`;
