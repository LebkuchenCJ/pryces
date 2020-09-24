import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ProductSuggestListItem({ product, onHandleClick }) {
  return (
    <ItemWrapper onClick={() => onHandleClick(product)}>
      <p>{product.name}</p> <span>{product.category}</span>
    </ItemWrapper>
  );
}

export default ProductSuggestListItem;

ProductSuggestListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  }),
  onHandleClick: PropTypes.func,
};

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.8rem;
  }
`;
