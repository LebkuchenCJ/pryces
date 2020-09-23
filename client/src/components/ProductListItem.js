import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ProductListItem({ list }) {
  return (
    <Wrapper>
      {list.products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <span>Category: {product.category}</span>
        </div>
      ))}
    </Wrapper>
  );
}

export default ProductListItem;

ProductListItem.propTypes = {
  list: PropTypes.shape({
    products: PropTypes.array,
  }),
};

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bg-color-light);
  > div {
    display: flex;
    border: 1px solid #000;
    justify-content: space-between;
    padding: 0.2rem;
  }
`;
