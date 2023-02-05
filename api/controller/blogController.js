const Blog = require('../models/blog')


//GET single blog
exports.getSingleBlog = (req,res,next)=>{

    Blog.find()
    .select("_id title blog bloggerId")
    .exec()
    .then(
        docs =>{
            res.status(200).json({
                blogs:docs.map(doc=>{
                    return({
                    _id:doc._id,
                    title:doc.title,
                    blog:doc.blog.substring(0,60),
                    bloggerId:doc.bloggerId,
                    request:{
                        method:"GET",
                        url:"http://localhost:3000/blogs/"+doc._id
                    }
                })})
            })
        }
    )
    .catch(err=>{
        res.status(400).json(err)
    })

}


//Get ALL blogs
exports.getAllBlogs = (req,res,next)=>{

    Blog.find({_id:req.params.id})
    .select("_id title blog bloggerId")
    .populate("bloggerId")
    .exec()
    .then(
        docs =>{
            res.status(200).json({
                count:docs.length,
                blogs:docs.map(doc=>{
                    return({
                    _id:doc._id,
                    title:doc.title,
                    blog:doc.blog,
                    bloggerId:doc.bloggerId,
                    request:{
                        method:"GET",
                        url:"http://localhost:3000/blogs/"+doc._id
                    }
                })})
            })
        }
    )
    .catch(err=>{
        res.status(400).json(err)
    })

}


//post a single blog
exports.postBlog = (req,res,next)=>{
    
    const blog = new Blog({
        title:req.body.title,
        blog:req.body.blog,
        bloggerId:req.body.bloggerId
    });

    blog.save()
    .then(
        data=>{
            res.status(200).json({
                message:"Blog posted successfully",
                blog:data,
                request:{
                    method:"GET",
                    url:"http://localhost:3000/blogs/"
                }
            })
        }
    )
    .catch(err=>{
        res.status(400).json(err);
    })

}


//update a single blog
exports.updateBlog = (req,res,next)=>{

    Blog.updateOne({_id:req.params.id},{
        title:req.body.title,
        blog:req.body.blog

    })
    .exec()
    .then(data=>{
        
    res.status(200).json({
        message:"PUT Request",
        data:data
    })
    })
    .catch(err=>{
        res.status(400).json(err);
    })
}


//delete a single blog
exports.deleteBlog = (req,res,next)=>{

    Blog.remove({_id:req.body.id})
    .exec()
    .then(
        data=>{
        res.status(200).json(data)
    }
    )
    .catch(err=>{
        res.status(400).json(err)
    })

}