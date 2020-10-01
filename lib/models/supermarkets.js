const { getCollection } = require("../database");

async function readSupermarkets() {
  const supermarketCollection = await getCollection("supermarkets");
  const supermarkets = await supermarketCollection.find({}).toArray();
  if (!supermarkets) {
    return null;
  }
  return supermarkets;
}

module.exports = { readSupermarkets };
