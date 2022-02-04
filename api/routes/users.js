const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");
const { restart } = require("nodemon");


// Update users

router.put("/:id", async (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password){
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try{
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true}
            );
            res.status(200).json(updateUser);
        } catch(err) { 
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
})

// Delete users

// Get

// Get all users

// Get user stats