const { Router } = require("express");
const router = Router();

const {
  readLists,
  readProductsInList,
  addList,
  updateProductsInList,
  readList,
} = require("../models/list");

router.get("/", async (request, response) => {
  try {
    const lists = await readLists();
    response.status(200).json(lists);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
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

router.get("/:id/products", async (request, response) => {
  const id = request.params.id;
  try {
    const list = await readProductsInList(id);
    response.status(200).json(list);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
  }
});

router.patch("/:id/products", async (request, response) => {
  const id = request.params.id;
  const product = request.body;
  try {
    const result = await updateProductsInList(id, product);
    response.status(200).json(result);
  } catch (error) {
    console.error(error);
    response.status(400).send("Couldn't add products");
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
