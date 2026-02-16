const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
      
 imgae : Buffer,
 name: String,
 price: Number,
 discount : {
    type : Number,
    default : 0
 },
 bgcolor: String,
 paneColor : String,
 textcolor: String
});

module.exports = mongoose.model("product", productSchema)
