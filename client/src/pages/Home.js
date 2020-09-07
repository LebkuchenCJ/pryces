import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > p {
    margin: 0;
  }
`;
function Home() {
  return (
    <Container>
      <p>Home</p>
      <Link to="/">
        <button>Sign out</button>
      </Link>
      <form className="createList">
        <label>Create new shopping list</label>
        <input type="text" placeholder="Enter shopping list name" />
        <button>Cancel</button>
        <button type="submit">Create</button>
      </form>
      <button>Add List</button>
    </Container>
  );
}

export default Home;
