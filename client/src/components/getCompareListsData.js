import PropTypes from "prop-types";

function getCompareListsData({
  supermarkets,
  groceryList,
  setConnectionFail,
  setTotalPrices,
}) {
  if (supermarkets && groceryList) {
    setConnectionFail(false);
    const listProducts = groceryList.products;
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
  supermarkets: PropTypes.array,
  groceryList: PropTypes.array,
  setConnectionFail: PropTypes.func,
  setTotalPrices: PropTypes.func,
};
