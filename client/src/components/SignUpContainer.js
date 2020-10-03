import styled from "@emotion/styled";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";

function SignUpContainer(props) {
  const [error, setError] = useState(false);
  const [standard, setStandard] = useState(true);
  const [success, setSuccess] = useState(false);
  return (
    <Container>
      <div>
        {standard && (
          <>
            <h2>pryces</h2>
            <h3>Sign up and start saving</h3>
          </>
        )}
        {error && (
          <>
            <h2>Oh no!</h2>
            <h3>This E-Mail already exists</h3>
          </>
        )}
        {success && (
          <>
            <h2>Wohoo</h2>
            <h3>You created a new account. Sign in and start saving.</h3>
          </>
        )}
      </div>
      <SignUpForm
        handleSetStandard={() => setStandard(false)}
        handleSetError={() => setError(true)}
        handleSetSuccess={() => setSuccess(true)}
      />
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
  h2 {
    font-family: "Bauhaus93";
    color: var(--font-title-welcome);
    font-size: 3.5rem;
  }
  h3 {
    text-align: center;
  }
`;
