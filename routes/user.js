const express = require("express");
const router = express.Router();
const {createUser,getAllUsers,getLoginToken,getUserDetails} = require("../controllers/user.js")



router.post("/user/create",createUser)
router.get("/user/getusers",getAllUsers)
router.get("/user/signin/logintoken",getLoginToken)
router.get("/user/userdetails",getUserDetails)
module.exports= router;