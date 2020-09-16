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
        <p>Welcome</p>
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;
