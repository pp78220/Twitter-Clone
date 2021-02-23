const Joi = require('@hapi/joi');

//Register
function register(user) {
    let schema  =   Joi.object({
            firstName   :   Joi.string().required(),
            lastName    :   Joi.string().required(),
            username    :   Joi.string().required(),
            email       :   Joi.string().required(),
            password    :   Joi.string().required(),
            passwordConf:   Joi.string().required(),
            profilePic  :   Joi.string()
    })
    let result  =   schema.validate(user)
    return result
}


//Login
function login(user) {
    let schema  =   Joi.object({
            email       :   Joi.string().required(),
            password    :   Joi.string().required(),
    })
    let result   =  schema.validate(user)
    return result
}


module.exports.validateregister = register
module.exports.validatelogin = login