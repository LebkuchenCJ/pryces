const { Router } = require("express");
const router = Router();
const { readSupermarkets } = require("../models/supermarkets");

router.get("/", async (request, response) => {
  try {
    const supermarkets = await readSupermarkets();
    response.status(200).json(supermarkets);
  } catch (error) {
    console.log(error);
    response.status(404).send(`Supermarkets not found`);
  }
});

module.exports = router;
