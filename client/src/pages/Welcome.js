import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;
