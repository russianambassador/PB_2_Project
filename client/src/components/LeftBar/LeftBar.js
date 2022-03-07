
import "./LeftBar.scss"
import "./LeftBar.css"
import { NavLink } from "react-router-dom";
import PersonCircle from "../../design/icons/LeftbarIcons/PersonCircle"
import Home from "../../design/icons/TopbarIcons/Home"
import Leaf from "../../design/icons/LeftbarIcons/Leaf"
import Award from "../../design/icons/LeftbarIcons/Award"
import Settings from "../../design/icons/LeftbarIcons/Settings"

import { MakeThatImpact } from "../../design/graphics/MakeThatImpact"

const LeftBar = () => {
  return (
    <div className="LeftBarContainer" id="LeftBar">
        <div className="leftbarWrapper">
            <div className="leftbarList">
                <NavLink to="profile" className="listItem">
                    <span className="listItemText">
                        Profile
                    </span>
                    <PersonCircle className="icon"/>                
                </NavLink>
                <NavLink to=""className="listItem">
                    <span className="listItemText">
                        Friends
                    </span>
                    <Home className="icon"/>                  
                </NavLink>
                <NavLink to="mygarden"className="listItem">         
                    <span className="listItemText">
                        My Garden
                    </span>
                    <Leaf className="icon"/>
                </NavLink>
                <NavLink to="campaigns"className="listItem">
                    <span className="listItemText">
                    My Campaigns
                    </span>
                    <Award className="icon"/>
                </NavLink>
                <NavLink to="settings"className="listItem">
                    <span className="listItemText">
                        Settings
                    </span>
                    <Settings className="icon"/>                   
                </NavLink>
                
            </div>
            <MakeThatImpact/>
            <span className="Hr"/>
            <button className="button">
                Share your contributions now!
            </button>
        </div>
    </div>
  )
}

export default LeftBar