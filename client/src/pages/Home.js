import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  > p {
    margin: 0;
  }
  > form {
    display: none;
    flex-direction: column;
    position: fixed;
    border: solid 2px;
  }
`;
function Home() {
  const [listName, setListName] = useState("");

  function submitName(listName) {
    console.log(listName);
  }

  function displayForm() {
    document.querySelector(".createList").style.display = "flex";
  }
  function cancelDisplay() {
    document.querySelector(".createList").style.display = "none";
  }

  return (
    <Container>
      <header>
        <p>Home</p>
        <Link to="/">
          <button>Sign out</button>
        </Link>
      </header>
      <form className="createList">
        <label>Create new shopping list</label>
        <input
          value={listName}
          placeholder="Enter shopping list name"
          onChange={(event) => setListName(event.target.value)}
        />

        <button onClick={() => cancelDisplay()}>Cancel</button>
        <button onClick={() => submitName(listName)}>Create</button>
      </form>
      <button onClick={() => displayForm()}>Add List</button>
    </Container>
  );
}

export default Home;
