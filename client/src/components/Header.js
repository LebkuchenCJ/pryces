import React from "react";
import styled from "@emotion/styled";
import menuSrc from "../assets/menuIcon.svg";
import goBackSrc from "../assets/arrowBack.svg";
import PropTypes from "prop-types";

function Header({ children }) {
  return (
    <HeaderWrapper>
      <img src={goBackSrc} alt="Go back Icon" />
      <h1>{children}</h1>
      <img src={menuSrc} alt="Menu Icon" />
    </HeaderWrapper>
  );
}

export default Header;
Header.propTypes = {
  children: PropTypes.string,
};
const HeaderWrapper = styled.header`
  background-color: #f27649;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > img {
    margin: 0 25px;
    height: 45px;
  }
`;
