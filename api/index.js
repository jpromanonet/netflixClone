const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

// Setting up the ENV file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log("DB Connection OK"))
.catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", authRoute);

app.listen(3001, ()=> {
    console.log("Backend server is running!!!");
})