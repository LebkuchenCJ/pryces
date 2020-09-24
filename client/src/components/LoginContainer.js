import styled from "@emotion/styled";
import React from "react";
import LoginForm from "./LoginForm";

function LoginContainer(props) {
  return (
    <Container>
      <div>
        <h2>pryces</h2>
        <h3>Login and start saving</h3>
      </div>
      <LoginForm />
    </Container>
  );
}

export default LoginContainer;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    font-family: "Bauhaus93";
    font-size: 4rem;
    color: var(--font-title-welcome);
  }
`;
