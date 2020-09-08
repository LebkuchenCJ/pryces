import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/data";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";

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
  const [name, setName] = useState("");
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name };
    await postList(data);
    await refetch();
    cancelDisplay();
    setName("");
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
          disabled={!name}
          value="Create list"
          palceholder="Create"
        />
      </form>
      <button onClick={() => displayForm()}>Add List</button>
      <List>
        {error && <div>Could not get data. Please cry.</div>}
        {loading && <div>Loading...</div>}
        {lists?.map((list) => (
          <ListItem key={list.id} list={list}></ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
