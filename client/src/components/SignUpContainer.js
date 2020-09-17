import styled from "@emotion/styled";
import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpContainer(props) {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}

export default SignUpContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;
