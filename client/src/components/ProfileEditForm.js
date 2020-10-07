import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import editSrc from "../assets/edit_icon.svg";

function ProfileEditForm({ title, onCancel }) {
  return (
    <Form>
      <label>
        Enter your new {title}
        <div>
          <img src={editSrc} alt="Edit" />
          <input />
        </div>
      </label>
      <button onClick={() => onCancel(false)}>Cancel</button>
      <input type="submit" value="Proceed" onClick={() => onCancel(false)} />
    </Form>
  );
}

export default ProfileEditForm;
ProfileEditForm.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
};

const Form = styled.form`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 3fr 1fr 1fr;
  grid-row-gap: 0.6rem;

  > label {
    grid-row: 1 / 2;
    grid-column: 1 / 4;
  }

  > label > div {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  img {
    padding: 0.4rem 0;
    width: 0.9rem;
  }
  input {
    width: 100%;
    border: none;
  }

  button {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background-color: transparent;
    border: none;
  }
  > input {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    background-color: transparent;
    border: none;
    color: var(--font-title-welcome);
    cursor: pointer;
  }
`;
