import React from "react";
import styled from "@emotion/styled";
import addSrc from "../assets/addCircle.svg";
import PropTypes from "prop-types";

function FloatingActionButton({ displayForm }) {
  return (
    <Button onClick={() => displayForm()}>
      <img src={addSrc} alt="Add button" />
    </Button>
  );
}

export default FloatingActionButton;
FloatingActionButton.propTypes = {
  displayForm: PropTypes.any,
};

const Button = styled.button`
  background: transparent;
  border: none;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
