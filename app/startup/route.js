const express = require("express")
const helmet = require('helmet')
var session = require('express-session')
var cookieParser = require('cookie-parser')
const morgan = require('morgan')
var cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const error = require('../middleware/error.middleware')
const auth = require('../Middleware/session')
require('express-async-errors')

module.exports = function (server) {

    /**
     * Middlewares
     */
    // server.use(require("../middlewares/path.middleware"));
    // console.log(corsOption);

    server.use(morgan('tiny'))
    server.use(express.json({ limit: "50mb" }));
    server.use(express.urlencoded({ limit: "50mb", extended: true }));
    // server.use(helmet())
    server.use(cors())
    server.set('view engine', 'pug')
    server.set('views', path.join(__dirname, '..', 'views'))
    server.use(express.static(path.join(__dirname, '..', 'public')));
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser());
    
    //auth for device and Browser


    /**
    * Session setting
    */

    server.use(session({ secret: "secret", resave: true, saveUninitialized: false, cookie: { secure: true } }))

    /**
     * end Session setting
     */


    /**
     * Server Routes here
     */
    server.get("/", (req, res) => res.write("Twitter Clone!"));
    server.get("/home", (req, res, next) => res.status(200).render("home",{pageTitle:"Home"}));
    // server.use("/register",(req,res,next)=>  res.status(200).render("login"));
    server.use("/register", require('../routes/registerRoutes'));
    server.use("/login", require('../routes/loginRoutes'));
    server.use("/post", require('../routes/postRoutes'));
    /**
     * error handling middleware
     */
    server.use(error)

}