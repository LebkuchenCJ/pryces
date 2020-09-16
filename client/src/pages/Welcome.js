import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import headerBgSrc from "../assets/header-bg.png";
import logoSrc from "../assets/logo.svg";

function Welcome() {
  return (
    <>
      <Header>
        <img src={logoSrc} alt="Logo" />
        <h1>Mega App 2020</h1>
      </Header>
      <Container>
        <h2>Mega App 2020</h2>
        <h3>Login and start saving</h3>
        <LoginForm>
          <label>
            E-Mail Adress
            <div>
              <input placeholder="Enter your email" />
            </div>
          </label>
          <label>
            Password
            <div>
              <input placeholder="Enter your password" type="password" />
            </div>
          </label>
        </LoginForm>
        <Link to="/home">
          <button>Klick to sign in</button>
        </Link>
      </Container>
    </>
  );
}

export default Welcome;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${headerBgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 30vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  > p {
    margin: 0;
  }
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
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
`;
