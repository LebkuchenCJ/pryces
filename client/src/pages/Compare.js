import React, { useEffect, useState } from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";
import SupermarketDisplay from "../components/SupermarketDisplay";
import getCompareListsData from "../components/getCompareListsData";

function Compare({ groceryList }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);
  const [totalPrices, setTotalPrices] = useState("");
  const [connectionFail, setConnectionFail] = useState(true);

  useEffect(() => {
    getCompareListsData({
      supermarkets,
      groceryList,
      setConnectionFail,
      setTotalPrices,
    });
  }, [supermarkets, groceryList]);
  return (
    <>
      <Header title={"Compare"} />
      {connectionFail && (
        <div>
          Your session has ended. Please navigate back to your grocery list
        </div>
      )}
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {totalPrices && (
        <div>
          {totalPrices.map((supermarket) => (
            <SupermarketDisplay
              key={supermarket.id}
              supermarket={supermarket}
            ></SupermarketDisplay>
          ))}
        </div>
      )}
    </>
  );
}

export default Compare;
Compare.propTypes = {
  groceryList: PropTypes.array,
};
