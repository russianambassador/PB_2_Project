import { Search, Person, Chat, Notifications } from "@mui/icons-material"; 
import "./topnavbar.scss";

const TopNavbar = () => {
  return (
    <div className="topbarContainer">
          <div className="topbarLeft">
            <span className="logo">GoGreen</span>
          </div>
          <div className="topbarCentre">
            <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="Search..." className="searchInput"/>
            </div>
          </div>
          <div className="topbarRight">
            <div className="topbarLinks">
              <span className="topbarLink">Home</span>
              <span className="topbarLink">Timeline</span>
            </div>
              <div className="topbarIconLinks">
                <div className="topbarIconLink">
                  <Person />
                  <span className="topbarItemBadge">1</span>
                </div>
                <div className="topbarIconLink">
                  <Chat />
                  <span className="topbarItemBadge">1</span>
                </div>
                <div className="topbarIconLink">
                  <Notifications />
                  <span className="topbarItemBadge">1</span>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="topbarImg"/>
          </div>
    </div>
  )
}

export default TopNavbar