const mongoose = require("mongoose");

//creating db for users
const UserModel = mongoose.model("users",{
    name : {type : String},
    email : {type : String},
    password : {type : String}
})

module.exports = UserModel;