import "./Share.scss"
import { useState } from "react/cjs/react.production.min"
import { useMediaQuery } from "../../functions/mediaQuery"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import Multimedia from "../../design/icons/Share/Multimedia"
import Location from "../../design/icons/Share/Location"
import Tag from "../../design/icons/Share/Tag"
const Share = () => {
  
  return (
    <div className="ShareContainer">
        <div className="ShareWrapper">
            <div className="shareTop">
                <img src="/assets/person1.jpg" alt="" className="profileImg" />
                <input placeholder="What is in your mind?"type="text" className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Multimedia  className="shareIcon"/>
                        {/* <span className="shareOptionText">Photo{'\u00A0'}or{'\u00A0'}Video</span> */}
                    </div>
                    <div className="shareOption">
                        <Location  className="shareIcon"/>
                        {/* <span className="shareOptionText">Location</span> */}
                    </div>
                    <div className="shareOption">
                        <Tag  className="shareIcon"/>
                        {/* <span className="shareOptionText">Tag</span> */}
                    </div>
                    {/* <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div> */}
                </div>
                <button className="shareButton">
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}

export default Share