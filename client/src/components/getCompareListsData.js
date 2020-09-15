import PropTypes from "prop-types";

function getCompareListsData({
  supermarkets,
  listData,
  setConnectionFail,
  setTotalPrices,
}) {
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
        if (supermarketProduct) {
          return totalPrice + supermarketProduct.price;
        } else {
          return totalPrice;
        }
      }, 0);

      console.log(totalPrice);
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

export default getCompareListsData;
getCompareListsData.propTypes = {
  supermarkets: PropTypes.any,
  listData: PropTypes.any,
  setConnectionFail: PropTypes.func,
  setTotalPrices: PropTypes.func,
};
