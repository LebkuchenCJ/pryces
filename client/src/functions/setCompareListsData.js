import PropTypes from "prop-types";
import setSupermarketCompareData from "./setSupermarketCompareData";
function setCompareListsData({
  supermarkets,
  groceryList,
  setConnectionFail,
  setCompareListData,
}) {
  if (supermarkets && groceryList) {
    setConnectionFail(false);
    const listProducts = groceryList.products;
    const listProductIDs = listProducts.map((product) => product.productId);

    const supermarketCompareData = setSupermarketCompareData({
      supermarkets,
      listProductIDs,
      listProducts,
    });

    const sortedComparedata = supermarketCompareData.sort((a, b) =>
      a.totalPrice > b.totalPrice ? 1 : -1
    );
    setCompareListData(sortedComparedata);
  }
}

export default setCompareListsData;
setCompareListsData.propTypes = {
  supermarkets: PropTypes.array,
  groceryList: PropTypes.array,
  setConnectionFail: PropTypes.func,
  setCompareListData: PropTypes.func,
};
