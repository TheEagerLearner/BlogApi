const express = require("express");
const { getSingleBlog, getAllBlogs, postBlog, updateBlog, deleteBlog } = require("../controller/blogController");
const route = express.Router();


//GET - all blogs
route.get("/",getSingleBlog);

//GET - single Blog
route.get("/:id",getAllBlogs);

//POST - blog
route.post("/",postBlog);

//PUT - update blog
route.put("/:id",updateBlog);

//DELETE - blog
route.delete("/",deleteBlog);

module.exports = route;