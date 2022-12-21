const User = require("../models/user")
require('dotenv').config();
const jwt = require("jsonwebtoken")


// FUNCTION TO CREATE USER IN DB
exports.createUser= (req,res)=>{   
    console.log(req.body)

   const user= new User(req.body); 
   console.log(req.body)
   user.save((err,values)=>{
       if(err || !values){
           return res.status(400).json({
               error:"UNABLE TO CREATE USER IN DB"
           });
       }
       res.send({
           "Message":"USER SUCCESSFULLY CREATED"
       })

   });
}

//THIS WILL RETURN THE LIST OF ALL USERS
exports.getAllUsers = (req,res)=>{
    User.find().exec((err,users)=>{   
        if(err || !users){
             return res.status(400).json({
                 error:"SOME ERROR OCCURRED IN GETTING DATA"
             })
        }
        res.json(users);

   })
}

 //LOGIN TOKEN, FOR USER AUTHENTICATION
exports.getLoginToken = (req,res,next)=>{
    var token="null";
    var usermail=req.query.usermail;
    var password = req.query.password;

    User.findOne({usermail}).exec((err,userid)=>{   
       if(err || !userid ){      
            return res.status(400).json({
                error:"ERROR IN USER  DB"
            })
       } if(!userid.authenticate(password)){
           return res.status(401).json({
                error:"EMAIL AND PASSWORD DO NOT MATCH"
            })  
        }
    token =  jwt.sign({usermail:usermail},process.env.SECRET,{expiresIn:'4d'})

    res.json({"token":token})
    next()
  })
 
   }

 //FETCH USER DATA ACCRORDING TO USERMAIL

 exports.getUserDetails = (req,res)=>{
    
     const search_mail=req.query.usermail;


    //return data in res.json
 }