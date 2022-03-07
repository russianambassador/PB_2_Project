import User from "../models/user.js"


export default class UserController {
    static async GetUserCheck(req, res, next) {
        res.send("welcome.Route works.Controller Works.")
    }
    static async registerUser(req, res, next) {
        const user = await new User({
            username:"john",
            email:"someemail@mail.com", 
            password:"longandsecurepassword", 
            isAdmin:true
        });
        await user.save();
        res.send(user)


    }
}

