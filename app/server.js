const express = require('express')
const server = express()

require('./startup/route')(server);
require('./startup/logging')()


module.exports = server;