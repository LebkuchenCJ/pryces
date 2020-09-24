import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function SupermarketLogo({ image }) {
  return (
    <Wraper>
      <img src={image} alt="Logo" />
    </Wraper>
  );
}

export default SupermarketLogo;
SupermarketLogo.propTypes = {
  image: PropTypes.string,
};

const Wraper = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  > img {
    max-height: 35px;
    min-width: 2rem;
    margin: 0 auto;
  }
`;
