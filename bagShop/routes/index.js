const express = require("express");
const router = express.Router();
const isloggedIn = require("../middleware/isLoggedIn")
// router.get("/", function(req, res){
//     res.render("index")
// })
router.get("/", function (req, res) {
  res.render("index", { error: "" });
});

router.get("/shop", isloggedIn,  function (req, res) {
  res.render("shop");
});
router.get("/logout", isloggedIn,  function (req, res) {
  res.render("shop");
});

module.exports = router