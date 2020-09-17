import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";

function LoginForm(props) {
  return (
    <Form>
      <label>
        <div>
          <input placeholder="Enter your E-Mail" />
        </div>
      </label>
      <label>
        <div>
          <input placeholder="Enter your password" type="password" />
        </div>
      </label>
      <Link to="/home">
        <SubmitButton titel="Sign In" />
      </Link>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  > label {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  div > input {
    border: none;
    margin: 5px;
    height: 2rem;
  }
  div {
    border-radius: 20px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  a {
    width: 60%;
  }
`;
