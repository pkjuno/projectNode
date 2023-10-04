const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/about", (req,res)=>{
    res.render("about.ejs");
});

router.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

router.get("/post", (req,res)=>{
    res.render("post.ejs");
});

router.get("/home", (req,res)=>{
    console.log("HERE");
    res.render("index.ejs");
});

router.get("/", (req,res)=>{
    res.render("index.ejs");
});

module.exports = router;