const express = require('express')
const server = express()

require('./startup/route')(server);
require('./startup/logging')()

// require('dotenv').config()
// const port = process.env.PORT;

// app.set('view engine', 'pug')
// app.set('views','app/views')
// app.use(express.static(path.join(__dirname, "app/public")));
// app.use(bodyParser.urlencoded({extended: false}));
// const server = app.listen(port,()=>{
//     console.log(`listening on port `.cyan,`${port}`.yellow)
// })

// //Routes
// const login = require('./app/routes/loginRoutes')
// const register = require('./app/routes/registerRoutes')
// app.use('/login',login)
// app.use('/register',register)
module.exports = server;