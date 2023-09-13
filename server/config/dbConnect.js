const mongoose = require("mongoose");

const DB_STRING = process.env.DB_STRING;

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_STRING);
    } catch (err) {
        console.log(err);
    }
}

module.exports = dbConnect;