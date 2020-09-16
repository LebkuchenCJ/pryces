import PropTypes from "prop-types";

function calcTotalPrice({ listProductIDs, supermarket }) {
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
  return totalPrice;
}

export default calcTotalPrice;
calcTotalPrice.propTypes = {
  supermarket: PropTypes.shape({
    products: PropTypes.array,
  }),
  listProductIDs: PropTypes.array,
};
