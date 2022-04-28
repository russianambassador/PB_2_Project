import "./left-sidebar.scss";
import {Link} from "react-router-dom"
import {AccountCircle, Group, Forest, WorkspacePremium, Settings} from "@mui/icons-material";
const LeftSidebar = () => {
  return (
     <div className="LeftSidebarContainer">
       <div className="LeftSidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AccountCircle className="sidebarIcon"/>
                <Link className="sidebarListItemText">
                Profile
                </Link>
              </li>
              <li className="sidebarListItem">
              <Group className="sidebarIcon"/>
                <Link className="sidebarListItemText">
                Friends
                </Link>
              </li>
              <li className="sidebarListItem">
              <Forest className="sidebarIcon"/>
                <Link className="sidebarListItemText">
              My{'\u00A0'}garden
                </Link>
              </li>
              <li className="sidebarListItem">
              
              <Link className="sidebarListItemText">
              <WorkspacePremium className="sidebarIcon"/>{'\u00A0'}Campaigns
              </Link>
              </li>
              <li className="sidebarListItem">
              <Settings className="sidebarIcon"/>
                <Link className="sidebarListItemText">
              Settings
                </Link>
              </li>
            </ul>
         </div> 
     </div>
  )
}

export default LeftSidebar