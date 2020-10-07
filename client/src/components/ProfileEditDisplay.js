import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import ProfileEditForm from "./ProfileEditForm";

function ProfileEditDisplay({ title, onCancel }) {
  return (
    <Container>
      <Wrapper>
        <h4>Do you want to change your {title}?</h4>
        <ProfileEditForm title={title} onCancel={onCancel} />
      </Wrapper>
    </Container>
  );
}

export default ProfileEditDisplay;
ProfileEditDisplay.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
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
const Wrapper = styled.div`
  width: 70%;
  height: 20%;
  padding: 15px 15px 10px;
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
  }
`;
