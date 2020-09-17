import styled from "@emotion/styled";
import React from "react";
import headerBgSrc from "../assets/header-bg.png";
import logoSrc from "../assets/logo.svg";
import PropTypes from "prop-types";

function WelcomeHeader({ onChange }) {
  return (
    <Header>
      <LogoScreen>
        <img src={logoSrc} alt="Logo" />
        <h1>Mega App 2020</h1>
      </LogoScreen>

      <Tabs>
        <button onClick={() => onChange(true)}>Sign In</button>
        <button onClick={() => onChange(false)}>Sign Up</button>
      </Tabs>
    </Header>
  );
}

export default WelcomeHeader;
WelcomeHeader.propTypes = {
  onChange: PropTypes.func,
};

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${headerBgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 30vh;
`;

const LogoScreen = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  h1 {
    margin: 0;
  }
`;

const Tabs = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-content: stretch;
  border-top: #fff solid 3px;
  > button {
    width: 100%;
    background: transparent;
    border: none;
    padding: 0;
    background: rgba(242, 118, 73, 0.5);
    font-size: 1.6rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }

  button:focus {
    color: rgba(0, 0, 0, 1);
  }
`;
