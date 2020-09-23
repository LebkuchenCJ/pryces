import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Rating from "./Rating";

function SupermarketInfo({ supermarket }) {
  return (
    <Container>
      <h3>{supermarket.name}</h3>
      <Rating value={supermarket.rating} />
      <p>Open: {supermarket.openingHours}</p>
    </Container>
  );
}

export default SupermarketInfo;
SupermarketInfo.propTypes = {
  supermarket: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    openingHours: PropTypes.string,
  }),
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  > h3 {
    font-size: 1.2rem;
  }
  > p {
    color: var(--font-color-main);
    opacity: 0.5;
  }
`;
