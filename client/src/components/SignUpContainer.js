import styled from "@emotion/styled";
import React from "react";
import SignUpForm from "./SignUpForm";

function SignUpContainer(props) {
  return (
    <Container>
      <div>
        <h2>MEGA APP 2020</h2>
        <h3>Sign up and start saving</h3>
      </div>
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
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2,
  h3 {
    margin: 0;
  }
  h2 {
    color: var(--font-title-welcome);
    font-size: 2rem;
  }
`;
