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
    friends: {
        type:Array, 
        default:[]
    },
    pendingInvites:{
        type:Array,
        default:[]
    },
    pendingRequests:{
        type:Array,
        default:[]
    },
    blockedUsers:{
        type:Array,
        default:[]
    },
    isAdmin: {
        type:Boolean,
        default: false
    },
    desc:{
        type:String,
        default:"",
        max:50
    },
    city:{
        type:String,
        default:"",
        max:50
    },
    from:{
        type:String,
        default:"",
        max:50
    },
    relationship:{
        type:Number,
        enum: [1,2,3]
        
    },

},
{timestamps:true}, {collection:"users"}
);

export default mongoose.model("User", UserSchema);