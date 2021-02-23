const express = require('express')
const router = express.Router()
const model = require('../model/user')
const UserControl = require('../controller/user.controller')

let user = new UserControl();

router.get('/',(req,res,next)=>{  res.status(200).render("register")})
router.post('/',user.registerUser)

module.exports = router