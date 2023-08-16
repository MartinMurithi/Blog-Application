const express = require('express');
const routes = express.Router();

const { postBlog, getBlogs, getOneBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

routes.post('/blogr.io/api/v1/write', postBlog);
routes.get('/blogr.io/api/v1/articles', getBlogs);
routes.get('/blogr.io/api/v1/blog/:id', getOneBlog);
routes.patch('/blogr.io/api/v1/update/:id', updateBlog);
routes.delete('/blogr.io/api/v1/delete/:id', deleteBlog);

module.exports = routes;