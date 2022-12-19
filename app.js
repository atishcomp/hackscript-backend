var express =require("express");
require('dotenv').config();
var app= express();
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser= require("body-parser");



app.use(cors())
app.use(bodyParser.json())

const userRoutes = require("./routes/user")  //THIS IS VERY IMPORTANT FOR MAKING REQUESTS

//Using environmnet variable to secure the connection password of db
//we are using mongodb cloud atlas database

//-----------CONNECTING THE DATABASE---------START---
mongoose.connect(process.env.DATABASE_CONNECTION,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("DB CONNECTED") 
    }).catch((error)=>console.log(error.message))

    app.use("/",userRoutes);  //*****

app.get('/',(req,res)=>{
    res.send("WELCOME TO HACKSCRIPT BACKEND SERVICE")
  })

//-----------CONNECTING THE DATABASE----------END--

   

const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })