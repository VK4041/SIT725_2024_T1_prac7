const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://VarunVK:Varun%40Mongo@sit725.ml9nzrr.mongodb.net/?retryWrites=true&w=majority&appName=SIT725"
let collection;

//MongoDB Connection
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        collection = client.db('City_Database').collection('Cities');
        // The line below displays coloured details -> Collection and MongoDB details in the console
        // console.log(collection);
    } catch (ex) {
        console.error("Error found at MongoDB connection: " + ex);
    }
}
runDBConnection();
module.exports.getCollection = async function () {
    if (!collection) {
        await runDBConnection();
    }
    return collection;
}