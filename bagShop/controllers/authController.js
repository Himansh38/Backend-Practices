// const userModel = require("../models/user-model");
const userModel = require("../models/user-model");
const Product = require("../models/product-model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const {generateToken} = require("../utils/generateToken")

module.exports.registerUser = async function (req, res) {
    try {
        let { fullname, email, password } = req.body

        let user = await userModel.findOne({email:email})
        if(user) 
            return res.status(401).send("you already have an account, please login")

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) res.send(err.message)
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password : hash
                    });
                    let token = generateToken(user);
                    res.cookie("token", token);
                     res.send("User created succesfully");
                }
            });
        });
    } catch (err) {
        console.log(err.message);

    }
}

module.exports.loginUser = async (req, res) => {
    try{
        let{email,  password} = req.body;
    
        let user = await userModel.findOne({email : email})
        if(!user) return  res.send("Email or password incorrect")
    
        bcrypt.compare(password , user.password , function(err, result){
        if(result){
            let token = generateToken(user)
            res.cookie("token" , token)
            res.render("shop")

        }else{
            res.send("Email or password incorrect")
        }
        })
    }catch{
        console.log(err.message)
    }
    
}
module.exports.logout = (req , res) =>{
    res.cookie("token", "")
    res.redirect("/")
}