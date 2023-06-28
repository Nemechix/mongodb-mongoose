const MongoClient = require(`mongodb`).MongoClient;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const uri = "mongodb://localhost:27017"; // Connection URL

const dbName = "video"; // Database Name

const client = new MongoClient(uri); // Create a new MongoClient

async function run() {
  try {
    await client.connect(); // Connect the client to the server

    const db = client.db(dbName);

    const collection = db.collection("movie");

    console.log("Connected successfully to server");


  } finally {
    await client.close(); // Ensures that the client will close when you finish/error
  }
}

run().catch(console.dir);
