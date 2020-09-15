import PropTypes from "prop-types";
import countMatchingProducts from "./countMatchingProducts";
import calcTotalPrice from "./calcTotalPrice";

function setSupermarketCompareData({
  supermarkets,
  listProductIDs,
  listProducts,
}) {
  const supermarketTotalPrices = supermarkets.map((supermarket) => {
    const matchingProducts = countMatchingProducts({
      supermarket,
      listProductIDs,
    });

    const totalPrice = calcTotalPrice({ supermarket, listProductIDs });

    return {
      id: supermarket.id,
      name: supermarket.name,
      totalPrice: totalPrice,
      matchingProductsFound: matchingProducts,
      listProductCount: listProducts.length,
    };
  });
  return supermarketTotalPrices;
}

export default setSupermarketCompareData;
setSupermarketCompareData.propTypes = {
  supermarket: PropTypes.shape({
    products: PropTypes.array,
  }),
  listProductIDs: PropTypes.array,
  listProducts: PropTypes.array,
};
