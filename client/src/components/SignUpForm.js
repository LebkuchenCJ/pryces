import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import GenderSelect from "./GenderSelect";
import SubmitButton from "./SubmitButton";

function SignUpForm(props) {
  return (
    <Form>
      <GenderSelect />
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
        <SubmitButton title="Sign Up" />
      </Link>
    </Form>
  );
}

export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  input {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 2rem;
    border: solid 1px #fff;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }

  a {
    width: 100%;
    margin: 20px;
  }
  a > input {
    border: solid 1px;
    background-color: #f27649;
    color: #fff;
  }
`;
