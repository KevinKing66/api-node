const mongoose = require('mongoose');

const user = "drenvio"
const password = "moM5f3AodwLE5d0A"
const url = `mongodb://${user}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// "mongodb://drenvio:<password>@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin"