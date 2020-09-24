import React from "react";
import PropTypes from "prop-types";
import SupermarketLogo from "./SupermarketLogo";
import SupermarketInfo from "./SupermarketInfo";
import styled from "@emotion/styled";

function SupermarketHeader({ supermarket }) {
  return (
    <Container>
      <SupermarketInfo supermarket={supermarket} />
      <SupermarketLogo image={supermarket.logo} />
    </Container>
  );
}

export default SupermarketHeader;

SupermarketHeader.propTypes = {
  supermarket: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
