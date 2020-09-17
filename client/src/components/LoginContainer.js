import styled from "@emotion/styled";
import React from "react";
import LoginForm from "./LoginForm";

function LoginContainer(props) {
  return (
    <Container>
      <div>
        <h2>MEGA APP 2020</h2>
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
  h3,
  h2 {
    margin: 0;
  }
  h2 {
    color: var(--font-title-welcome);
    font-size: 2rem;
  }
`;
