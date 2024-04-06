const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = process.env.mongoUri; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("[BD | ✓] Conectado a MongoDB");
  } catch (err) {
    console.error(err);
    console.log("[BD | ✕] Error al conectar. Saliendo...");
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
      console.log(`[BD | ✓] Usuario encontrado: ${user.email}`);
      return user;
    } else {
      console.log(`[BD | ✕] Usuario no encontrado: ${user.email}`);
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
      console.log(`[BD | ✕] El usuario con email \"${email}\" ya existe.`);
      return;
    } else {
      const result = await usersCollection.insertOne({ email, password });
      console.log(`[BD | ✓] Usuario creado con éxito: ${result.insertedId}`);
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

async function findServerUser(id, user) {
  try {
    const server = await serversCollection.findOne({ id, user });
    if (server) {
      console.log(`[BD | ✓] Server encontrado: ${server.id}`);
      return server;
    } else {
      console.log(`[BD | ✕] Server no encontrado: ${server.id}`);
      return null;
    }
  } catch (err) {
    console.error(err);
  }
}

async function addServertoUser(id, user) {
  try {
    const existingServer = await serversCollection.findOne({ id, user });
    if (existingServer) {
      console.log(
        `[BD | ✕] El server con id \"${id}\" ya existe para el usuario \"${user}\".`
      );
      return;
    } else {
      const result = await serversCollection.insertOne({ id, user });
      console.log(
        `[BD | ✓] Server creado con éxito: ${result.insertedId}`
      );
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

async function deleteServerfromUser(id, user) {
  try {
    const server = await serversCollection.findOne({ id, user });
    if (!server) {
      console.log(
        `[BD | ✕] No se encontro el server con id \"${id}\" para el usuario \"${user}\".`
      );
      return;
    } else {
      const result = await serversCollection.deleteOne({ id, user });
      console.log(
        `[BD | ✓] Server eliminado con éxito: ${result.deletedCount}`
      );
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}

async function getServerList(user) {
  try {
    const servers = await serversCollection.find({ user }).toArray();
    return servers;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connect,
  findUser,
  createUser,
  findServerUser,
  addServertoUser,
  deleteServerfromUser,
  getServerList,
};