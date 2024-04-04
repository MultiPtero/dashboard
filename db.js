const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.mongoUri; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    console.log("Error al conectar. Saliendo...");
    process.exit(1);
  }
}

const db = client.db("mp-app"); // Replace with your database name
const usersCollection = db.collection("users");
const serversCollection = db.collection("servers");

async function findUser(userhash) {
  try {
    const user = await usersCollection.findOne({ email, password });
    if (user) {
      console.log(`User found: ${user.email}`);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (err) {
    console.error(err);
  }
}

async function createUser(userhash) {
  try {
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return;
    } else {
      const result = await usersCollection.insertOne({ email, password });
      console.log(`New user created with id ${result.insertedId}`);
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

async function findServerUser(hash) {
  try {
    const server = await serversCollection.findOne({ path, user });
    if (server) {
      console.log(`Server found: ${server.path}`);
      return server;
    } else {
      console.log("Server not found");
      return null;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect, findUser, createUser, findServerUser };
