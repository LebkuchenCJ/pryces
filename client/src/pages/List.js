import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { fetchList } from "../api/list";
import styled from "@emotion/styled";
import { fetchProducts } from "../api/products";

function List() {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedList = await fetchList(id);
        setList(fetchedList);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [id]);

  async function handleClick() {
    const products = await fetchProducts();
    return console.log(products);
  }

  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {list && (
        <>
          <Container>
            <h2>{list?.name}</h2>
            <div>
              <button onClick={() => history.goBack()}>Back</button>
            </div>
            <button onClick={() => handleClick()}>Log Products</button>
          </Container>
        </>
      )}
    </>
  );
}

export default List;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
