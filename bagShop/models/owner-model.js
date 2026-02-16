const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Scatch")

const userSchema = new mongoose.Schema({
      
fullname:{
    type: String,
    minlength: 3,
    trim: true
} ,
email : String,
password : String,
products :{
    type: Array,
    default : []
},
contact :Number,
gstin  : String
});

module.exports = mongoose.model("user", userSchema)
