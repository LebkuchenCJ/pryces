import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import styled from "@emotion/styled";
import ProfileDisplay from "../components/ProfileDisplay";
import ProfileInfo from "../components/ProfileInfo";
import logoSrc from "../assets/logo.svg";

function Profile(props) {
  return (
    <>
      <Header title="Profile" showBackButton />
      <Container>
        <img src={logoSrc} alt="Logo" />
        <ProfileInfo />
        <ProfileDisplay />
      </Container>
    </>
  );
}

export default Profile;
Profile.propTypes = {
  props: PropTypes.any,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 85vh;
`;
