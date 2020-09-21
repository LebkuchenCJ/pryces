import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import editSrc from "../assets/edit_icon.svg";

function ListCreationForm({ value, onSetName, onHideForm, onHandleSubmit }) {
  return (
    <Form className="createList" onSubmit={onHandleSubmit}>
      <label>
        <h4> Create new shopping list</h4>
        <div>
          <img src={editSrc} alt="Edit icon" />
          <input
            value={value}
            placeholder="Enter shopping list name"
            onChange={(event) => onSetName(event.target.value)}
          />
        </div>
      </label>

      <button onClick={() => onHideForm()}>Cancel</button>
      <input type="submit" disabled={!value} value="Create list" />
    </Form>
  );
}

export default ListCreationForm;
ListCreationForm.propTypes = {
  value: PropTypes.string,
  onSetName: PropTypes.func,
  onHideForm: PropTypes.func,
  onHandleSubmit: PropTypes.func,
};

const Form = styled.form`
  width: 60%;
  height: 20%;
  padding: 15px 15px 0;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-rows: 3 * 1fr;
  grid-template-columns: 3fr 1fr 1fr;

  label {
    grid-row: 1 / 3;
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h4 {
    color: var(--font-title-welcome);
  }

  div {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  div > input {
    border: none;
    padding-left: 10px;
  }
  > button {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    background-color: transparent;
    border: none;
  }

  > input {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    background-color: transparent;
    border: none;
    color: var(--font-title-welcome);
    cursor: pointer;
  }
`;
