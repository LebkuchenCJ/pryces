import styled from "@emotion/styled";
import React from "react";
import logoSrc from "../assets/logo.svg";
import PropTypes from "prop-types";

function EmptyListScreen({ text }) {
  return (
    <Container>
      <div>
        <img src={logoSrc} alt="Logo" />
        <h2>{text}</h2>
      </div>
    </Container>
  );
}

export default EmptyListScreen;
EmptyListScreen.propTypes = {
  text: PropTypes.string,
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-style: italic;
  }
  h2 {
    margin-top: 2rem;
  }
`;
