import React from "react";
import styled from "@emotion/styled";
import addSrc from "../assets/addCircle.svg";
import PropTypes from "prop-types";

function FAB(props) {
  return (
    <Button>
      <img src={addSrc} alt="Add button" />
    </Button>
  );
}

export default FAB;
FAB.propTypes = {
  props: PropTypes.any,
};

const Button = styled.button`
  background: transparent;
  border: none;
`;
