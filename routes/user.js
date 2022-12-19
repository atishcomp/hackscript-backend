const express = require("express");
const router = express.Router();
const {createUser} = require("../controllers/user.js")


router.post("/user/create",createUser)
module.exports= router;