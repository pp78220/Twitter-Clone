const Post = require('../model/post');
//const validate = require('../../validators/post.validator')



class USERPOST{

    async createPost(req, res, next) {
        // throw new Error("could not create a new post");
        // let { error } = validate.validatepost(req.body)
        // if (error) {
        //   return res.status(400).send({
        //     message: "failed",
        //     result: error
        //   })
        // }
    console.log("req.session.user",req.session.user)
        let posts = new Post({
            content:req.body.content,
            postedBy:req.session.user._id,
            
        })
      //  let newresult = await Post.populate(posts,{path:'postedBy'})
        // console.log(req.session.user,newresult);
        await posts.save()
    
        return res.status(200).send({
          message: "Post Created",
          result: posts
        });
      }


      async getAllPosts(req, res) {

        let limit
        let page
        if (req.query.limit) {
          limit = (parseInt(req.query.limit) ? parseInt(req.query.limit) : 10);
          page = req.query.page ? (parseInt(req.query.page) ? parseInt(req.query.page) : 1) : 1;
        }
    
        const createdAt = req.query.createdAt ? (req.query.createdAt == 'desc' ? -1 : 1) : 1
    
        const posts = await Post.find({}).limit(limit).populate('postedBy').skip((page - 1) * limit).sort({ createdAt: createdAt }).lean()
    
        res.status(200).send({
          status: true,
          post: posts,
        });
      }

      async getOnePosts(req, res) {
        let postId = req.params.id;
        let posts = await Post.findById(postId).lean()
        if (!posts) {
          return res.status(404).send({ message: "Post  doesnt exist" })
        }
    
        res.status(200).send({
          status: true,
          Post: posts,
        });
    
      }

      async getOnePostAndRemove(req, res) {
        let postId = req.params.id;
        let post = await posts.findByIdAndRemove(postId)
        let status = false
        if (post) {
          status = true
        }
        res.status(200).send({
          status: status,
          post: post,
        });
    
      }

      async getOnepostAndUpdate(req, res) {
        let postId = req.params.id;
        let post = await posts.findById(postId)
        if (!post) {
          return res.status(404).send({ message: "post doesnt exist" })
        }
    
        let { error } = validate.validateUpdatepost(req.body)
        if (error) {
          return res.status(400).send({
            message: "failed",
            result: error
          })
        }
    
        post.set(req.body)
    
        await post.save()
    
        res.status(200).send({
          status: true,
          post: post,
        });
    
      }

}

module.exports = USERPOST;