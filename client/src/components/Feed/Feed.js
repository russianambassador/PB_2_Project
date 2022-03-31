
import Share from "../Share/Share"
import Post from "../Post/Post"
import "./Feed.scss"

const Feed = () => {
  return (
<div className="FeedContainer">
    <div className="FeedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
</div>
  )
}

export default Feed