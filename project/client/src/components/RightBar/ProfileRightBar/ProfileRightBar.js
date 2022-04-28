import React from 'react'

import './ProfileRightBar.scss'
import '../RightBar.scss'
import Search from '../../../design/icons/TopbarIcons/Search'
import PointIcon from '../../../design/icons/Profile/PointIcon'
const ProfileRightBar = () => {
  return (
    <div className="RightBarContainer">
        <div className="RightBarWrapper">
           <div className="pointsContainer">
               <div className="iconContainer">
                <PointIcon/>
               </div>
               <div className="pointsCounterContainer">
                    <span className="counter">
                        2563
                    </span>
                    <span className="counterText">
                        green points
                    </span>
               </div>
           </div>
           
        </div>
    </div>
  )
}

export default ProfileRightBar