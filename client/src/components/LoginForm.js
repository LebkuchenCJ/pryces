import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";

function LoginForm(props) {
  return (
    <Form>
      <label>
        E-mail
        <div>
          <input placeholder="Enter your E-Mail" />
        </div>
      </label>
      <label>
        Password
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
  height: 60%;
  width: 100%;
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
    width: 90%;
    margin: 0 10px;
    height: 3rem;
    background: transparent;
  }

  div > input:focus {
    outline: none;
  }

  div {
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  a {
    width: 60%;
  }
`;
