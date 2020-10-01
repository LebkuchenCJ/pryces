import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchList } from "../api/list";
import styled from "@emotion/styled";
import {
  postProduct,
  fetchProductByname,
  deleteProduct,
} from "../api/products";
import useAsync from "../hooks/useAsync";
import Header from "../components/Header";
import PropTypes from "prop-types";
import ProductAddContainer from "../components/ProductAddContainer";
import FloatingActionButton from "../components/FloatingActionButton";
import EmptyListScreen from "../components/EmptyListScreen";
import ProductListContainer from "../components/ProductListContainer";
import MatchingProductsDisplay from "../components/MatchingProductsDisplay";

function List({ onGroceryListChange }) {
  const { id } = useParams();
  const [query, setQuery] = useState([]);
  const [display, setDisplay] = useState(false);
  const [matchingProductsDisplay, setMatchingProductsDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const [inputField, setInputField] = useState(false);
  const { data: list, loading, error, refetch } = useAsync(fetchList, id);

  useEffect(() => {
    onGroceryListChange(list);
  }, [onGroceryListChange, list]);

  async function handleClick(product) {
    const matchedProduct = list.products.find(
      ({ productId }) => productId === product.id
    );
    if (!matchedProduct) {
      setDisplay(!display);
      setInputField(false);
      const newId = Math.floor(Math.random() * (500 - 1)) + 1;
      const data = {
        name: product.name,
        productId: product.id,
        category: product.category,
        id: newId,
      };
      await postProduct(id, data);
      await refetch();
      setQuery("");
    } else {
      setMatchingProductsDisplay(true);
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setInputField(false);
    const newId = Math.floor(Math.random() * (500 - 1)) + 1;
    const product = { name: query, category: "Custom", id: newId };
    //Test if product.name != empty string
    if (/\S/.test(product.name)) {
      await postProduct(id, product);
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

  async function handleDelete(product) {
    await deleteProduct(id, product);
    await refetch();
  }

  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {list && (
        <>
          <Header title={list.name} showBackButton></Header>

          <Container>
            {list.products?.length < 1 && <EmptyListScreen />}
            {list.products?.length > 0 && (
              <ProductListContainer list={list} onHandleDelete={handleDelete} />
            )}
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
            {matchingProductsDisplay && (
              <MatchingProductsDisplay
                onHandleConfirm={() => setMatchingProductsDisplay(false)}
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
