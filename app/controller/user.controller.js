const generateResponse = require('../utils/response')
const User = require('../model/user')
const validate = require('../validator/user.validator')
require("dotenv").config();
const jwt = require('jsonwebtoken')
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY
const path = require('path')
const fs = require('fs')
var uuid = require('uuid');
const bcrypt = require('bcrypt');

class UserControl {

    async registerUser(req, res) {
        try {
            console.log(req.body)
            let { error } = validate.validateregister(req.body)
            if (error) return generateResponse(res, 400, error.message)
           
            const emailExist = await User.findOne({ $or:[ { email: req.body.email}, {username: req.body.username}]  })
            if (emailExist) return generateResponse(res, 402, "Email Already Exists")

            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)

            const user = new User(req.body)
           // const savedUser = await user.save()
          // generateResponse(res, 200, "savedUser")
             res.render('/login',req.body)
            
        } catch (err) {
            return generateResponse(res, 401, err.message)
        }
    }


    async loginUser(req, res) {
        try {
            let { error } = validate.validatelogin(req.body)
            if (error) return generateResponse(res, 400, error.message)

            const user = await User.findOne({ email: req.body.email })
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if (!validPassword) {
                return res.status(400).json({ error: "Invalid password" })
            }

            const token = jwt.sign({ _id: user._id }, jwtPrivateKey)
            req.session.user = user;
            if(req.session.user != undefined){
                console.log("req.session",req.session.user)
                let payload = {user:user,pageTitle:"Home"}
                res.render('home',payload);
                return
            }
        res.redirect('/login'); 
            
            //  return res.status(200).json({user:user, token: token })
        } catch (err) {
            return generateResponse(res, 400, err.message)
        }
    }

}

module.exports = UserControl