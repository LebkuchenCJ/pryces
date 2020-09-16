import PropTypes from "prop-types";

function countMatchingProducts({ supermarket, listProductIDs }) {
  const supermarketProductIds = supermarket.products.map(
    (product) => product.productId
  );
  const matchingProducts = supermarketProductIds.filter((id) =>
    listProductIDs.includes(id)
  ).length;

  return matchingProducts;
}

export default countMatchingProducts;
countMatchingProducts.propTypes = {
  supermarket: PropTypes.shape({
    products: PropTypes.array,
  }),
  listProductIDs: PropTypes.array,
};
