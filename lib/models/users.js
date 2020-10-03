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
    if (await bcrypt.compare(password, user.hashedPassword)) {
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
    hashedPassword,
  });
  return user;
}
module.exports = { readUsers, readUser, addUser };

/*  CHECK LATER
async function checkUser(name, password) {
    try {
      const userCollection = await getCollection("users");
      const user = await userCollection.find({
        name,
        password,
      });
      if (!user) {
        response.status(401).send("Wrong email or password");
        return;
      }
  
      const token = jwt.sign({ name }, password, {
        expiresIn: "3600s",
      });
      response.setHeader("Set-Cookie", `authToken=${token};path=/;Max-Age=3600`);
      response.send("Logged In");
    } catch (error) {
      console.error(error);
      response.status(500).send(error.message);
    }
  } */
