
require('dotenv').config();

const Mongo_url = process.env.MONGO_URL;
const mongoose = require("mongoose");

async function connectToMongoDB() {
    try {
        await mongoose.connect(Mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("An error occurred while connecting to the database");
        console.error(error);
    }
}

module.exports = { connectToMongoDB };
