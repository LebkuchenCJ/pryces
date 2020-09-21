import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ListCreationForm from "./ListCreationForm";

function ListCreationContainer({
  value,
  onSetName,
  onCancelForm,
  onHandleSubmit,
}) {
  return (
    <Container>
      <ListCreationForm
        value={value}
        onSetName={onSetName}
        onCancelForm={onCancelForm}
        onHandleSubmit={onHandleSubmit}
      />
    </Container>
  );
}

export default ListCreationContainer;
ListCreationContainer.propTypes = {
  value: PropTypes.string,
  onSetName: PropTypes.func,
  onCancelForm: PropTypes.func,
  onHandleSubmit: PropTypes.func,
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
