const express = require("express")
const router = express.Router()
const auth = require('../Middleware/session')
const USERPOST = require("../controller/post.controller")
let crud = new USERPOST();
const session = require('../Middleware/session')



router.post('/',crud.createPost);
router.get('/', crud.getAllPosts);
router.get('/:id', crud.getOnePosts);
router.put('/:id', crud.getOnepostAndUpdate);
router.delete('/:id', crud.getOnePostAndRemove);

module.exports = router