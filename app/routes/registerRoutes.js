const express = require('express')
const router = express.Router()
const app = express()
app.set('view engine', 'pug')
app.set('views','views')

router.get('/',(req,res,next)=>{  res.status(200).render("register")})
router.post('/',(req,res,next)=>{ console.log(req.body); res.status(200).render("register")})

module.exports = router