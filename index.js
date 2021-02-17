const http = require('http');
const color = require('colors')
const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT;

app.set('view engine', 'pug')
app.set('views','app/views')
app.use(express.static(path.join(__dirname, "app/public")));

const server = app.listen(port,()=>{
    console.log(`listening on port `.cyan,`${port}`.yellow)
})

//Routes
const login = require('./app/routes/loginRoutes')
const register = require('./app/routes/registerRoutes')
app.use('/login',login)
app.use('/register',register)
// app.get('/',(req,res,next)=>{
//     payload = {pageTitle:"Home"}
// res.status(200).render('home',payload)
// })