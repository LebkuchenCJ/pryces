import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ProductSuggestListItem from "./ProductSuggestListItem";

function ProductSuggestDisplay({ products, onHandleClick }) {
  console.log(products);
  return (
    <Container>
      {products?.map((product) => (
        <ProductSuggestListItem
          key={product.id}
          onHandleClick={onHandleClick}
          product={product}
        />
      ))}
    </Container>
  );
}

export default ProductSuggestDisplay;
ProductSuggestDisplay.propTypes = {
  products: PropTypes.array,
  onHandleClick: PropTypes.func,
};

const Container = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 30vh;
  position: absolute;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: var(--bg-color-main);
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
  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
