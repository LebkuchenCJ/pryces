import React from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";

function Compare({ data }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);

  async function getListData() {
    return console.log(data);
  }

  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {supermarkets && (
        <div>
          <Header title={"Compare"} />
          <button onClick={() => getListData()}>Log list data</button>
          {supermarkets.map((supermarket) => (
            <p key={supermarket.id}>{supermarket.name}</p>
          ))}
        </div>
      )}
    </>
  );
}

export default Compare;
Compare.propTypes = {
  data: PropTypes.any,
};
