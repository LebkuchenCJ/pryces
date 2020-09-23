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

    const rawTotalPrice = calcTotalPrice({
      supermarket,
      listProductIDs,
    }).toFixed(2);
    const totalPrice = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(rawTotalPrice);
    return {
      id: supermarket.id,
      name: supermarket.name,
      rating: supermarket.rating,
      openingHours: supermarket.openingHours,
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
