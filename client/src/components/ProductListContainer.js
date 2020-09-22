import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ProductListItem from "./ProductListItem";
import compareSrc from "../assets/compare_icon.svg";

function ProductListContainer({ list }) {
  return (
    <Container>
      <h4>{list.creationDate}</h4>
      <ProductListItem list={list} />
      <Link to={`/list/${list.id}/compare`}>
        <img src={compareSrc} alt="Compare Icon" />
        <p>Compare</p>
      </Link>
    </Container>
  );
}

export default ProductListContainer;
ProductListContainer.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number,
    products: PropTypes.array,
    creationDate: PropTypes.string,
  }),
};

const Container = styled.div`
  width: 90%;
  margin: 1rem;
  background-color: #8c493a;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid #000;
  border-radius: 20px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  > h4 {
    color: var(--font-color-menu);
  }
  a {
    width: 35%;
    padding: 0 5px;
    margin: 0.5rem;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    background-color: var(--bg-color-highlight);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 2rem;
  }
  a > p {
    display: flex;
    justify-content: center;
    color: var(--font-color-menu);
    font-size: 1rem;
  }
`;
