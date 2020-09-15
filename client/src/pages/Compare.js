import React, { useEffect, useState } from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function Compare({ listData }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);
  const [totalPrices, setTotalPrices] = useState("");

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
        setTotalPrices(supermarketTotalPrices);
      }
    }
    getListData();
  }, [supermarkets, listData]);
  console.log(totalPrices);
  return (
    <>
      {error && <div>Could not get data. Dont cry. Try again</div>}
      {loading && <div>Loading...</div>}
      {totalPrices && (
        <div>
          <Header title={"Compare"} />
          {totalPrices.map((supermarket) => (
            <SupermarketDisplay key={supermarket.id}>
              <div>
                <h3>{supermarket.name}</h3>
              </div>
              <div>
                <p>Products found: 4 of 4</p>
                <p>{supermarket.totalPrice.toFixed(2)}€</p>
              </div>
            </SupermarketDisplay>
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

const SupermarketDisplay = styled.div`
  h3 {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
  }
`;
