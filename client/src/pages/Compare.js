import React, { useEffect } from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";

function Compare({ listData }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);

  useEffect(() => {
    function getListData() {
      if (supermarkets && listData) {
        const listProducts = listData.products;
        const listProductIDs = listProducts.map((product) => product.productId);

        const supermarketTotalPrices = supermarkets.map((supermarket) => {
          const totalPrice = listProductIDs.reduce((totalPrice, val) => {
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
    }
    getListData();
  }, [supermarkets, listData]);

  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {supermarkets && (
        <div>
          <Header title={"Compare"} />
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
  listData: PropTypes.any,
};
