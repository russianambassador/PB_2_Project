 import "./TopBar.scss"
 import { Search, Person, Chat, Notifications } from "@mui/icons-material"
 import Logo from "../../design/graphics/logo"
 import BurgerIcon from "../../design/icons/TopbarIcons/BurgerIcon"
 import { useState } from "react"
 const TopBar = () => {
   const [showLeftBar, setShowLeftBar] = useState(true)
  const logoOnClick = () =>{
    if(showLeftBar){
      document.getElementById("LeftBar").style.display="none"
    }
    else{
      document.getElementById("LeftBar").style.display=""
    }
    setShowLeftBar(!showLeftBar)
  }
  return (

    <div className="topbarContainer">
      <div className="topbarLeft">
        <button className="logoButton" onClick={logoOnClick}>
          <Logo className="logo"/>
        </button>        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search..." className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
     
            {/* <div className="topbarLink">Homepage</div>
            <div className="topbarLink">Timeline</div> */}

      
            <div className="topbarIconItem">
              <Person />
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

          <img src="/assets/person1.jpg" alt="" className="topbarImg" />
      </div>
    </div>

  )
}

export default TopBar