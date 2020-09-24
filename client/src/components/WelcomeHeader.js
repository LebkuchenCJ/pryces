import styled from "@emotion/styled";
import React from "react";
import headerBgSrc from "../assets/header-bg.png";
import logoSrc from "../assets/logo.svg";
import PropTypes from "prop-types";

function WelcomeHeader({ onSetActiveTab, activeTab }) {
  return (
    <Header>
      <LogoScreen>
        <img src={logoSrc} alt="Logo" />
        <h1>pryces</h1>
      </LogoScreen>

      <Tabs activeTab={activeTab}>
        <button onClick={() => onSetActiveTab(true)}>Sign In</button>
        <button onClick={() => onSetActiveTab(false)}>Sign Up</button>
      </Tabs>
    </Header>
  );
}

export default WelcomeHeader;
WelcomeHeader.propTypes = {
  onSetActiveTab: PropTypes.func,
  activeTab: PropTypes.bool,
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
    font-family: "Bauhaus93";
    font-size: 3rem;
    color: var(--font-title-main);
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
  button:first-of-type {
    color: ${({ activeTab }) =>
      activeTab ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)"};
  }
  button:last-of-type {
    color: ${({ activeTab }) =>
      activeTab ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 1)"};
  }
`;
