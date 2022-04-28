 import "./TopBar.scss"
 import Search from "../../design/icons/TopbarIcons/Search"
 import Friends from "../../design/icons/LeftbarIcons/Friends"

 import Chat from "../../design/icons/TopbarIcons/Chat"
 import Notifications from "../../design/icons/TopbarIcons/Notifications"
 import Logo from "../../design/graphics/logo"
 import Cross from "../../design/icons/TopbarIcons/Cross"
 import BurgerIcon from "../../design/icons/TopbarIcons/BurgerIcon"
 import { useState } from "react"
 import { useMediaQuery } from "../../functions/mediaQuery"
 const TopBar = () => {

  return (

    <div className="topbarContainer">
        <div className="topbarLeft">
      {useMediaQuery('(min-width: 495px)')?   
      <img className="logo" src="/assets/logo.png" alt="" />
      :
      null}
      </div>
      {useMediaQuery('(min-width: 495px)')?
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search..." className="searchInput"/>
        </div>
      </div>
      :
      null
      }
      <div className="topbarRight">
     
            {/* <div className="topbarLink">Homepage</div>
            <div className="topbarLink">Timeline</div> */}

      
            <div className="topbarIconItem">
              <Friends />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          {useMediaQuery('(min-width: 495px)')?
          <img src="/assets/person1.jpg" alt="" className="topbarImg" />
          :
          <img className="logo" src="/assets/logo.png" alt="" />
          }

      </div>
    </div>

  )
}

export default TopBar