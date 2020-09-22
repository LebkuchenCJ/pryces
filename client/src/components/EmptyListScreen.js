import styled from "@emotion/styled";
import React from "react";
import logoSrc from "../assets/logo.svg";

function EmptyListScreen(props) {
  return (
    <Container>
      <div>
        <img src={logoSrc} alt="Logo" />
        <h2>Add your products and start saving</h2>
      </div>
    </Container>
  );
}

export default EmptyListScreen;

const Container = styled.div`
  width: 100%;
  height: 100%;

  > div {
    width: 60%;
  }
`;
