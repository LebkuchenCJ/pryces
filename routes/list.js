const express = require("express");
const router = express.Router();

//const bodyParser = require("body-parser");
const { readLists } = require("../lib/list");

function createListsRouter(database) {
  router.get("/", async (request, response) => {
    try {
      const lists = await readLists(database);
      if (!lists) {
        response.status(404).send(`Lists not found`);
      }
      response.status(200).json({ lists });
    } catch (error) {
      console.log(error);
      response.status(500).send(error.message);
    }
  });
  return router;
}
module.exports = createListsRouter;
