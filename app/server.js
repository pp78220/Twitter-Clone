const express = require('express')
const server = express()
// const sessiosn = require('express-session')
// server.use(sessiosn({ secret: "secret", resave: true, saveUninitialized: false, cookie: { secure: true } }))
require('./startup/route')(server);
require('./startup/logging')()


module.exports = server;