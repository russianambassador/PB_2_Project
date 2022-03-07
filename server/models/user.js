import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        unique:true
    },
    email: {
        type:String, 
        require:true, 
        max:50, 
        unique:true
    },
    password: {
        type: String,
        required:true,
        min:8
    }, 
    profilePicture: {
        type:String,
        default:""
    },
    coversPicture: {
        type:String,
        default:""
    }, 
    followers: {
        type:Array, 
        default:[]
    },
    following: {
        type:Array, 
        default:[]
    },
    isAdmin: {
        type:Boolean,
        default: false
    }
},
{timestamps:true}, {collection:"users"}
);

export default mongoose.model("User", UserSchema);