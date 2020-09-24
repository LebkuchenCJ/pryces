import React, { useEffect, useState } from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";
import SupermarketDisplay from "../components/SupermarketDisplay";
import setCompareListsData from "../functions/setCompareListsData";
import styled from "@emotion/styled";

function Compare({ groceryList }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);
  const [compareListData, setCompareListData] = useState("");
  const [connectionFail, setConnectionFail] = useState(true);
  useEffect(() => {
    setCompareListsData({
      supermarkets,
      groceryList,
      setConnectionFail,
      setCompareListData,
    });
  }, [supermarkets, groceryList]);
  return (
    <>
      <Header title={"Compare"} showBackButton />
      {connectionFail && (
        <div>
          Your session has ended. Please navigate back to your grocery list.
        </div>
      )}
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {compareListData && (
        <Container>
          {compareListData.map((supermarket) => (
            <SupermarketDisplay
              key={supermarket.id}
              supermarket={supermarket}
            />
          ))}
        </Container>
      )}
    </>
  );
}

export default Compare;
Compare.propTypes = {
  groceryList: PropTypes.object,
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`;
