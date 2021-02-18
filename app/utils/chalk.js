const chalk =require('chalk')

var info = chalk.blueBright
var connected = chalk.bold.green;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports = {info,error,connected,disconnected,termination}