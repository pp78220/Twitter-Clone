const mongoose = require('mongoose')
const winston = require('winston')
require('winston-mongodb')
const {info,error,connected,termination,disconnected} = require('../utils/chalk')
require("dotenv").config();
const mongodbConnectionString = process.env.MONGODB_CONNECTION_STRING;


module.exports = function(){
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(mongodbConnectionString).then(()=>{winston.info('connected to mongodb...')})
    mongoose.connection.on('connected',()=>{console.log(connected('Mongoose default connection is open'))})
    mongoose.connection.on('error',(err)=>{console.log(error('Mongoose default connection has occured '+err+' error'))})
    mongoose.connection.on('disconnected',()=>{console.log(disconnected('Mongoose default connection is close'))})

    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0);
        })
    })
}