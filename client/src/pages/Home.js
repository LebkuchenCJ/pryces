import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { fetchLists, postList } from "../api/list";
import useAsync from "../hooks/useAsync";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import FloatingActionButton from "../components/FloatingActionButton";
import ListCreationContainer from "../components/ListCreationContainer";
import { deleteList } from "../api/list";
import EmptyListScreen from "../components/EmptyListScreen";

function Home() {
  const [name, setName] = useState("");
  const [inputField, setInputField] = useState(false);
  const { userId } = sessionStorage;
  const [userLists, setUserLists] = useState(null);
  const { data: lists, loading, error, refetch } = useAsync(fetchLists);

  useEffect(() => {
    function handleLists() {
      const filteredLists = lists?.filter((list) => list.userId === userId);
      setUserLists(filteredLists);
    }
    handleLists();
  }, [lists, userId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const data = { name, userId, creationDate: date, products: [] };
    await postList(data);
    await refetch();
    setInputField(false);
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
        {userLists?.length < 1 && (
          <EmptyListScreen text="Create a list and your groceries" />
        )}
        {userLists?.length > 0 && (
          <>
            <List>
              {error && <p>Could not get data. Please cry.</p>}
              {loading && <p>Loading...</p>}
              {userLists?.map((list) => (
                <ListItem
                  key={list._id}
                  list={list}
                  href={`/home/${list._id}`}
                  onDeleteConfirm={() => handleDelete(list._id)}
                />
              ))}
            </List>
          </>
        )}
        {inputField && (
          <ListCreationContainer
            value={name}
            onSetName={setName}
            onCancelForm={setInputField}
            onHandleSubmit={handleSubmit}
          />
        )}
        <FloatingActionButton displayForm={() => setInputField(!inputField)} />
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

  @media only screen and (min-width: 600px) {
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0.3rem;
    }
    ::-webkit-scrollbar-track {
      background-color: var(--bg-color-main);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--bg-color-highlight);
    }
  }
`;
