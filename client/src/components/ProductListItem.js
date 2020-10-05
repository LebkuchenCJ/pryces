import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import deleteSrc from "../assets/delete_icon.svg";

function ProductListItem({ list, onHandleDelete }) {
  return (
    <Wrapper>
      {list.products.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <span>{product.category}</span>
          <button onClick={() => onHandleDelete(product)}>
            <img src={deleteSrc} alt="Delete" />
          </button>
        </li>
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

const Wrapper = styled.ul`
  width: 100%;
  background-color: var(--bg-color-light);
  padding: 0;
  margin: 0;
  overflow: scroll;

  @media only screen and (min-width: 600px) {
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0.3rem;
    }
    ::-webkit-scrollbar-track {
      background-color: var(--bg-color-dark);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--bg-color-highlight);
    }
  }

  p {
    font-weight: bold;
  }
  > li {
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
