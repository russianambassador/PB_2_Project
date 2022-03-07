import User from "../models/user.js"
import bcrypt from "bcrypt";




export default class AuthController {
    static async GetAuthCheck(req, res, next) {
        res.send("welcome.Auth Route works.Auth Controller Works.")
    }
    static async registerUser(req, res, next) {
        //create user
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,10),//hash password
            isAdmin: req.body.isAdmin
            // username:"John",
            // email:"someEmail@mail.com", 
            // password:"longandsecurepassword", 
            // isAdmin:true
        });
       //save user
        await user.save()
        .then(response => {
            res.json(response).status(200)
        })
        .catch(e => res.json({error: e, message:"Internal server Error. Wrong long details entered. Duplicate email or usernmae entered."}).status(400));
       


    }

    static async loginUser(req, res, next) {
       

        const user = await User.findOne({email:req.body.email});
        try{
        if(!user) {
            res.json({"error":"Email entered does not match any users"}).status(404);
        }
        else{
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if(validPassword){
                res.json({"validPassword":validPassword, "message":"Password correct"}).status(200)
            }
            else{
                res.json({"validPassword":validPassword, "message":"Password incorrect"}).status(400)
            }
        }
        

        } catch(e) {
            console.log(e)
        }
        
    }
}