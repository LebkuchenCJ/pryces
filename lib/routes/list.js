const { Router } = require("express");
const router = Router();

const { readLists, readList, addList } = require("../models/list");

router.get("/", async (request, response) => {
  try {
    const lists = await readLists();
    if (!lists) {
      response.status(404).send(`Lists not found`);
    }
    response.status(200).json(lists);
  } catch (error) {
    console.log(error);
    response.status(500).send(error.message);
  }
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const list = await readList(id);
    response.status(200).json(list);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
  }
});

router.post("/", async (request, response) => {
  const { name, creationDate, products } = request.body;
  try {
    const list = await addList(name, creationDate, products);
    response.status(200).json(list);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
  }
});

module.exports = router;
