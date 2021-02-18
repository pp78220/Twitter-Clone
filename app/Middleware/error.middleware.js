const winston = require('winston');

module.exports = function(req,res,err,next){
    console.log(err);
    winston.error(err.message,err)
    //error
    //info
    //warn
    //verbose
    //debug
    //silly
res.status(200).send({
    status:false,
    message:'something is wrong/failed',
    error:err.message
})
}