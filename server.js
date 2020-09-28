const express = require("express");
const app = express();
/*   */
const { MongoClient } = require("mongodb");
const createListsRouter = require("./routes/list");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
/* const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults(); */

// Serve any static files
/* app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
app.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/lists/:id": "/lists/:id?_embed=products",
  })
);
app.use(router);
app.use(middleware); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(bodyParser.json());
//app.use(cookieParser());
app.use((request, response, next) => {
  console.log(`Request ${request.method} on ${request.url}`);
  next();
});

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();
  } catch (error) {
    console.log("Fly, you fools");
  }

  const database = client.db(process.env.MONGO_DB_NAME);

  app.use("/api/lists", createListsRouter(database));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
main();
