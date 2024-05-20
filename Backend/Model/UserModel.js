const mongoose = require('mongoose'); 

const Users = new mongoose.Schema({
    name: String, 
    email : String, 
    password : String
})

const Usermodel = mongoose.model("users",Users)
module.exports = Usermodel