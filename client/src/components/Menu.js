import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import logoSrc from "../assets/logo-white.svg";
import logoutSrc from "../assets/logout.svg";

function Menu({ userName }) {
  return (
    <Nav>
      <img src={logoSrc} alt="Logo" />
      <h2>{userName}</h2>
      <a className="nav__groceryList" href="#">
        Grocery Lists
      </a>
      <a className="nav__archive" href="#">
        Archive
      </a>
      <a className="nav__bonusCards" href="#">
        Bonus Cards
      </a>
      <p className="nav__placeholder">Test</p>
      <a className="nav__profile" href="#">
        Profile
      </a>
      <a className="nav__settings" href="#">
        Settings
      </a>
      <a className="nav__logout" href="#">
        <span>Logout</span> <img src={logoutSrc} alt="Logout icon" />
      </a>
    </Nav>
  );
}

export default Menu;

Menu.propTypes = {
  userName: PropTypes.string,
};

const Nav = styled.nav`
  display: grid;
  grid-template-rows: 13 * 1fr;
  justify-items: center;
  align-items: center;
  background-color: #f26a4b;
  color: #fff;
  height: 100vh;
  width: 50%;
  a {
    text-decoration: none;
    text-align: center;
    color: #fff;
  }
  > img {
    grid-row: 1 / 3;
  }
  h2 {
    margin: 0;
    padding: 15px 0;
    grid-row: 3/4;
    text-align: center;
    align-self: center;
    justify-self: stretch;
    border-top: solid 2px #fff;
    border-bottom: solid 2px #fff;
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
    padding-top: 15px;
    grid-row: 9/10;
  }
  .nav__settings {
    grid-row: 10/11;
  }
  .nav__logout {
    grid-row: 12/13;
    justify-self: right;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    > img {
      padding-left: 5px;
    }
  }
`;
