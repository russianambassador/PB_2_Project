
import Share from "../Share/Share"
import Post from "../Post/Post"
import RightBar from "../RightBar/HomeRightBar/HomeRightBar"
import { useMediaQuery } from "../../functions/mediaQuery"
import "./Feed.scss"

const Feed = () => {
  return (
    <>
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
{useMediaQuery('(min-width: 740px)')?
          <RightBar/>
          :
          null}
  </>
  )
}

export default Feed