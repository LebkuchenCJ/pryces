const { getCollection } = require("../database");
const { ObjectID } = require("mongodb");

async function readUsers(email, password) {
  const userCollection = await getCollection("users");
  const users = await userCollection.findOne({ email, password });
  return users;
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
  const user = await userCollection.insertOne({
    name,
    email,
    birthday,
    password,
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
