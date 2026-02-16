const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config")

router.get("/create", upload.signle("image"), function(req, res){
    res.send("hey its working huihuhiu ");
})

module.exports = router;