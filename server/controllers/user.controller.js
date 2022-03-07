import bcrypt from "bcrypt";
import user from "../models/user.js";
import User from "../models/user.js"

export default class UserController {
    static async GetUserCheck(req, res, next) {
        res.send("welcome.Route works.Controller Works.")
    }
    static async updateUser(req, res, next) {
        if(req.body.userId === req.params.id || req.body.isAdmin) {//|| req.body.isAdmin
            if(req.body.password){
                try{
                    req.body.password = bcrypt.hashSync(req.body.password, 10)
                } catch(e) {
                    console.log(e)
                    return res.json(e).status(500)
                }
            }
            try{
                const user = await User.findByIdAndUpdate(req.params.id,{
                    $set: req.body
                });
                res.status(200).json("Account has been successfully updated")
            } catch(e) {
                console.log(e)
                return res.json(e).status(500)
            }
        } else {
            return res.status(403).json({"error":"You can only update your own account"})
        }
    }
    static async deleteUser(req, res, next) {
        if(req.body.userId === req.params.id|| req.body.isAdmin ) {//|| req.user.isAdmin
           
            try{
                const user = await User.deleteOne({"_id":req.params.id});
                res.status(200).json("Account has been successfully deleted")
            } catch(e) {
                console.log(e)
                return res.json(e).status(500)
            }
        } else {
            return res.status(403).json({"error":"You can only delete your own account"})
        }
    }
    static async getUser(req, res, next) {
        try{
           const user = await User.findById(req.params.id);
           const {password, updatedAt, ...other} = user._doc
           res.status(200).json(other);
        } catch(e){
            res.status(500).json(e);
        }
    }
    static async addFriend(req, res, next) {
        if(req.body.userId !== req.params.id){
            try{
                const usertoAdd = await User.findById(req.params.id);
                if(usertoAdd){
                    const currentUser = await User.findById(req.body.userId);
                    if(currentUser.pendingInvites.includes(req.params.id) && usertoAdd.pendingRequests.includes(req.body.userId)) {
                        await usertoAdd.updateOne({$push:{friends:req.body.userId}});
                        await currentUser.updateOne({$push:{friends:req.params.id}});
                        await currentUser.updateOne({$pull:{pendingInvites:req.params.id}});
                        await usertoAdd.updateOne({$pull:{pendingRequests:req.body.userId}});
                        res.status(200).json("You have successfully accepted invitation to become friends")
                    } else{
                        if(!usertoAdd.friends.includes(req.body.userId)){
                            if(!usertoAdd.pendingInvites.includes(req.body.userId)){
                                await usertoAdd.updateOne({$push:{pendingInvites:req.body.userId}});
                                await currentUser.updateOne({$push:{pendingRequests:req.params.id}});
                                res.status(200).json("User has been successfully invited to be your friend")
                            } else {
                                res.status(403).json("You have already sent an invite")
                            }
                        
                        } else {
                            res.status(403).json("You are already friends with this user")
                        }
                    }
                } else{
                    res.status(404).json("User was not found");
                    return 
                }

            } catch(e) {
                if(e.name === "CastError"){
                    res.status(500).json("Invalid UserId was inputted. Please try to reload the page and try again")
                    console.log(e)    
                } else {res.status(500).json({"error":e})  
                console.log(e)  }
                
                }
        } else{
            res.status(403).json("You can't be friends with yourself")
        }
    }
    static async removeFriend(req, res, next) {
        if(req.body.userId !== req.params.id){
            try{
                const usertoRemove = await User.findById(req.params.id);
                if(usertoRemove){
                    const currentUser = await User.findById(req.body.userId);
                    if(usertoRemove.friends.includes(req.body.userId)){
                    await usertoRemove.updateOne({$pull:{friends:req.body.userId}});
                    await currentUser.updateOne({$pull:{friends:req.params.id}});
                    res.status(200).json("User has been successfully from your friends list")
                    } else {
                        res.status(403).json("You are not friends with this user")
                    }
                } else{
                    res.status(404).json("User was not found");
                    return 
                }

            } catch(e) {
                res.status(500).json(e)            }
        } else{
            res.status(403).json("You can't stop being friends with yourself")
        }
    }
   



    
}

