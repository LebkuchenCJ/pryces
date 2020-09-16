import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function SignUpContainer(props) {
  return (
    <Container>
      <form>
        <label>
          Name
          <input placeholder="Enter your name" />
        </label>
        <label>
          E-Mail
          <input placeholder="Enter your email" />
        </label>
        <label>
          Birthday
          <input type="date" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter your password" />
        </label>
        <label>
          Confirm Password
          <input type="password" placeholder="Confirm your password" />
        </label>
        <Link to="/home">
          <input type="submit" placeholder="Klick to sign up" />
        </Link>
      </form>
    </Container>
  );
}

export default SignUpContainer;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  a > input {
    border: solid 1px;
    background-color: #f27649;
    color: #fff;
  }
`;
