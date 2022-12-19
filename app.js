var express =require("express");
require('dotenv').config();
var app= express();
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser= require("body-parser");



app.use(cors())
app.use(bodyParser.json())



//Using environmnet variable to secure the connection password of db
//we are using mongodb cloud atlas database

mongoose.connect(process.env.DATABASE_CONNECTION,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("DB CONNECTED") 
    }).catch((error)=>console.log(error.message))

app.get('/',(req,res)=>{
    res.send("WELCOME TO HACKSCRIPT BACKEND SERVICE")
  })
   

const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })