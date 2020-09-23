import React, { useState } from "react";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/list";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import FloatingActionButton from "../components/FloatingActionButton";
import ListCreationContainer from "../components/ListCreationContainer";
import ListDeleterContainer from "../components/ListDeleterContainer";

function Home() {
  const [name, setName] = useState("");
  const [inputfield, setInputfield] = useState(false);
  const [deleterOverlay, setDeleterOverlay] = useState(false);
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  async function handleSubmit(event) {
    event.preventDefault();
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const data = { name, creationDate: date };
    await postList(data);
    await refetch();
    setInputfield(false);
    setName("");
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
              key={list.id}
              list={list}
              href={`/home/${list.id}`}
              onDelete={setDeleterOverlay}
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
        {deleterOverlay && (
          <ListDeleterContainer onCancel={setDeleterOverlay} />
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
  overflow: scroll;
`;
