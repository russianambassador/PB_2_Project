import "./Post.scss"
import { MoreVert, ThumbUpAltRounded } from "@mui/icons-material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PostSettingsButton from "../../design/icons/Post/PostSettingsButton";
import GreenPointButton from "../../design/icons/Post/GreenPointButton";
import CommentButton from "../../design/icons/Post/CommentButton";
import RepostButton from "../../design/icons/Post/RepostButton";
const Post = () => {
  return (
    <div className="PostContainer">
        <div className="PostWrapper">
            <div className="PostTopLeft">
                    <img src="/assets/person1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Jane Doe</span>              
            </div>
            <div className="PostTopRight">
                <PostSettingsButton/>
            </div>
            <div>
               
                <img   src="/assets/person1.jpg" alt="" className="PostCenter" />
                

            </div>
            <div className="PostBottom">
                <div className="likeCounter">
                    271 like
                </div>
                <div className="postButtonGroup">
                    <span className="iconButton">           
                    <GreenPointButton />
                    </span>
                  <span className="iconButton">
                    <CommentButton />
                    </span>
                   <span className="iconButton">
                    <RepostButton />
                    </span>
                </div>
            <span className="postText">
                    <span className="name">Jane Doe</span>
                    <span className="text">These basic pseudo-classes should be familiar to you now. More recently, the CSS Selector Level 3 and CSS Basic UI Level 3 added more pseudo-classes related to HTML forms that provide several other useful targeting conditions</span>
                </span>
                <div className="postBottomLeft">
                <div className="postCommentText">
                      View all 41 comments
                   </div>
                  
                {/* <FavoriteBorderIcon htmlColor="tomato" className="Icon"/>
                    <ThumbUpAltRounded htmlColor="lightblue" className="Icon"/>
                    <span className="postLikeCounter">32 people like it</span> */}
                </div>
                <div className="postBottomRight">
                <span className="postTime">5 minutes ago</span>
                </div>
                
                <div className="postBottomRight">
                   
                  
                </div>
       
            </div>
        </div>
    </div>
  )
}

export default Post