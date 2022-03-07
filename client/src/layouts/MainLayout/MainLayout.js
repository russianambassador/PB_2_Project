import { Outlet } from "react-router-dom"
import {useState, useEffect} from "react"
import { useMediaQuery } from "../../functions/mediaQuery";
import "./MainLayout.scss"
import RightBar from "../../components/RightBar/HomeRightBar/HomeRightBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import TopBar from "../../components/TopBar/TopBar";
import MobileRightBar from "../../components/RightBar/MobileRightBar/MobileRightBar";
const MainLayout = () => {
  // console.log(useMediaQuery('(min-width: 460px)'))
  return (
    <div id="outer-container">
      {useMediaQuery('(max-width: 495px)')?
      <MobileRightBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      :
      null
      }
      <div id="page-wrap">
        <TopBar/>
        <div className="homeContainer">
          {useMediaQuery('(min-width: 495px)')?
          <LeftBar/>
          :
          null}
          <Outlet/>
          
        </div>
      </div>
    </div>
  )
}

export default MainLayout