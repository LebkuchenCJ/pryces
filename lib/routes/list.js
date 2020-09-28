const { Router } = require("express");
const router = Router();

const { readLists } = require("../models/list");

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

module.exports = router;
