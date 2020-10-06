import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ProfileEditForm({ title, onCancel }) {
  return (
    <Form>
      <label>
        Enter your new {title}
        <input />
      </label>
      <div>
        <button onClick={() => onCancel(false)}>Cancel</button>
        <button onClick={() => onCancel(false)}>Proceed</button>
      </div>
    </Form>
  );
}

export default ProfileEditForm;
ProfileEditForm.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
};

const Form = styled.form`
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  > div {
    margin-top: 0.3rem;
    display: flex;
    justify-content: flex-end;
  }

  button {
    background-color: transparent;
    border: none;
    margin-left: 10px;
    font-size: 1rem;
  }

  button:last-of-type {
    color: var(--font-title-welcome);
  }
`;
