import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/config.js"



const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:"Name is required",
        min:3,
        unique:"Username already exists"
    },
    email: {
        type:String, 
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    password: {
        type: String,
        required: "Password is required",
        minlength:8
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
        
    }
    

},
{timestamps:true}, {collection:"users"}
);
UserSchema
  .pre("save", function() {                             //this woudl automatically encrypt password when it is put in by user
    this.password = this.securePassword(this.password)
  })

UserSchema.methods = {
    authenticateUser: async function(passwordInput){    //basic jw authentication
        return await bcrypt.compare(passwordInput, this.password);
    },
    securePassword: function (passwordInput){
        return bcrypt.hashSync(passwordInput, config.salts)
    }
}



export default mongoose.model("User", UserSchema);