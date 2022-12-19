var express =require("express");
var app= express();

app.get('/',(req,res)=>{
    res.send("WELCOME TO HACKSCRIPT BACKEND SERVICE")
  })
   

const port = process.env.PORT || 8000;
    app.listen(port,()=>{
        console.log(`APP IS RUNNING AND AT ${port}`);
    })