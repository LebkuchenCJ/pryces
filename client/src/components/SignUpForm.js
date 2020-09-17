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
        <div>
          <input placeholder="Enter your name" />
        </div>
      </label>
      <label>
        E-Mail
        <div>
          <input placeholder="Enter your email" />
        </div>
      </label>
      <label>
        Birthday
        <div>
          <input type="date" />
        </div>
      </label>
      <label>
        Password
        <div>
          <input type="password" placeholder="Enter your password" />
        </div>
      </label>
      <label>
        Confirm Password
        <div>
          <input type="password" placeholder="Confirm your password" />
        </div>
      </label>
      <Link to="/home">
        <SubmitButton title="Sign Up" />
      </Link>
    </Form>
  );
}

export default SignUpForm;

const Form = styled.form`
  height: 100%;
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
    width: 95%;
    height: 3rem;
    margin: 0 10px;
    border: none;
    background: transparent;
  }
  div > input:focus {
    outline: none;
  }

  label > div {
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }

  a {
    width: 60%;
  }
`;
