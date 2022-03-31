import "./home.scss"
import TopNavbar from "../GeneralComponents/Navigation/TopNavBar/TopNavbar"
import Feed from "../GeneralComponents/Feed/Feed"
import LeftSidebar from "../GeneralComponents/Navigation/LeftSidebar/LeftSidebar"
import Rightsidebar from "../GeneralComponents/Navigation/RightSidebar/Rightsidebar"

const Home = () => {
  return (
    <>
    
      <TopNavbar/>
      <div className="homeContainer">
        <LeftSidebar/>
        <Feed/>
        <Rightsidebar/>
        </div>
      </>
      )
}

export default Home