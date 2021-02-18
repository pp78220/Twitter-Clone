const server = require('./app/server')
const db = require('./app/startup/db')
require('dotenv').config()
const port = process.env.PORT;
const {info}= require('./app/utils/chalk')

const serverListen = server.listen(port,()=>{
    db()
    console.log(info(`listening on port ${port}`))
})

