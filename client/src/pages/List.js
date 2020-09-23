import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchList } from "../api/list";
import styled from "@emotion/styled";
import { postProduct, fetchProductByname } from "../api/products";
import useAsync from "../hooks/useAsync";
import Header from "../components/Header";
import PropTypes from "prop-types";
import ProductAddContainer from "../components/ProductAddContainer";
import FloatingActionButton from "../components/FloatingActionButton";
import EmptyListScreen from "../components/EmptyListScreen";
import ProductListContainer from "../components/ProductListContainer";

function List({ onGroceryListChange }) {
  const { id } = useParams();
  const [query, setQuery] = useState([]);
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [inputField, setInputField] = useState(false);
  const { data: list, loading, error, refetch } = useAsync(fetchList, id);

  useEffect(() => {
    onGroceryListChange(list);
  }, [onGroceryListChange, list]);

  async function handleClick(product) {
    setDisplay(!display);
    const data = {
      name: product.name,
      productId: product.id,
      category: product.category,
      listId: list.id,
    };
    await postProduct(data);
    await refetch();
    setQuery("");
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const product = { name: query, listId: list.id };
    if (/\S/.test(product.name)) {
      await postProduct(product);
      await refetch();
      setQuery("");
    }
  }

  let timeOutId;
  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const result = await fetchProductByname(query);
      setProducts(result);
    }, 300);
  }

  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {list && (
        <>
          <Header title={list.name}></Header>

          <Container>
            {list.products.length < 1 && <EmptyListScreen />}
            {list.products.length > 1 && <ProductListContainer list={list} />}
            <FloatingActionButton
              displayForm={() => setInputField(!inputField)}
            />
            {inputField && (
              <ProductAddContainer
                onHandleSubmit={handleSubmit}
                query={query}
                onSetDisplay={setDisplay}
                display={display}
                onHandleChange={handleChange}
                products={products}
                onHandleClick={handleClick}
                displayForm={() => setInputField()}
              />
            )}
          </Container>
        </>
      )}
    </>
  );
}

export default List;
List.propTypes = {
  onGroceryListChange: PropTypes.func,
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
