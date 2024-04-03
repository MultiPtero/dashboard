const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.mongoUri; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

const db = client.db("mydatabase"); // Replace with your database name
const usersCollection = db.collection("users");
const serversCollection = db.collection("servers");

async function findUser(email, password) {
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

async function createUser(email, password) {
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

async function findServerUser(path, user) {
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

module.exports = { connectToDatabase, findUser, createUser, findServerUser };
