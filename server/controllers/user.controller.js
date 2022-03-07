import bcrypt from "bcrypt";
import User from "../models/user.js"

export default class UserController {
    static async GetUserCheck(req, res, next) {
        res.send("welcome.Route works.Controller Works.")
    }
    static async updateUser(req, res, next) {
        if(req.body.userId === req.params.id || req.user.isAdmin) {
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
    
}

