import React from "react";
import PropTypes from "prop-types";

import searchSrc from "../assets/search_icon.svg";
import styled from "@emotion/styled";

function ProductSearchBar({ query, onSetDisplay, display, onHandleChange }) {
  return (
    <Container>
      <img src={searchSrc} alt="Search Icon" />
      <input
        placeholder="Search products"
        value={query}
        onClick={() => onSetDisplay(!display)}
        onChange={(event) => {
          onHandleChange(event.target.value);
        }}
      />
    </Container>
  );
}

export default ProductSearchBar;
ProductSearchBar.propTypes = {
  query: PropTypes.string,
  onSetDisplay: PropTypes.func,
  display: PropTypes.bool,
  onHandleChange: PropTypes.func,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  > img {
    opacity: 0.5;
  }
  > input {
    border: none;
  }
`;
