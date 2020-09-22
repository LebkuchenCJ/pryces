import React from "react";
import PropTypes from "prop-types";
import ProductAddForm from "./ProductAddForm";
import styled from "@emotion/styled";

function ProductAddContainer({
  onHandleSubmit,
  query,
  onSetDisplay,
  display,
  onHandleChange,
  products,
  onHandleClick,
  displayForm,
}) {
  return (
    <Container>
      <ProductAddForm
        onHandleSubmit={onHandleSubmit}
        onSetDisplay={onSetDisplay}
        display={display}
        onHandleChange={onHandleChange}
        products={products}
        onHandleClick={onHandleClick}
        displayForm={displayForm}
      />
    </Container>
  );
}

export default ProductAddContainer;

ProductAddContainer.propTypes = {
  onHandleSubmit: PropTypes.func,
  query: PropTypes.any,
  onSetDisplay: PropTypes.func,
  display: PropTypes.bool,
  displayForm: PropTypes.func,
  onHandleChange: PropTypes.func,
  onHandleClick: PropTypes.func,
  products: PropTypes.any,
};

const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
