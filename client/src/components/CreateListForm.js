import React from "react";
import PropTypes from "prop-types";

function CreateListForm({ name, setName, cancelDisplay, handleSubmit }) {
  return (
    <form className="createList" onSubmit={handleSubmit}>
      <label>Create new shopping list</label>
      <input
        value={name}
        placeholder="Enter shopping list name"
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={() => cancelDisplay()}>Cancel</button>
      <input
        type="submit"
        //disabled={!name}
        value="Create list"
      />
    </form>
  );
}

export default CreateListForm;
CreateListForm.propTypes = {
  children: PropTypes.any,
  name: PropTypes.any,
  setName: PropTypes.any,
  cancelDisplay: PropTypes.any,
  handleSubmit: PropTypes.any,
};

/* <CreateListForm
        name={value}
        setName={(value) => setName(value)}
        cancelDisplay={() => cancelDisplay()}
        handleSubmit={() => handleSubmit()}
      /> */
