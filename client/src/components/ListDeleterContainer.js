import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ListDeleter from "./ListDeleter";

function ListDeleterContainer({ onCancel, onHandleDelete }) {
  return (
    <Container>
      <ListDeleter onCancel={onCancel} onHandleDelete={onHandleDelete} />
    </Container>
  );
}

export default ListDeleterContainer;
ListDeleterContainer.propTypes = {
  onCancel: PropTypes.func,
  onHandleDelete: PropTypes.func,
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
