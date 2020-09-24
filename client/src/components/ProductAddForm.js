import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ProductSearchBar from "./ProductSearchBar";
import ProductSuggestDisplay from "./ProductSuggestDisplay";

function ProductAddForm({
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
    <Form onSubmit={() => onHandleSubmit}>
      <label>
        <h4>Add your Product</h4>
        <ProductSearchBar
          display={display}
          onHandleChange={onHandleChange}
          query={query}
          onSetDisplay={onSetDisplay}
        />
        <ProductDisplayContainer>
          {display && (
            <ProductSuggestDisplay
              products={products}
              onHandleClick={onHandleClick}
            />
          )}
        </ProductDisplayContainer>
      </label>
      <ButtonWrapper>
        <button onClick={() => displayForm(false)}>Cancel</button>
        <input type="submit" value="Add product" />
      </ButtonWrapper>
    </Form>
  );
}

export default ProductAddForm;
ProductAddForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  query: PropTypes.any,
  onSetDisplay: PropTypes.func,
  display: PropTypes.bool,
  onHandleChange: PropTypes.func,
  onHandleClick: PropTypes.func,
  displayForm: PropTypes.func,
  products: PropTypes.any,
};

const Form = styled.form`
  width: 70%;
  height: 20%;
  padding: 0 15px;
  background: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media only screen and (min-width: 600px) {
    width: 30%;
  }
  h4 {
    color: var(--font-title-welcome);
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  input,
  button {
    background-color: transparent;
    border: none;
  }
  input {
    color: var(--font-title-welcome);
    cursor: pointer;
    font-weight: bold;
  }
`;

const ProductDisplayContainer = styled.div`
  position: relative;
`;
