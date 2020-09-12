import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import logoSrc from "../assets/logo-white.svg";
import logoutSrc from "../assets/logout.svg";
import { Link } from "react-router-dom";

function Menu({ userName, open }) {
  return (
    <Nav open={open}>
      <img src={logoSrc} alt="Logo" />
      <h2>{userName}</h2>
      <Link className="nav__groceryList" to="/home">
        Grocery Lists
      </Link>
      <Link className="nav__archive" to="/">
        Archive
      </Link>
      <Link className="nav__bonusCards" to="/">
        Bonus Cards
      </Link>
      <p className="nav__placeholder">Test</p>
      <Link className="nav__profile" to="/">
        Profile
      </Link>
      <Link className="nav__settings" to="/">
        Settings
      </Link>
      <Link className="nav__logout" to="/">
        <span>Logout</span> <img src={logoutSrc} alt="Logout icon" />
      </Link>
    </Nav>
  );
}

export default Menu;

Menu.propTypes = {
  userName: PropTypes.string,
  open: PropTypes.bool,
};

const Nav = styled.nav`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(150%)")};
  box-shadow: -5px 0px 5px 0px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  display: grid;
  grid-template-rows: 13 * 1fr;
  justify-items: center;
  align-items: center;
  background-color: #f26a4b;
  color: #fff;
  height: 100%;
  width: 50%;
  @media only screen and (min-width: 600px) {
    width: 30%;
  }
  a {
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    height: 100%;
  }
  a:hover {
    background-color: #f27649;
  }
  > img {
    grid-row: 1 / 3;
  }
  h2 {
    margin: 0;
    padding: 15px 0;
    grid-row: 3/4;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    border-top: solid 2px #fff;
    border-bottom: solid 2px #fff;
    width: 100%;
    height: 50%;
  }
  .nav__groceryList {
    grid-row: 4/5;
  }
  .nav__archive {
    grid-row: 5/6;
  }
  .nav__bonusCards {
    grid-row: 6/7;
  }
  .nav__placeholder {
    border-bottom: #fff solid 2px;
    grid-row: 8/9;
    margin: 0;
    color: transparent;
    justify-self: stretch;
    align-self: stretch;
  }
  .nav__profile {
    grid-row: 9/10;
  }
  .nav__settings {
    grid-row: 10/11;
  }
  .nav__logout {
    grid-row: 12/13;
    justify-self: right;
    display: flex;
    justify-content: center;
    > img {
      padding-left: 5px;
    }
  }
`;
