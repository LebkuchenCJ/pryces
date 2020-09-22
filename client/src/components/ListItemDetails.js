import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListItemCount({ date }) {
  return (
    <Wrapper>
      <p>{date}</p>
      <p>
        <span>5</span> Products
      </p>
    </Wrapper>
  );
}

export default ListItemCount;

ListItemCount.propTypes = {
  date: PropTypes.string,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
`;
