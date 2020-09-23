import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import SupermarketHeader from "./SupermarketHeader";

function SupermarketDisplay({ supermarket }) {
  return (
    <Container>
      <SupermarketHeader supermarket={supermarket} />
      <div>
        <p>
          Products found: {supermarket.matchingProductsFound} of{" "}
          {supermarket.listProductCount}
        </p>
        <p>{supermarket.totalPrice.toFixed(2)}€</p>
      </div>
    </Container>
  );
}

export default SupermarketDisplay;
SupermarketDisplay.propTypes = {
  supermarket: PropTypes.shape({
    name: PropTypes.string,
    matchingProductsFound: PropTypes.number,
    listProductCount: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

const Container = styled.div`
  width: 90%;
  background-color: var(--bg-color-light);
  margin: 5px;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;
