import express from "express";
import {
    getPost, 
    getPostById,
    createPost,
    updatePost,
    deletePost
} from "../controllers/PostController.js";

const router = express.Router();

router.get('/posts', getPost);
router.get('/posts/:id', getPostById);
router.post('/posts', createPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);


export default router;