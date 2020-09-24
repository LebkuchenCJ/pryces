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
  position: absolute;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: var(--bg-color-main);
  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
