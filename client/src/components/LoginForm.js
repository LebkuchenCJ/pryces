import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <Form>
      <label>
        E-Mail Address
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
        <input type="submit" value="Click to sign in" />
      </Link>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > label {
    display: flex;
    flex-direction: column;
  }
  input {
    border: none;
    margin: 5px;
  }
  div {
    border: solid 1px #fff;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  a > input {
    border: solid 1px;
    background-color: #f27649;
    color: #fff;
  }
`;
