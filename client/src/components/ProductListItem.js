import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import deleteSrc from "../assets/delete_icon.svg";

function ProductListItem({ list, onHandleDelete }) {
  return (
    <Wrapper>
      {list.products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <span>{product.category}</span>
          <button onClick={() => onHandleDelete(product)}>
            <img src={deleteSrc} alt="Delete" />
          </button>
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
  onHandleDelete: PropTypes.func,
};

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bg-color-light);
  p {
    font-weight: bold;
  }
  > div {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    border: 1px solid #000;
    padding: 0.2rem;
  }
  button {
    background-color: transparent;
    border: none;
    justify-self: flex-end;
    display: flex;
  }
  img {
    height: 1rem;
  }
`;
