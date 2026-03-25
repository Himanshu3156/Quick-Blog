import express from "express";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image'), auth, addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.get('/:blogId', getBlogById);

blogRouter.post('/add-comment',addComment);
blogRouter.post('/comments',getBlogComments);




export default blogRouter;