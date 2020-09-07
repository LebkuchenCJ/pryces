import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import fetchLists, { postList } from "../api/data";

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

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { listName };
    await postList(data);
    cancelDisplay();
  }

  function displayForm() {
    document.querySelector(".createList").style.display = "flex";
  }
  function cancelDisplay() {
    document.querySelector(".createList").style.display = "none";
  }

  async function displayLists() {
    const data = await fetchLists();

    return console.log(data);
  }

  return (
    <Container>
      <header>
        <p>Home</p>
        <Link to="/">
          <button>Sign out</button>
        </Link>
      </header>
      <form className="createList" onSubmit={handleSubmit}>
        <label>Create new shopping list</label>
        <input
          value={listName}
          placeholder="Enter shopping list name"
          onChange={(event) => setListName(event.target.value)}
        />

        <button onClick={() => cancelDisplay()}>Cancel</button>
        <input type="submit" value="Create list" palceholder="Create" />
      </form>
      <button onClick={() => displayForm()}>Add List</button>
      <button onClick={() => displayLists()}>Get Lists</button>
    </Container>
  );
}

export default Home;
