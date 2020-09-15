import React, { useEffect, useState } from "react";
import { fetchSupermarkets } from "../api/supermarkets";
import Header from "../components/Header";
import useAsync from "../hooks/useAsync";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

function Compare({ listData }) {
  const { data: supermarkets, loading, error } = useAsync(fetchSupermarkets);
  const [totalPrices, setTotalPrices] = useState("");
  const [connectionFail, setConnectionFail] = useState(true);

  useEffect(() => {
    function getListData() {
      if (supermarkets && listData) {
        setConnectionFail(false);
        const listProducts = listData.products;
        const listProductIDs = listProducts.map((product) => product.productId);

        const supermarketTotalPrices = supermarkets.map((supermarket) => {
          const supermarketProductIds = supermarket.products.map(
            (product) => product.productId
          );
          const matchingProducts = supermarketProductIds.filter((id) =>
            listProductIDs.includes(id)
          ).length;

          const totalPrice = listProductIDs.reduce((totalPrice, val) => {
            const supermarketProduct = supermarket.products.find(
              (product) => product.productId === val
            );
            return totalPrice + supermarketProduct.price + matchingProducts;
          }, 0);
          return {
            id: supermarket.id,
            name: supermarket.name,
            totalPrice: totalPrice,
            matchingProductsFound: matchingProducts,
            listProductCount: listProducts.length,
          };
        });
        setTotalPrices(supermarketTotalPrices);
      }
    }
    getListData();
  }, [supermarkets, listData]);
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
            <SupermarketDisplay key={supermarket.id}>
              <div>
                <h3>{supermarket.name}</h3>
              </div>
              <div>
                <p>
                  Products found: {supermarket.matchingProductsFound} of{" "}
                  {supermarket.listProductCount}
                </p>
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
