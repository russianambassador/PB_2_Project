import { Outlet } from "react-router-dom"

import ProfileRightBar from "../../components/RightBar/ProfileRightBar/ProfileRightBar"
import LeftBar from "../../components/LeftBar/LeftBar"
import TopBar from "../../components/TopBar/TopBar"


import './ProfileLayout.scss'
const ProfileLayout = () => {
  return (

    <>
    <TopBar/>
   <div className="homeContainer">
     <LeftBar/>
     <Outlet/>
     <ProfileRightBar/>
   </div>
   </>
  )
}

export default ProfileLayout