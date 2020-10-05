import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import styled from "@emotion/styled";
import ProfileDisplay from "../components/ProfileDisplay";
import ProfileInfo from "../components/ProfileInfo";
import logoSrc from "../assets/logo.svg";
import useAsync from "../hooks/useAsync";
import { fetchLists } from "../api/list";

function Profile(props) {
  const { data: lists } = useAsync(fetchLists);
  const [listCount, setListCount] = useState(null);
  const userName = sessionStorage.userName;
  const userId = sessionStorage.userId;

  useEffect(() => {
    function getUserListCount() {
      const filteredLists = lists?.filter((list) => list.userId === userId);
      setListCount(filteredLists?.length);
    }
    getUserListCount();
  }, [lists, userId]);

  return (
    <>
      <Header title="Profile" showBackButton />
      <Container>
        <img src={logoSrc} alt="Logo" />
        <ProfileInfo userName={userName} listCount={listCount} />
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
