const { getCollection } = require("../database");

async function readLists() {
  const listCollection = await getCollection("lists");
  const lists = await listCollection.find({}).toArray();
  if (!lists) {
    return null;
  }
  return lists;
}

async function readList() {
  const listCollection = await getCollection("lists");
  const lists = await listCollection.findOne({}).toArray();
  if (!lists) {
    return null;
  }
  return lists;
}

exports.readLists = readLists;
exports.readList = readList;
