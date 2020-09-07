import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;

function Welcome() {
  return (
    <Container>
      <p>Welcome</p>
      <Link to="/home">
        <button>Klick to sign in</button>
      </Link>
    </Container>
  );
}

export default Welcome;
