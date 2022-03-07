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
    static async followUser(req, res, next) {
        if(req.body.userId !== req.params.id){
            try{
                const usertoFollow = await User.findById(req.params.id);
                if(usertoFollow){
                    const currentUser = await User.findById(req.body.userId);
                    if(!usertoFollow.followers.includes(req.body.userId)){
                    await usertoFollow.updateOne({$push:{followers:req.body.userId}});
                    await currentUser.updateOne({$push:{following:req.params.id}});
                    res.status(200).json("User has been successfully followed")
                    } else {
                        res.status(403).json("You already follow this user")
                    }
                } else{
                    res.status(404).json("User was not found");
                    return 
                }

            } catch(e) {
                res.status(500).json(e)            }
        } else{
            res.status(403).json("You can't follow yourself")
        }
    }
    static async unfollowUser(req, res, next) {
        if(req.body.userId !== req.params.id){
            try{
                const usertoFollow = await User.findById(req.params.id);
                if(usertoFollow){
                    const currentUser = await User.findById(req.body.userId);
                    if(usertoFollow.followers.includes(req.body.userId)){
                    await usertoFollow.updateOne({$pull:{followers:req.body.userId}});
                    await currentUser.updateOne({$pull:{following:req.params.id}});
                    res.status(200).json("User has been successfully unfollowed")
                    } else {
                        res.status(403).json("You don't follow this user")
                    }
                } else{
                    res.status(404).json("User was not found");
                    return 
                }

            } catch(e) {
                res.status(500).json(e)            }
        } else{
            res.status(403).json("You can't unfollow yourself")
        }
    }


    
}

