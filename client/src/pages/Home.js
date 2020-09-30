import React, { useState } from "react";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/list";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import FloatingActionButton from "../components/FloatingActionButton";
import ListCreationContainer from "../components/ListCreationContainer";
import { deleteList } from "../api/list";

function Home() {
  const [name, setName] = useState("");
  const [inputfield, setInputfield] = useState(false);
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const data = { name, creationDate: date, products: [] };
    await postList(data);
    await refetch();
    setInputfield(false);
    setName("");
  }

  async function handleDelete(id) {
    await deleteList(id);
    await refetch();
  }

  return (
    <>
      <Header title="Grocery Lists" />

      <Container>
        <List>
          {error && <div>Could not get data. Please cry.</div>}
          {loading && <div>Loading...</div>}
          {lists?.map((list) => (
            <ListItem
              key={list._id}
              list={list}
              href={`/home/${list._id}`}
              onDeleteConfirm={() => handleDelete(list._id)}
            />
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
`;
