import React from "react";
import Header from "../components/Header";
import archiveSrc from "../assets/archive.svg";
import styled from "@emotion/styled";

function Archive() {
  return (
    <>
      <Header title="Archive" />
      <Container>
        <img src={archiveSrc} alt="Archive" />
        <h4>Nothing to show yet</h4>
      </Container>
    </>
  );
}

export default Archive;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h4 {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;
