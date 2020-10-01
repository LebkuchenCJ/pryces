const { ObjectID } = require("mongodb");
const { getCollection } = require("../database");

async function readLists() {
  const listCollection = await getCollection("lists");
  const lists = await listCollection.find({}).toArray();
  if (!lists) {
    return null;
  }
  return lists;
}

async function readList(id) {
  const listCollection = await getCollection("lists");
  const objectId = new ObjectID.createFromHexString(id);
  const list = await listCollection.find({ _id: objectId }).toArray();
  if (!list) {
    return null;
  }
  return list;
}

async function readProductsInList(id) {
  const listCollection = await getCollection("lists");
  const objectId = new ObjectID.createFromHexString(id);
  const list = await listCollection.findOne({ _id: objectId });
  if (!list) {
    return null;
  }
  return list;
}

async function updateProductsInList(id, product) {
  const listCollection = await getCollection("lists");
  const objectId = new ObjectID.createFromHexString(id);
  const modifiedProductList = await listCollection.updateOne(
    {
      _id: objectId,
    },
    {
      $push: {
        products: product,
      },
    }
  );
  return modifiedProductList;
}

async function deleteProductInList(id, product) {
  const listCollection = await getCollection("lists");
  const objectId = new ObjectID.createFromHexString(id);
  const modifiedProductList = await listCollection.updateOne(
    {
      _id: objectId,
    },
    {
      $pull: {
        products: product,
      },
    }
  );
  return modifiedProductList;
}

async function addList(name, creationDate, products) {
  const listCollection = await getCollection("lists");
  const list = await listCollection.insertOne({ name, creationDate, products });
  if (!list) {
    return null;
  }
  return list;
}
async function deleteList(id) {
  const listCollection = await getCollection("lists");
  const objectId = new ObjectID.createFromHexString(id);
  const list = await listCollection.deleteOne({ _id: objectId });
  if (!list) {
    return null;
  }
  return list;
}

module.exports = {
  readLists,
  readList,
  addList,
  deleteList,
  readProductsInList,
  updateProductsInList,
  deleteProductInList,
};
