import User from "../models/user.js"
import bcrypt from "bcrypt";

export default class AuthController {
    static async GetAuthCheck(req, res, next) {
        res.send("welcome.Auth Route works.Auth Controller Works.")
    }
    static async registerUser(req, res, next) {
        
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),
            isAdmin: req.body.isAdmin
            // username:"John",
            // email:"someEmail@mail.com", 
            // password:"longandsecurepassword", 
            // isAdmin:true
        });
       
        await user.save()
        .then(response => {
            res.json(response).status(200)
        })
        .catch(e => res.json({error: e, message:"Internal server Error. Wrong long details entered. Duplicate email or usernmae entered."}).status(400));
       


    }
}