const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/loginForm/login", (req,res)=>{
    console.log("HERERERERE");
    res.render("./login/loginForm.ejs");
});

module.exports = router;