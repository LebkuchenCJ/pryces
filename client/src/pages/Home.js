import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/list";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

function Home() {
  const [name, setName] = useState("");
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name };
    await postList(data);
    await refetch();
    hideForm();
    setName("");
  }

  function displayForm() {
    document.querySelector(".createList").style.display = "flex";
  }
  function hideForm() {
    document.querySelector(".createList").style.display = "none";
  }

  return (
    <Container>
      <Header title="Grocery Lists"></Header>
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

        <button onClick={() => hideForm()}>Cancel</button>
        <input type="submit" disabled={!name} value="Create list" />
      </form>
      <button onClick={() => displayForm()}>Add List</button>
      <List>
        {error && <div>Could not get data. Please cry.</div>}
        {loading && <div>Loading...</div>}
        {lists?.map((list) => (
          <ListItem key={list.id} list={list} href={`/home/${list.id}`} />
        ))}
      </List>
    </Container>
  );
}

export default Home;
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
