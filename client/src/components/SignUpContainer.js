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
  height: 70vh;
`;
