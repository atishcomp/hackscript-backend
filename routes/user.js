const express = require("express");
const router = express.Router();
const {createUser,getAllUsers} = require("../controllers/user.js")



router.post("/user/create",createUser)
router.get("/user/getusers",getAllUsers)
module.exports= router;