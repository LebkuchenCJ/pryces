import styled from "@emotion/styled";
import React from "react";
import LoginForm from "./LoginForm";

function LoginContainer(props) {
  return (
    <Container>
      <h2>Mega App 2020</h2>
      <h3>Login and start saving</h3>
      <LoginForm />
    </Container>
  );
}

export default LoginContainer;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  > p {
    margin: 0;
  }
`;
