const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    blog:{
        type:String,
        required:true
    },
    bloggerId:{
        type:mongoose.Types.ObjectId,
        ref:"Blogger",
        required:true
    }
});

module.exports = new mongoose.model("Blog",blogSchema);