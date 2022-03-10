import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    text: {
        type:String,
        required:true,
        maxLength:500
    },
    likes: {
        type: Array,
        default:[]
    },
    replies:[{type:mongoose.Schema.Types.ObjectId, ref : 'Comments'}]
}, {timestamps:true})

const PostSchema = new mongoose.Schema({
    userId:{
        type:String, 
        required:true
    },
    desc: {
        type:String,
        maxLength:500,
        default:""
    },
    img:{
        type:String,
        default:""
    },
    likes:{
        type: Array,
        default:[]
    },
    comments:[CommentSchema]
    
    

},
{timestamps:true}, {collection:"posts"}
);
export const Comment = mongoose.model('Comments', CommentSchema);
export const Post = mongoose.model("Post", PostSchema);