const express = require("express");
const { getDet, signBlogger, deleteBlogger } = require("../controller/bloggerController");
const route = express.Router();


//GET user details
route.get("/:userName",getDet);

//POST - SignUp a User
route.post("/signup",signBlogger);


//DELETE -> User
route.delete("/:id",deleteBlogger);

module.exports = route;