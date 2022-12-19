const User = require("../models/user")


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

 