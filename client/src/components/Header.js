import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import menuSrc from "../assets/menuIcon.svg";
import goBackSrc from "../assets/arrowBack.svg";
import goBackInvisibleSrc from "../assets/arrowBackInvisible.svg";
import PropTypes from "prop-types";

function Header({ title, open, setOpen }) {
  const [displayIcon, setDisplayIcon] = useState("");

  useEffect(() => {
    if (title === "Grocery Lists") {
      setDisplayIcon(false);
    } else {
      setDisplayIcon(true);
    }
  }, [title]);
  return (
    <HeaderWrapper>
      {displayIcon && (
        <img
          src={goBackSrc}
          alt="Go back Icon"
          onClick={() => window.history.back()}
        />
      )}
      {!displayIcon && <img src={goBackInvisibleSrc} alt="Go back Icon" />}
      <h1>{title}</h1>

      <img
        src={menuSrc}
        alt="Menu Icon"
        open={open}
        onClick={() => setOpen(!open)}
      />
    </HeaderWrapper>
  );
}

export default Header;
Header.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
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
  > img:hover {
    cursor: pointer;
  }
`;
