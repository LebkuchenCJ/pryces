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
  padding: 15px 15px 0;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-rows: 3 * 1fr;
  grid-template-columns: 3fr 1fr 1fr;

  @media only screen and (min-width: 600px) {
    width: 30%;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
