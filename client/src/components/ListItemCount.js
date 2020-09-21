import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function ListItemCount(props) {
  return (
    <Wrapper>
      <p>
        <span>5</span> Products
      </p>
    </Wrapper>
  );
}

export default ListItemCount;

ListItemCount.propTypes = {
  props: PropTypes.any,
};

const Wrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  padding-right: 6px;
`;
