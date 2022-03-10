import express from "express";
import PostCtrl from "../controllers/post.controller.js";
import UserCtrl  from "../controllers/user.controller.js";
import loginRequired from "../middleware/authJwt.js";


const router = express.Router();
//check router and controller work
router.get("/checkPost" , loginRequired, PostCtrl.GetPostCheck)
//create new post
router.post("/create", loginRequired, PostCtrl.createPost);
//update post
router.put("/:id", loginRequired, PostCtrl.updatePost);
//delete post
router.delete("/:id", loginRequired, PostCtrl.deletePost);
//get a post
router.get("/:id", PostCtrl.getPost);
//like a post or remove like
router.put("/:id/like", loginRequired, PostCtrl.likePost);
//get comments
//router.get("/:id/comment")
//add comment
router.post("/:id/comment", loginRequired, PostCtrl.addComment)
//delete comment
router.delete("/:id/comment/:commentId", loginRequired, PostCtrl.deleteComment);
//reply to comment
router.post("/:id/comment/:commentId", loginRequired, PostCtrl.replyToComment);
//deleteReply
router.delete("/:id/comment/:commentId/:replyId", loginRequired, PostCtrl.deleteReply);
//like a comment
router.put("/:id/comment/:commentId", loginRequired, PostCtrl.likeComment);
//get timeline posts
router.get("/get/timeline", loginRequired, PostCtrl.getPostsTimeline);
//get posts by user
router.get("/get/:userId", PostCtrl.getUserPosts);
export default router;