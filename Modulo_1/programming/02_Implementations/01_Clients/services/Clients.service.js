const { MongoConnection } = require("../lib/Mongo");

//Collection
const COLLECTION = "clients";

const findUsers = () =>
  new Promise(async (resolve, reject) => {
    try {
      // Inicializa mongocliente para que me retorne la configuracion de la db
      const DB = await MongoConnection();
      // Obtenemos la coleccion
      const clients = DB.collection(COLLECTION);
      const clientsList = await clients.find({}).toArray();
      resolve(clientsList);
    } catch (error) {
      reject(error);
    }
  });

  module.exports = {
      findUsers,
  }