import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListItemCount({ date, productLength }) {
  return (
    <Wrapper>
      <p>{date}</p>
      <p>
        <span>{productLength}</span> Products
      </p>
    </Wrapper>
  );
}

export default ListItemCount;

ListItemCount.propTypes = {
  date: PropTypes.string,
  productLength: PropTypes.number,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
`;
