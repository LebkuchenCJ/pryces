import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

ProductAddForm.propTypes = {};

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
      <label>Add your Products</label>
      <input
        placeholder="Search products"
        value={query}
        onClick={() => onSetDisplay(!display)}
        onChange={(event) => {
          onHandleChange(event.target.value);
        }}
      />
      {display && (
        <div>
          {products?.map((product) => (
            <ProductName
              key={product.id}
              onClick={() => {
                onHandleClick(product);
              }}
            >
              {product.name}
            </ProductName>
          ))}
        </div>
      )}

      <button onClick={() => displayForm(false)}>Cancel</button>
      <input type="submit" value="Add product" />
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
  display: flex;
  flex-direction: column;
  border: solid 1px;
  margin: 10px 0;
`;

const ProductName = styled.p`
  margin: 0;
  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
