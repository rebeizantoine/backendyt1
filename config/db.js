require('dotenv').config();
const Mongo_url = process.env.Mongo_url; // The case matches what's in your .env file
const mongoose = require("mongoose");

async function Connectionf() {
    try {
        await mongoose.connect(Mongo_url);
        console.log("Connecting to the database successfully");
    } catch (error) {
        console.log("An error occurred");
        console.log(error);
    }
}

module.exports = { Connectionf };
