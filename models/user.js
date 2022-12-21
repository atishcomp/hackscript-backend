
var mongoose = require("mongoose");
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

// USER DB SCHEMA DESIGN
var userSchema=new mongoose.Schema({

usermail:{
    unique:true,
    type:String,  
    trimm:true,
},

first_name:{
    type:String,
    trimm:true,

},
last_name:{
    trimm:true,
    type:String,
},

tokens:{
    type:String
},

encry_password:{
    type:String,
    trimm:true,
    required:true,
},

salt:String, //THIS IS IMPORTANT FOR ENCRYPTION 


},{timestamps:true})

//-------------PASSWORD ENCRYPTION, HASHING----------
userSchema.virtual("password")
.set(function(password){
    this._password=password
    this.salt=uuidv1();
    this.encry_password = this.securePassword(password)
})
.get(function(){
    return this._password
})

userSchema.methods={

authenticate:function(plainpassword){
  return this.securePassword(plainpassword)===this.encry_password
},

    securePassword:function(plainpassword){
        if(!plainpassword) return "";
        try{
        return crypto
        .createHmac("sha256",this.salt)
        .update(plainpassword)
        .digest("hex");

        }
        catch(error){
            return "";
        }
    }
};
//-------------PASSWORD ENCRYPTION, HASHING----------


module.exports = mongoose.model("User",userSchema)