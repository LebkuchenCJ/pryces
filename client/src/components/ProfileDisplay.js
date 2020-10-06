import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import passwordSrc from "../assets/lock_icon.svg";
import mailSrc from "../assets/mail_icon.svg";
import personSrc from "../assets/person_icon.svg";
import editSrc from "../assets/edit_icon.svg";
import ProfileEditDisplay from "./ProfileEditDisplay";

function ProfileDisplay(props) {
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [editDisplayValue, setEditDisplayValue] = useState("");

  return (
    <Display>
      <img src={personSrc} alt="Account" />
      <button
        onClick={() => {
          setEditDisplayValue("name");
          setDisplayEditForm(true);
        }}
      >
        Change your name
        <img src={editSrc} alt="Edit" />
      </button>
      <img src={mailSrc} alt="Mail" />
      <button
        onClick={() => {
          setEditDisplayValue("e-mail");
          setDisplayEditForm(true);
        }}
      >
        Change your e-mail
        <img src={editSrc} alt="Edit" />
      </button>
      <img src={passwordSrc} alt="Password" />
      <button
        onClick={() => {
          setEditDisplayValue("password");
          setDisplayEditForm(true);
        }}
      >
        Change your password
        <img src={editSrc} alt="Edit" />
      </button>
      {displayEditForm && (
        <ProfileEditDisplay
          title={editDisplayValue}
          onCancel={setDisplayEditForm}
        />
      )}
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
  > button {
    width: 100%;
    height: 3rem;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 1fr;
    border: none;
    border-radius: 30px;
    background-color: var(--bg-color-light);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  }
  > button > img {
    justify-self: center;
    align-self: center;
    width: 0.8rem;
  }
`;
