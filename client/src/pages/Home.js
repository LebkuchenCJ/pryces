import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/data";
import useAsync from "../hooks/useAsync";

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

const List = styled.div`
  background-color: #f27649;
  border: solid 1px #fff;
  width: 100px;
`;

function Home() {
  const [name, setName] = useState("");
  const { data: lists, loading, error } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name };
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
          value={name}
          placeholder="Enter shopping list name"
          onChange={(event) => setName(event.target.value)}
        />

        <button onClick={() => cancelDisplay()}>Cancel</button>
        <input type="submit" value="Create list" palceholder="Create" />
      </form>
      <button onClick={() => displayForm()}>Add List</button>
      <button onClick={() => displayLists()}>Get Lists</button>
      <List>
        {error && <div>Could not get data. Please cry.</div>}
        {loading && <div>Loading...</div>}
        {lists?.map((list) => (
          <div key={list.id}>
            <p>{list.name}</p>
          </div>
        ))}
      </List>
    </Container>
  );
}

export default Home;
