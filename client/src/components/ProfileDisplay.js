import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import passwordSrc from "../assets/lock_icon.svg";
import mailSrc from "../assets/mail_icon.svg";
import personSrc from "../assets/person_icon.svg";

function ProfileDisplay(props) {
  return (
    <Display>
      <img src={personSrc} alt="Account" />
      <p>
        <span>Jonas</span>
      </p>
      <img src={mailSrc} alt="Mail" />
      <p>
        <span>Mail</span>
      </p>
      <img src={passwordSrc} alt="Password" />
      <p>
        <span>password</span>
      </p>
    </Display>
  );
}

export default ProfileDisplay;
ProfileDisplay.propTypes = {
  props: PropTypes.any,
};

const Display = styled.div`
  width: 90%;
  padding: 0.6rem;
  border-radius: 30px;
  background-color: var(--bg-color-light);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 3 * 1fr;
  row-gap: 10px;
  > img {
    width: 2.5rem;
    justify-self: center;
    align-self: center;
  }
  > p {
    display: flex;
    width: 100%;
    height: 3rem;
    justify-self: center;
    align-self: center;
    flex-grow: 2;
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    border: none;
    background: transparent;
  }
`;
