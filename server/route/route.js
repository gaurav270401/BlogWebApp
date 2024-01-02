import express,{ Router } from "express";
import {signupUser,loginUser} from "../controller/user-controller.js";
import { uploadImage,getImage} from "../controller/image-controller.js";
import upload from '../utils/upload.js'
import { createPost,getallPosts,getPost,updatePost,deletePost } from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";
import { newComment,getComments,deleteComments } from "../controller/comment-controller.js";

const router =express.Router();

router.post("/signup",signupUser);
router.post('/login',loginUser);
router.post('/file/upload',upload.single('file'),uploadImage); //here upload is a middlewere.Imp que as per interview perspective 
router.get('/file/:filename',getImage);
router.post('/create',authenticateToken,createPost);
router.get('/posts',authenticateToken,getallPosts);
router.get('/post/:id',authenticateToken,getPost);
router.get('/comments/:id',authenticateToken,getComments);
router.put('/update/:id',authenticateToken,updatePost);
router.delete('/delete/:id',authenticateToken,deletePost);
router.post('/comment/new',authenticateToken,newComment);
router.delete('/comment/delete/:id',authenticateToken,deleteComments);
export default router;