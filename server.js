const express = require("express");
const app = express();
const pool = require("./src/config/database");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");


//ejs path 설정
const htmlPath = __dirname+"/views";

//라우터설정
const mainRouter = require("./src/routes/main/mainRouter");
const userRouter = require("./src/routes/user/userRouter");

app.set("view_engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(htmlPath));
app.use("/", mainRouter);
app.use("/user", userRouter);
app.listen(80, function(){
    console.log("START");
});

app.get("/", (req,res)=>{
    res.render("index.ejs");
    
    // pool((sql) => {
    //     sql.query("SELECT * FROM TBL_USERS", (err, result, doc)=>{
    //         err ? console.log(err) : res.send({result:true});
    //         console.log(result);
    //     });
        
    //     sql.release();
    // });
});

