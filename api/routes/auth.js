const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.SECRET_KEY
        ).toString(),
    });
    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post("login", async (req, res) => {
    try {
        const user = User.findOne({ email: req.body.email});
        !user && res.status(401),json("Wrong password o username");
    } catch(err) {
        res.status(500).json();
    }
})

module.exports = router;