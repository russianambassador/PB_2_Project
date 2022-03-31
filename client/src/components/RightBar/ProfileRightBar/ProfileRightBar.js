import React from 'react'

import './ProfileRightBar.scss'
import '../RightBar.scss'
const ProfileRightBar = () => {
  return (
    <div className="RightBarContainer">
        <div className="RightBarWrapper">
            <h4 className="rightbarTitle">
                User Information
            </h4>
            <div className="rightbarInfo">
                <div className="infoItem">
                    <div className="infoKey">
                        City:
                    </div>
                    <div className="infoValue">
                        New York
                    </div>
                </div>
                <div className="infoItem">
                    <div className="infoKey">
                        From:
                    </div>
                    <div className="infoValue">
                        Madrid
                    </div>
                </div>
                <div className="infoItem">
                    <div className="infoKey">
                        Relationship:
                    </div>
                    <div className="infoValue">
                        Married
                    </div>
                </div>
            </div>
            <h4 className="rightbarTitle">
                User Friends
            </h4>
            <div className="rightbarFriends">
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
                <div className="friendItem">
                    <img src="assets/person1.jpg" alt="" className="friendImg" />
                    <span className="friendName">John Karter</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileRightBar