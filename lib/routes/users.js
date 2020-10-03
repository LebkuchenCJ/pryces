const { Router } = require("express");
const router = Router();

const { addUser, readUsers, readUser } = require("../models/users");

router.post("/", async (request, response) => {
  try {
    const { email, password } = request.body;
    const users = await readUsers(email, password);
    response.status(200).json(users);
  } catch (error) {
    console.log(error);
    response.status(404).send(`User not found`);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const user = await readUser(id);
    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(404).send(`User not found`);
  }
});

router.patch("/", async (request, response) => {
  const { name, email, birthday, password } = request.body;
  try {
    const user = await addUser(name, email, birthday, password);
    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Couldn't add user`);
  }
});

module.exports = router;
