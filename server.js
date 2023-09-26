const express = require("express");
const ejs = require("ejs");

const app = express();
app.set("view_engine", "ejs");
app.use(express.static("public"));

app.listen(80, function(){
    console.log("START");
});

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

