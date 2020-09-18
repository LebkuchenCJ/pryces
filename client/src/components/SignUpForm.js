import styled from "@emotion/styled";
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import dateSrc from "../assets/date_icon.svg";
import passwordSrc from "../assets/lock_icon.svg";
import mailSrc from "../assets/mail_icon.svg";
import personSrc from "../assets/person_icon.svg";
import visiableOffSrc from "../assets/visibility_off_icon.svg";
import visiableOnSrc from "../assets/visibility_on_icon.svg";

function SignUpForm(props) {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
    showPassword: false,
  });

  function handleChange(event) {
    const value = event.target.value;
    setInputData({
      ...inputData,
      [event.target.name]: value,
    });
  }

  function handleClickShowPassword() {
    setInputData({ ...inputData, showPassword: !inputData.showPassword });
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputData);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <img src={personSrc} alt="Person" />
      <LabelName>
        <div>
          <input
            placeholder="Enter your name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            required
          />
        </div>
      </LabelName>
      <img src={mailSrc} alt="Mail" />
      <LabelMail>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            required
          />
        </div>
      </LabelMail>
      <img src={dateSrc} alt="Calender" />
      <LabelDate>
        <div>
          <input
            type="date"
            name="birthday"
            value={inputData.birthday}
            onChange={handleChange}
          />
        </div>
      </LabelDate>
      <img src={passwordSrc} alt="Lock" />
      <LabelPassword>
        <div>
          <input
            type={inputData.showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            value={inputData.password}
            onChange={handleChange}
            required
          />
          <button
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {inputData.showPassword ? (
              <img src={visiableOnSrc} alt="Hide password" />
            ) : (
              <img src={visiableOffSrc} alt="Show password" />
            )}
          </button>
        </div>
      </LabelPassword>
      {/*  <Link to="/home">
      </Link> */}
      <SubmitButton title="Sign Up" />
    </Form>
  );
}

export default SignUpForm;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 6fr 1fr 0.5fr;
  grid-template-rows: 5 * 1fr;
  > img {
    width: 2.5rem;
    justify-self: center;
    align-self: center;
  }
  img:nth-of-type(1) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  img:nth-of-type(2) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  img:nth-of-type(3) {
    grid-column: 2/3;
    grid-row: 3/4;
  }
  img:nth-of-type(4) {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  a {
    width: 100%;
    grid-column: 3/4;
    grid-row: 7/8;
    justify-self: center;
    align-self: center;
  }
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-self: center;
  align-self: center;
  > div {
    flex-grow: 2;
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  > div > input {
    width: 90%;
    height: 3rem;
    margin: 0 10px;
    border: none;
    background: transparent;
  }
  div > input:focus {
    outline: none;
  }
`;
const LabelName = styled(Label)`
  grid-column: 3/4;
  grid-row: 1/2;
`;
const LabelMail = styled(Label)`
  grid-column: 3/4;
  grid-row: 2/3;
`;
const LabelDate = styled(Label)`
  grid-column: 3/4;
  grid-row: 3/4;
`;
const LabelPassword = styled(Label)`
  grid-column: 3/4;
  grid-row: 4/5;
  > div {
    display: flex;
  }
  img {
    padding-right: 5px;
    opacity: 0.5;
    cursor: pointer;
  }
  > div > input {
    margin-right: 0px;
  }

  button {
    background: transparent;
    border: none;
  }
`;
