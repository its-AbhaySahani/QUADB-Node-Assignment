// const mongoose = require('mongoose');

// const uri = "mongodb://127.0.0.1:27017/Long-Drive";

// // Define the schema for the "tickers" model
// const tickerSchema = new mongoose.Schema({
//   name: String,
//   last: Number,
//   buy: Number,
//   sell: Number,
//   volume: Number,
//   base_unit: String
// }, { collection: 'tickers' });

// // Register the schema with Mongoose
// mongoose.model('Ticker', tickerSchema);

// const connectDb = async () => {
//     try {
//         const client = await mongoose.connect(uri);
//         console.log("Successfully connected to MongoDB");
//         return client;
//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//         process.exit(0);
//     }
// };

// module.exports = connectDb;