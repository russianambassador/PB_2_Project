import User from "../models/user.js";
import {Comment,Post} from "../models/post.js";
import { response } from "express";
import getErrorMessage from "../helpers/err-handler.js";
//import authJwt from "../middleware/authJwt.js"

export default class PostController{
    static async GetPostCheck(req, res, next) {
        try{
            ///const user = User.findById(req.body.userId)
            //console.log(req.body.userId);
            //console.log(req.auth)
            res.send("welcome.Post Route works.Post Controller Works.Good start")}
            catch(e){ res.json({error: e})}
    }
    static async createPost(req, res, next) {
        try{
            const idFromToken = req.auth._id;
            //console.log(req.auth._id)
            
            const user = User.findById(idFromToken)
 
            if(user){
                const newPost = new Post({
                    userId:idFromToken,
                    desc:req.body.desc,
                })
        
                //save post
                await newPost.save()
                .then(response => {
                    res.json(response).status(200);
                })
                .catch(e => {
                
                 res.json({error: getErrorMessage(e)}).status(403);
                })
                }
            else{
                res.status(404).json({error:"User was not found please reload the page and try again"})
            }
        } catch(e) {
            res.json({error: getErrorMessage(e)}).status(500);
        }
    }
    static async updatePost(req, res, next) {
        const idFromToken = req.auth._id;
            //console.log(req.auth._id)
            
        //const user = User.findById(idFromToken)
        try{
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"})
                return
            }
            if(post.userId === idFromToken) {
                await post.updateOne({$set:req.body});
                res.status(200).json({message:"Post has been updated"})
            } else {
                res.status(403).json({error:"You can update only your posts"});
            }
        } catch(e) {
            res.json({error: getErrorMessage(e)}).status(500);
        }
    }
    //     try{
    //         const post = await Post.findByIdAndUpdate(req.params.id,{
    //             $set: req.body
    //         });
    //         res.status(200).json("Post has been successfully updated")
    //     } catch(e) {
    //         if(e.name === "CastError"){
    //             res.status(500).json("Invalid details were inputted. Please try to reload the page and try again")
    //             console.log(e)    
    //         } else {res.status(500).json({"error":e})  
    //             console.log(e)  }
            
    //         }
    static async deletePost(req, res, next) {
        try{
            const idFromToken = req.auth._id;
            //console.log(req.auth._id)
            
            //const user = User.findById(idFromToken)
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json("Post was not found")
                return
            }
            //console.log(post.userId)
            //console.log(req.body.userId)
            if(post.userId === idFromToken) {
                await post.deleteOne();
                res.status(200).json({message:"Post has been deleted"})
            } else {
                res.status(403).json({error:"You can delete only your posts"});
            }
        } catch(e) {
            res.status(500).json({error: getErrorMessage(e)});
        }
    }

    static async likePost(req, res, next) {
        try{
            const idFromToken = req.auth._id;
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return
            }
            if(!post.likes.includes(idFromToken)){
                await post.updateOne({$push:{likes:idFromToken}});
                res.status(200).json({message:"Liked successfully"})
            } else{
                await post.updateOne({$pull:{likes:idFromToken}})
                res.status(200).json({message:"Unliked successfully"})
            }

        } catch(e) {
            console.log(e)
            res.status(500).json({error: getErrorMessage(e)});
        }
    } 
    static async getPost(req, res, next) {
        try{
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return
            }
            res.status(200).json({message:post})
        } catch(e) {
            console.log(e)
            res.status(500).json({error: getErrorMessage(e)})
        }
    }
    static async getPostsTimeline(req, res, next) {
 
        try{
            const idFromToken = req.auth._id;
            const user = await User.findById(idFromToken);
            const userPosts = await Post.find({userId: idFromToken});
            const friendPosts = []; 
            await Promise.all(user.friends.map(async (friend) => {
                await Post.find({userId: friend})
                .then(post => friendPosts.push(post));
              }));
            
            
        
            res.status(200).json({timeline:userPosts.concat(...friendPosts)});

        } catch(e) {
            console.log(e);
            res.status(500).json({error: getErrorMessage(e)})
       }
   }
   static async addComment(req, res, next) {
       try {
        const idFromToken = req.auth._id;
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return
            }
            
            const newComment = new Comment({
                userId:idFromToken,
                text:req.body.text,
            })
            //console.log(newComment)
            post.comments.push(newComment);
            post.save()
            .then(response => res.status(200).json({message:"Successfully added comment"}))
            .catch(e => {
                console.log(e);
                res.status(500).json({error: getErrorMessage(e)});
            })
       } catch(e) {
           console.log(e);
           res.status(500).json({error: getErrorMessage(e)});
       }
   }

   static async deleteComment(req, res, next) {
    try {
        const idFromToken = req.auth._id;
        const post = await Post.findById(req.params.id);
        if(!post){
            res.status(404).json({error:"Post was not found"});
            return;
        }
       
        const comment = post.comments.find(comment => comment._id == req.params.commentId);
        
        if(comment && post.userId === idFromToken){
            //console.log("Post owner")
            await post.updateOne({$pull:{comments:{_id:req.params.commentId}}})
            res.status(200).json({message:"Comment has been deleted"});
            return
        }
       
        //console.log(comment.userId);
        //console.log(req.body.userId);
        if(comment && comment.userId === idFromToken){
            //console.log("comment owner")
            await post.updateOne({$pull:{comments:{_id:req.params.commentId}}});
            res.status(200).json({message:"Comment has been deleted"});
        }
        else{
            res.status(403).json({error:"You have no permissions to delete this or comment has not been found"});
        }

    } catch(e) {
        console.log(e);
        res.status(500).json({error: getErrorMessage(e)});
    }}

    static async replyToComment(req, res, next) {
        const idFromToken = req.auth._id;
        try {
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return
            }
            const comment = post.comments.find(comment => comment._id == req.params.commentId);
           // console.log(comment)
           if(!comment){
               res.status(404).json({error:"Comment was not found"});
               return
           }
            const newReply = new Comment({
                userId:idFromToken,
                text:req.body.text,
            });
            comment.replies.push(newReply);
            //console.log(comment)
            post.comments.push(newReply);
            post.save();
            res.status(200).json({message:"Added reply"});

        } catch(e) {
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
        }
    }

    static async deleteReply(req, res, next) {
        const idFromToken = req.auth._id;
        try{
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return;
            }
            const reply = post.comments.find(comment => comment._id == req.params.replyId);
            if(!reply){
                res.status(404).json({error:"Reply was not found"});
                return;
            }
            if(reply.userId == idFromToken || post.userId == idFromToken){
                const comment = post.comments.find(comment => comment._id == req.params.commentId);
                if(!comment){
                    res.status(404).json({error:"Comment was not found"});
                    return;
                }
                const index = comment.replies.indexOf(req.params.replyId);
                if(index > -1){
                    comment.replies.splice(index, 1);
                }
                post.save();
                await post.updateOne({$pull:{comments:{_id:req.params.replyId}}});
                res.status(200).json({message:"Reply deleted"});
            } else{
                res.status(403).json({error:"You have no permissions to delete the reply"});
            }
            
        } catch(e) {
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
        }
    }
    static async likeComment(req, res, next){
        try{
            const idFromToken = req.auth._id;
            const post = await Post.findById(req.params.id);
            if(!post){
                res.status(404).json({error:"Post was not found"});
                return
            }
            const comment = post.comments.find(comment => comment._id == req.params.commentId);
                if(!comment){
                    res.status(404).json({error:"Comment was not found"});
                    return;
                }
            if(!comment.likes.includes(idFromToken)){
                comment.likes.push(idFromToken);
                post.save();
                //await comment.updateOne({$push:{likes:req.body.userId}});
                res.status(200).json({message:"Liked successfully"});
            } else{
                const index = comment.likes.indexOf(idFromToken);
                if(index > -1){
                    comment.likes.splice(index, 1);
                }
                post.save()
                //await comment.updateOne({$pull:{likes:req.body.userId}})
                res.status(200).json({message:"Unliked successfully"});
            }
        } catch(e){
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
        }
    }

    static async getUserPosts(req, res, next) {
        try{
            const idFromToken = req.auth._id;

            const userPosts = await Post.find({userId: idFromToken});
            if(!userPosts){
                res.status(404).json({"error":"Failed to load posts"});
            }
            if(userPosts.length === 0){
                res.status(200).json({"message":"User has not posted anything yet"});
                return;
            }
            res.status(200).json({"Posts":userPosts});
        } catch(e) {
            console.log(e);
            res.status(500).json({"error":getErrorMessage(e)});
        }
    }
}