import React, { useState } from "react";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/list";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import FloatingActionButton from "../components/FloatingActionButton";
import ListCreationContainer from "../components/ListCreationContainer";

function Home() {
  const [name, setName] = useState("");
  const [inputfield, setInputfield] = useState(false);
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { name };
    await postList(data);
    await refetch();
    setInputfield(false);
    setName("");
  }

  return (
    <>
      <Header title="Grocery Lists"></Header>

      <Container>
        <List>
          {error && <div>Could not get data. Please cry.</div>}
          {loading && <div>Loading...</div>}
          {lists?.map((list) => (
            <ListItem key={list.id} list={list} href={`/home/${list.id}`} />
          ))}
        </List>
        <FloatingActionButton displayForm={() => setInputfield(!inputfield)} />
        {inputfield && (
          <ListCreationContainer
            value={name}
            onSetName={setName}
            onCancelForm={setInputfield}
            onHandleSubmit={handleSubmit}
          />
        )}
      </Container>
    </>
  );
}

export default Home;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
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
