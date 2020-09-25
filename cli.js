const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://JonasImm:2fRRjiWr3jRxr3xe@development.fcm78.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("pryces");
    const collection = database.collection("product-list");

    const query = { name: "Cheese" };
    const movie = await collection.findOne(query);

    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
