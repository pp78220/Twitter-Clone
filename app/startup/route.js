const express = require("express")
const helmet = require('helmet')
const morgan = require('morgan')
var cors = require('cors');
const path = require('path')
const bodyParser = require('body-parser')
const error = require('../middleware/error.middleware')
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
    server.use(helmet())
    server.use(cors())
    server.set('view engine', 'pug')
    server.set('views', path.join(__dirname,'..','views'))
    server.use(express.static(path.join(__dirname, '..','public')));
    server.use(bodyParser.urlencoded({ extended: false }));
    //auth for device and Browser



    /**
     * Server Routes here
     */
    server.get("/", (req, res) => res.write("Twitter Clone!"));
    server.get("/login",(req,res,next)=>  res.status(200).render("login"));
    server.get("/register", require('../routes/registerRoutes'));
    /**
     * error handling middleware
     */
    server.use(error)

}