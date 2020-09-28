require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db(process.env.MONGO_DB_NAME);
    const collection = database.collection("product-list");

    const query = { name: "Cheese" };
    const result = await collection.findOne(query);

    console.log(result);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
