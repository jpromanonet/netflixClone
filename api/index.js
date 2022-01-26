const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://adminTestNucbaFS:<password>@cluster0.vbqcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3001, ()=> {
    console.log("Backend server is running!!!");
})