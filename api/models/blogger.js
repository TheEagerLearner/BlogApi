const mongoose = require("mongoose");

const bloggerSchema = mongoose.Schema({
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            validate:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        }
});

module.exports = new mongoose.model("Blogger",bloggerSchema);