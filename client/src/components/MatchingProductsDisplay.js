import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

function MatchingProductsDisplay({ onHandleConfirm }) {
  return (
    <Container>
      <div>
        <h4>This product is already in your list</h4>
        <button onClick={() => onHandleConfirm()}>Ok</button>
      </div>
    </Container>
  );
}

export default MatchingProductsDisplay;
MatchingProductsDisplay.propTypes = {
  onHandleConfirm: PropTypes.func,
};

const Container = styled.div`
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 70%;
    height: 20%;

    @media only screen and (min-width: 600px) {
      width: 30%;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: var(--bg-color-dark-highlight);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);

    h4 {
      color: var(--font-color-menu);
      text-align: center;
    }
    > button {
      background-color: transparent;
      border: none;
      color: var(--font-color-main);
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;
