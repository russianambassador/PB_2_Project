import bcrypt from "bcrypt";
import user from "../models/user.js";
import User from "../models/user.js";
import config from "../config/config.js";
import getErrorMessage from "../helpers/err-handler.js";

export default class UserController {
    static async GetUserCheck(req, res, next) {
        res.send("welcome.Route works.Controller Works.")
    }
    static async updateUser(req, res, next) {
        const idFromToken = req.auth._id;
        if(idFromToken === req.params.id) {//|| req.body.isAdmin
            if(req.body.password){
                try{
                    req.body.password = bcrypt.hashSync(req.body.password, 10)
                } catch(e) {
                    console.log(e)
                    return res.status(500).json({error:getErrorMessage(e)});
                }
            }
            try{
                const user = await User.findByIdAndUpdate(req.params.id,{
                    $set: req.body
                });
                res.status(200).json({message:"Account has been successfully updated"});
            } catch(e) {
                 
                console.log(e)  
                res.status(200).json({error:getErrorMessage(e)});
                }
        } else {
            return res.status(403).json({error:"You can only update your own account"});
        }
    }
    static async deleteUser(req, res, next) {
        const idFromToken = req.auth._id;
        if(idFromToken === req.params.id) {//|| req.user.isAdmin
           
            try{
                const user = await User.deleteOne({"_id":idFromToken});
                if(user.deletedCount !== 0){
                    res.status(200).json({message:"User has been successfully deleted"});
                } else {
                    res.status(404).json({error:"Nothing was deleted - user does not exist"});
                }
            } catch(e) {
               
                console.log(e)  
                res.status(500).json({error:getErrorMessage(e)});
                }
            
        } else {
            return res.status(403).json({error:"You can only delete your own account"})
        }
    }
    static async getUser(req, res, next) {
        try{
           const idFromToken = req.auth._id
           const user = await User.findById(idFromToken);
           const {password, updatedAt, ...other} = user._doc
           res.status(200).json({message:other});
        } catch(e){
            res.status(500).json({error:getErrorMessage(e)});
        }
    }
    static async addFriend(req, res, next) {
        const idFromToken = req.auth._id

        if(idFromToken !== req.params.id){
            try{
                const usertoAdd = await User.findById(req.params.id);
                const currentUser = await User.findById(idFromToken);
                if(usertoAdd && currentUser){
                    if(currentUser.blockedUsers.includes(req.params.id)){
                        res.status(403).json({error:"You have blocked this user"});
                        return;
                    }
                    if(usertoAdd.blockedUsers.includes(idFromToken)){
                        res.status(403).json({error:"You have been blocked by this user"});
                        return;
                    }
                    if(currentUser.pendingInvites.includes(req.params.id) && usertoAdd.pendingRequests.includes(req.body.userId)) {
                        await usertoAdd.updateOne({$push:{friends:idFromToken}});
                        await currentUser.updateOne({$push:{friends:req.params.id}});
                        await currentUser.updateOne({$pull:{pendingInvites:req.params.id}});
                        await usertoAdd.updateOne({$pull:{pendingRequests:idFromToken}});
                        res.status(200).json({message:"You have successfully accepted invitation to become friends"});
                    } else{
                        if(!usertoAdd.friends.includes(idFromToken)){
                            if(!usertoAdd.pendingInvites.includes(idFromToken)){
                                await usertoAdd.updateOne({$push:{pendingInvites:idFromToken}});
                                await currentUser.updateOne({$push:{pendingRequests:req.params.id}});
                                res.status(200).json({message:"User has been successfully invited to be your friend"});
                            } else {
                                res.status(403).json({error:"You have already sent an invite"})
                            }
                        
                        } else {
                            res.status(403).json({error:"You are already friends with this user"})
                        }
                    }
                } else{
                    res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"});
                    return 
                }

            } catch(e) {
                console.log(e);
                res.status(500).json({error:getErrorMessage(e)});
                
                }
        } else{
            res.status(403).json({error:"You can't be friends with yourself"})
        }
    }
    static async removeFriend(req, res, next) {
        const idFromToken = req.auth._id
        if(idFromToken !== req.params.id){
            try{
                const usertoRemove = await User.findById(req.params.id);
                const currentUser = await User.findById(idFromToken);
                if(usertoRemove && currentUser){
                    if(usertoRemove.friends.includes(idFromToken)){
                    await usertoRemove.updateOne({$pull:{friends:idFromToken}});
                    await currentUser.updateOne({$pull:{friends:req.params.id}});
                    res.status(200).json({message:"User has been successfully removed from your friends list"})
                    } else {
                        res.status(403).json({error:"You are not friends with this user"})
                    }
                } else{
                    res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"});
                    return 
                }

            } catch(e) {
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
            }
        } else{
            res.status(403).json({error:"You can't stop being friends with yourself"});
        }
    }
    static async declineInvitation(req, res, next) {
        try{
            const idFromToken = req.auth._id;
            const currentUser = await User.findById(idFromToken);
            const userInvitationFrom = await User.findById(req.params.id);
            if(currentUser && userInvitationFrom){
                if(currentUser.pendingInvites.includes(req.params.id)){
                    await currentUser.updateOne({$pull:{pendingInvites:req.params.id}});
                    await userInvitationFrom.updateOne({$pull:{pendingRequests:idFromToken}})
                    res.status(200).json({message:"Invitation has been successfully declined"});
                } else {
                    res.status(404).json({error:"You have no pending invites from this user"});
                }
            } else {
                res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"});
            }
            
        } catch(e) {
          
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
                
                
            }
    }
    static async removeRequest(req, res, next) {
        try{
            const idFromToken = req.auth._id;
            const currentUser = await User.findById(idFromToken);
            const userRequestTo = await User.findById(req.params.id);
            if(currentUser && userRequestTo){
                if(currentUser.pendingRequests.includes(req.params.id)){
                    await currentUser.updateOne({$pull:{pendingRequests:req.params.id}});
                    await userRequestTo.updateOne({$pull:{pendingInvites:idFromToken}});
                    res.status(200).json({message:"Friend request has been successfully removed"});
                } else {
                    res.status(404).json({error:"You have no pending invites from this user"});
                }
            } else {
                res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"});
            }
            
        } catch(e) {
          console.log(e);
          res.status(500).json({error:getErrorMessage(e)});
                
                
            }
    }
    static async blockUser(req, res, next){
        try{
            const idFromToken = req.auth._id;
            const currentUser = await User.findById(idFromToken);
            const userToBlock = await User.findById(req.params.id);
            if(currentUser&&userToBlock){
                if(!currentUser.blockedUsers.includes(req.params.id)){
                    await currentUser.updateOne({$push:{blockedUsers:req.params.id}});
                    if(currentUser.friends.includes(req.params.id)){
                        await currentUser.updateOne({$pull:{friends:req.params.id}});
                        await userToBlock.updateOne({$pull:{friends:idFromToken}});
                    }
                    else if(currentUser.pendingInvites.includes(req.params.id)){
                        await currentUser.updateOne({$pull:{pendingInvites:req.params.id}});
                        await userToBlock.updateOne({$pull:{pendingRequests:req.idFromToken}});
                    }
                    else if(currentUser.pendingRequests.includes(req.params.id)){
                        await currentUser.updateOne({$pull:{pendingRequests:req.params.id}});
                        await userToBlock.updateOne({$pull:{pendingInvites:idFromToken}});
                    }
                    res.status(200).json({message:"User has been successfully blocked"});
                } else {
                    res.status(403).json({error:"You have already blocked this user"});
                }
            } else {
                res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"});
            }
        } catch(e){
            console.log(e);
            res.status(500).json({error:getErrorMessage(e)});
        }
    }
    static async unblockUser(req, res, next){
        try{
            const idFromToken = req.auth._id;
            const currentUser = await User.findById(idFromToken);
            const userToUnblock = await User.findById(req.params.id);
            if(currentUser&&userToUnblock){
                if(currentUser.blockedUsers.includes(req.params.id)){
                    await currentUser.updateOne({$pull:{blockedUsers:req.params.id}});
                    res.status(200).json({message:"User has been successfully unblocked"})
                } else {
                    res.status(403).json({error:"You have already unblocked this user"})
                }
            } else {
                res.status(404).json({error:"When this request was performed one of the users was not found or does not exist"})
            }
        } catch(e){
           console.log(e);
           res.status(500).json({error:getErrorMessage(e)})
        }
    }




    
}





