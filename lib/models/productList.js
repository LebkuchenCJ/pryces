const { getCollection } = require("../database");

const collectionName = "productList";

async function getAllProducts() {
  const productsCollecion = await getCollection(collectionName);
  const result = await productsCollecion.find().toArray();
  return result;
}

async function readProductList(query) {
  const productListsCollection = await getCollection(collectionName);
  const lists = await productListsCollection
    .find({ name: new RegExp(query, "i") })
    .toArray();
  if (!lists) {
    return null;
  }
  return lists;
}

exports.getAllProducts = getAllProducts;
exports.readProductList = readProductList;
