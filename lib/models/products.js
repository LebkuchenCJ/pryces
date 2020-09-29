//const { ObjectID } = require("mongodb");
const { getCollection } = require("../database");

async function addProduct(name) {
  const listCollection = await getCollection("lists");
  const list = await listCollection.insertOne({ name });
  if (!list) {
    return null;
  }
  return list;
}

exports.addProduct = addProduct;
