const Blogger = require('../models/blogger');

//getDetails
exports.getDet = (req,res,next)=>{

    Blogger.find({username:req.params.userName})
    .select("_id username email")
    .exec()
    .then(doc=>{
        res.status(200).json({
            count:doc.length,
            userInfo:doc,
            request:{
                method:"GET",
                url:"http://localhost:3000/blogger/"+req.params.userName
            }
        })
    })
    .catch(err=>{
        res.status(400).json({
            error:err
        })
    })
}

//signUp
exports.signBlogger = (req,res,next)=>{

    const signupDetails = new Blogger({
        username:req.body.username,
        email:req.body.email
    });


    Blogger.find({username:req.body.username})
    .exec()
    .then(
        data =>{
            console.log(data);
            if(data.length>=1){
                res.status(402).json({
                    message:"User already present"
                })
            }
            else{
                signupDetails.save()
                .then(doc=>{
                    res.status(200).json({
                        message:doc,
                        request:{
                            method:"GET",
                            url:"http://localhost:3000/blogger/"+req.body.username
                        }
                    })
                })
                .catch(err=>{
                    res.status(400).json(err)
                })
            }
        }
    )
    .catch(err=>{
        res.status(400).json(err)
    })

}

//delete
exports.deleteBlogger = (req,res,next)=>{
    
    Blogger.remove({_id:req.params.id})
    .exec()
    .then(
        data=>{
            res.status(200).json({
                message:"Successfully deleted user",
                data:data
            })
    }
    )
    .catch(
        err=>{
            res.status(400).json(err)
        }
    )

}