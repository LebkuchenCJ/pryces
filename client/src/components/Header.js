import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import menuImgSrc from "../assets/menuIcon.svg";
import goBackSrc from "../assets/arrowBack.svg";
import goBackInvisibleSrc from "../assets/arrowBackInvisible.svg";
import PropTypes from "prop-types";
import Menu from "./Menu";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

function Header({ title }) {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const [iconVisible, setIconVisible] = useState("");
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (title === "Grocery Lists") {
      setIconVisible(false);
    } else {
      setIconVisible(true);
    }
  }, [title]);
  return (
    <>
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
        <button>
          <img
            src={menuImgSrc}
            alt="Menu Icon"
            open={open}
            onClick={() => setOpen(!open)}
          />
        </button>
      </HeaderWrapper>
      <Menu open={open} setOpen={setOpen} userName="Jonas Imm" />
    </>
  );
}

export default Header;
Header.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
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
    height: 45px;
    width: 45px;
  }
  img:hover {
    cursor: pointer;
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
