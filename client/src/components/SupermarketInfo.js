import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SupermarketInfo({ supermarket }) {
  return (
    <Container>
      <h3>{supermarket.name}</h3>
      <h4>{supermarket.rating}</h4>
      <p>Open: {supermarket.openingHours}</p>
    </Container>
  );
}

export default SupermarketInfo;
SupermarketInfo.propTypes = {
  supermarket: PropTypes.any,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
