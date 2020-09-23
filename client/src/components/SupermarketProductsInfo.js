import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SupermarketProductsInfo({ supermarket }) {
  return (
    <Container>
      <p>
        Products found:{" "}
        <span>
          {" "}
          {supermarket.matchingProductsFound} of {supermarket.listProductCount}
        </span>
      </p>
      <p>{supermarket.totalPrice}</p>
    </Container>
  );
}

export default SupermarketProductsInfo;
SupermarketProductsInfo.propTypes = {
  supermarket: PropTypes.shape({
    matchingProductsFound: PropTypes.number,
    listProductCount: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    opacity: 0.5;
  }
  p:last-of-type {
    font-weight: bold;
  }
`;
