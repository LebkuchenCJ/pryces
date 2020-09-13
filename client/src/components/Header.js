import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import menuImgSrc from "../assets/menuIcon.svg";
import goBackSrc from "../assets/arrowBack.svg";
import goBackInvisibleSrc from "../assets/arrowBackInvisible.svg";
import PropTypes from "prop-types";

function Header({ title, open, setOpen }) {
  const [iconVisible, setIconVisible] = useState("");

  useEffect(() => {
    if (title === "Grocery Lists") {
      setIconVisible(false);
    } else {
      setIconVisible(true);
    }
  }, [title]);
  return (
    <HeaderWrapper>
      {iconVisible && (
        <button>
          <img
            src={goBackSrc}
            alt="Go back Icon"
            onClick={() => window.history.back()}
          />
        </button>
      )}
      {!iconVisible && <img src={goBackInvisibleSrc} alt="Go back Icon" />}
      <h1>{title}</h1>

      <img
        src={menuImgSrc}
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
  > button {
    background: none;
    border: none;
  }
  img {
    margin: 0 25px;
    height: 45px;
  }
  img:hover {
    cursor: pointer;
  }
`;
