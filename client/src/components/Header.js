import React, { useState } from "react";
import styled from "@emotion/styled";
import menuImgSrc from "../assets/menuIcon.svg";
import goBackSrc from "../assets/arrowBack.svg";
import goBackInvisibleSrc from "../assets/arrowBackInvisible.svg";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { useHistory } from "react-router-dom";

function Header({ title, showBackButton }) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <>
      <HeaderWrapper>
        {showBackButton && (
          <button>
            <img src={goBackSrc} alt="Go back Icon" onClick={history.goBack} />
          </button>
        )}
        {!showBackButton && <img src={goBackInvisibleSrc} alt="Go back Icon" />}
        <h1>{title}</h1>
        <button>
          <img
            src={menuImgSrc}
            alt="Menu Icon"
            open={open}
            onClick={toggleMenu}
          />
        </button>
      </HeaderWrapper>
      <Menu open={open} onClick={toggleMenu} userName="Jonas Imm" />
    </>
  );
}

export default Header;
Header.propTypes = {
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
};
const HeaderWrapper = styled.header`
  background-color: var(--bg-color-highlight);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  > button {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
  img {
    margin: 0 25px;
    height: 3rem;
    width: 3rem;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.8rem;
      margin: 0;
    }
    img {
      height: 40px;
      width: 40px;
      margin: 10px;
    }
  }
`;
