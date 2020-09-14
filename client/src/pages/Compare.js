import React from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";

function Compare(props) {
  async function getSupermarkets() {
    const data = await fetchSupermarkets();
    return console.log(data);
  }

  return (
    <div>
      <Header title={"Test"} />
      <p>Test</p>
      <button onClick={() => getSupermarkets()}>Get markets</button>
    </div>
  );
}

export default Compare;
