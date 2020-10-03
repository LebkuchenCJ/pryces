require("dotenv").config();
const express = require("express");
const path = require("path");

const { initDatabase } = require("./lib/database");

const list = require("./lib/routes/list");
const productList = require("./lib/routes/productList");
const supermarkets = require("./lib/routes/supermarkets");
const users = require("./lib/routes/users");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/lists", list);
app.use("/api/productList", productList);
app.use("/api/supermarkets", supermarkets);
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

initDatabase(process.env.MONGO_URL, process.env.MONGO_DB_NAME).then(
  async () => {
    console.log(`Database ${process.env.MONGO_DB_NAME} is ready`);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
);
