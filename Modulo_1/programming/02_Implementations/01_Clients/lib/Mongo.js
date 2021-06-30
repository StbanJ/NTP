const {MongoClient} = require('mongodb');

const DB_NAME = "clients"
const URL = "mongodb+srv://stban:1003982269@modulo-1.1pnsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var MongoConnection = () => new Promise(async(resolve, reject) => {
    try {
        let client = new MongoClient(URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
        await client.connect()
        resolve(client.db(DB_NAME))
    } catch (error) {
        reject(error)
    }
});

module.exports.MongoConnection = MongoConnection;