import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

ProfileInfo.propTypes = {
  props: PropTypes.any,
};

function ProfileInfo(props) {
  return (
    <Container>
      <h2>Jonas</h2>
      <h4>jonas@mail.com</h4>
      <h3>6 Shopping Lists</h3>
    </Container>
  );
}

export default ProfileInfo;

const Container = styled.div`
  width: 90%;
  padding: 0.6rem;
  border-radius: 30px;
  background-color: var(--bg-color-light);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
  h2,
  h4 {
    margin: 0.5rem 0;
  }
  h3 {
    border-top: solid 2px #000;
  }
`;
