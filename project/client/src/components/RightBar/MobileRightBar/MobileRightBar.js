import './MobileRightBar.scss'
import { NavLink } from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import {useState} from 'react'

import PersonCircle from "../../../design/icons/LeftbarIcons/PersonCircle"
import Friends from "../../../design/icons/LeftbarIcons/Friends"
import Leaf from "../../../design/icons/LeftbarIcons/Leaf"
import Award from "../../../design/icons/LeftbarIcons/Award"
import Settings from "../../../design/icons/LeftbarIcons/Settings"

import { MakeThatImpact } from "../../../design/graphics/MakeThatImpact"

const MobileRightBar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }
    const handleStateChange = state => {
        setIsMenuOpen(state.isOpen)
    }
    return (
        <Menu noTransition isOpen={isMenuOpen} onStateChange={handleStateChange}>
                <div className="leftbarList">
                    <NavLink onClick={handleCloseMenu} to="profile" className="listItem">
                        <span className="listItemText">
                            Profile
                        </span>
                        <PersonCircle className="icon"/>                
                    </NavLink>
                    <NavLink onClick={handleCloseMenu}to=""className="listItem">
                        <span className="listItemText">
                            Friends
                        </span>
                        <Friends className="icon"/>                  
                    </NavLink>
                    <NavLink onClick={handleCloseMenu}to="mygarden"className="listItem">         
                        <span className="listItemText">
                            My Garden
                        </span>
                        <Leaf className="icon"/>
                    </NavLink>
                    <NavLink onClick={handleCloseMenu}to="campaigns"className="listItem">
                        <span className="listItemText">
                        My Campaigns
                        </span>
                        <Award className="icon"/>
                    </NavLink>
                    <NavLink onClick={handleCloseMenu}to="settings"className="listItem">
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
        </Menu>
      )
}

export default MobileRightBar