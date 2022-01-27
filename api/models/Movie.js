const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
    {
        username:{type:String, required:true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        profilePic:{type:String, required:true},
        isAdmin: {type: Boolean, default: false}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);