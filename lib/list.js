//const fs = require("fs").promises;

async function readLists(database) {
  const collection = database.collection("lists");
  const lists = await collection.find();
  if (!lists) {
    return null;
  }
  return lists;
}

exports.readLists = readLists;
