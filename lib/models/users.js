const { getCollection } = require("../database");
const bcrypt = require("bcrypt");
const { ObjectID } = require("mongodb");

async function readUsers(email, password) {
  const userCollection = await getCollection("users");
  const user = await userCollection.findOne({ email });
  if (!user) {
    return null;
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return error.message;
  }
}

async function readUser(id) {
  const userCollection = await getCollection("users");
  const objectId = new ObjectID.createFromHexString(id);
  const user = await userCollection.findOne({ _id: objectId });
  if (!user) {
    return null;
  }
  return user;
}

async function addUser(name, email, birthday, password) {
  const userCollection = await getCollection("users");
  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return null;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userCollection.insertOne({
    name,
    email,
    birthday,
    password: hashedPassword,
  });
  return user;
}
module.exports = { readUsers, readUser, addUser };
