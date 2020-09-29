const { Router } = require("express");
const { addProduct } = require("../models/products");
const router = Router();

router.post("/", async (request, response) => {
  try {
    const name = request.body;
    console.log(name);
    const lists = await addProduct(name);
    response.status(200).json(lists);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
  }
});

module.exports = router;
