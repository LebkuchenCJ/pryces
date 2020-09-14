import React from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";

function Compare({ data }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);
  //if product ids matching, add price of product to value x

  function getListData() {
    const newData = data.products;
    const id = newData.map((product) => product.productId);
    //const supermarketProducts = supermarkets.map((supermarket) => supermarket.products);

    const supermarketTotalPrices = supermarkets.map((supermarket) => {
      const totalPrice = id.reduce((totalPrice, val) => {
        const supermarketProduct = supermarket.products.find(
          (product) => product.productId === val
        );
        return totalPrice + supermarketProduct.price;
      }, 0);

      return {
        id: supermarket.id,
        name: supermarket.name,
        totalPrice: totalPrice,
      };
    });

    console.log(supermarketTotalPrices);
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
