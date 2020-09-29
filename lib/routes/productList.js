const { Router } = require("express");
const { readProductList } = require("../models/productList");
const router = Router();

router.get("/", async (request, response) => {
  try {
    const name = request.query.q;
    console.log(name);
    const lists = await readProductList(name);
    response.status(200).json(lists);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Lists not found`);
  }
});

module.exports = router;
