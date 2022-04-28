import User from "../models/user.js"
import expressJwt from "express-jwt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import getErrorMessage from "../helpers/err-handler.js";

export default class AuthController {
    static async GetAuthCheck(req, res, next) {
        res.send("welcome.Auth Route works.Auth Controller Works.")
    }
    static async registerUser(req, res, next) {
        const token = req.cookies.accessToken;
       
        //create user
        const user = await new User(
            req.body
            // username:"John", //TEMPLATE
            // email:"someEmail@mail.com", 
            // password:"longandsecurepassword", 
            // isAdmin:true
        );
       //save user
        await user.save()
        .then(response => {
            res.status(200).json({message:"Successfully signed up. Redirecting to login page...", user:response});
        })
        .catch(e => res.json({
                error: getErrorMessage(e)
            }).status(500)
        );
       


    }
  
    static async loginUser(req, res, next) {
        
        const user = await User.findOne({email:req.body.email});
        try{
        if(!user) {
            res.status(401).json({error:"User with matching email was not found"});
            return
        }
        if(!user.authenticateUser(req.body.password)) {
            res.status(401).json({error:"Wrong email or password"});
            return
        }
        const accessToken = jwt.sign({
            _id:user._id
        }, config.secret);

        res.cookie("accessToken", accessToken, {
            expire: new Date() + 86400,
            httpOnly:true,
            secure:config.CookieSetting
        });
        res.status(200).json({
            message:"Logged in successfully",
            accessToken:accessToken,
            user:{
                _id:user._id,
                username:user.username,
                email:user.email,
            }
        });
        // else{
        //     const validPassword = await bcrypt.compare(req.body.password, user.password)
        //     if(validPassword){
        //         token = jwt.sign({id:user._id}, config.secret, {
        //             expiresIn: 8600
        //         });
        //         user.accessToken = token;
        //         console.log(user)
        //         user.save()
        //         res.status(200).send({
        //             id:user._id,
        //             username: user.username,
        //             email:user.email,
        //             accessToken:token
        //         })
        //     }
        //     else{
        //         res.status(401).send({
        //             accessToken:null,
        //             message:"Invalid password"
        //         });
        //     }
        // }
        

        } catch(e) {
            console.log(e);
            res.status(500).json({
                error:getErrorMessage(e)
            });
        }
        
    }

    static async logout(req, res, next) {
        res.clearCookie("accessToken");
        res.status(200).json({
            message:"Signed out"
        })
    }

    
}


