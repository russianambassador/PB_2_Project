import { Outlet } from "react-router-dom"
import {useState, useEffect} from "react"

import RightBar from "../../components/RightBar/HomeRightBar/HomeRightBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import TopBar from "../../components/TopBar/TopBar";
const MainLayout = () => {
  return (
    <>
     <TopBar/>
    <div className="homeContainer">
      <LeftBar/>
      <Outlet/>
      <RightBar/>
    </div>
    </>
  )
}

export default MainLayout