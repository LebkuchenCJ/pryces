import styled from "@emotion/styled";
import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpContainer(props) {
  return (
    <Container>
      <h2>Mega App 2020</h2>
      <h3>Sign up and start saving</h3>
      <SignUpForm />
    </Container>
  );
}

export default SignUpContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  h2,
  h3 {
    margin: 0;
  }
`;
