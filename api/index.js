const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Setting up the ENV file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connection OK"))
.catch((err) => console.log(err));

app.listen(3001, ()=> {
    console.log("Backend server is running!!!");
})