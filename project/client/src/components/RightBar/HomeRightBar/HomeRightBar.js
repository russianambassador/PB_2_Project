import {useState} from 'react'


import Search from "../../../design/icons/TopbarIcons/Search"
import "./HomeRightBar.scss"
import '../RightBar.scss'
import Globe from "../../../design/icons/Rightbar/Globe"
import Community from "../../../design/icons/Rightbar/Community"
import GoldTrophy from "../../../design/icons/Rightbar/GoldTrophy"
import SilverTrophy from "../../../design/icons/Rightbar/SilverTrophy"
import BronzeTrophy from "../../../design/icons/Rightbar/BronzeTrophy"
import AwardBadge from "../../../design/icons/Rightbar/AwardBadge"
const RightBar = () => {
    
  const [activeButton, setActiveButton] = useState(1)
  const buttonClickHandler = (n) => {
    setActiveButton(n)
    console.log(activeButton)
  }
  return (
    <div className="RightBarContainer">
    <div className="RightBarWrapper">
            <div className="birthdayContainer">
                <img src="/assets/birthday.png" alt="" className="birthdayImg" />
                <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>

            </div>
            <div className="messagesContainer">               
                <div className="searchbar">
                    <Search width={11} height={11} className="searchIcon"/>
                    <input placeholder="Search messages..." className="searchInput"/>
                </div>
                <div className="messageList">
                    <div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div>
                    <div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div>
                    <div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div>
                    <div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div><div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div><div className="messageBox">
                        <div className="mbLeft">
                            <img src="/assets/person1.jpg" alt="" className="userImg" />
                        </div>
                        <div className="mbCenter">
                            <span className="name">
                                John Carter
                            </span>
                            <div className="messageText">
                                <p>
                                    <span className="sender">John Carter: </span>
                                    <span className="text">Hi I have sent you the message containing...</span>
                                </p> 
                            </div>
                        </div>
                        <div className="mbRight">
                            <span className="date">
                                Feb{'\u00A0'}21
                            </span>
                            <span className="unreadCounter">
                                3
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rankingsContainer">
              <div className="filterGroup">
                <button onClick={() => buttonClickHandler(1)}className={activeButton==1?"filterButtonLeftActive":"filterButton Left"}>
                  <Globe/>
                </button>
                <button onClick={() => buttonClickHandler(2)} className={activeButton==2?"filterButtonRightActive":"filterButton Right"}>
                  <Community/>
                </button>
              </div>
              {activeButton==1?
              <>
               <h3 className="title">
               Global<br/>Rankings
             </h3>
             <div className="rankingList">
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                 <div className="counterContainer">
                     <span className="pointsCounter">
                       2663
                     </span>
                   </div>
                   <span className="ranking">
                     <GoldTrophy/>
                   </span>
                 </div>
               </div>
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                 <div className="counterContainer">
                     <span className="pointsCounter">
                       256
                     </span>
                   </div>
                   <span className="ranking">
                     <SilverTrophy/>
                   </span>
                 </div>
               </div>
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                   <div className="counterContainer">
                     <span className="pointsCounter">
                       2
                     </span>
                   </div>
                   <span className="ranking">
                     <BronzeTrophy/>
                   </span>
                 </div>
               </div>
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                   <div className="counterContainer">
                     <span className="pointsCounter">
                       2
                     </span>
                   </div>
                   <span className="ranking">
                     4.
                   </span>
                 </div>
               </div>
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                   <div className="counterContainer">
                     <span className="pointsCounter">
                       2
                     </span>
                   </div>
                   <span className="ranking">
                     5.
                   </span>
                 </div>
               </div>
               <div className="rankingItem">
                 <div className="itemLeft">
                   <img src="/assets/person1.jpg" alt="" className="userImg" />
                 </div>
                 <div className="itemCenter">
                   <span className="userName">
                     Jane Carter
                   </span>
                 </div>
                 <div className="itemRight">
                   <div className="counterContainer">
                     <span className="pointsCounter">
                       2
                     </span>
                   </div>
                   <span className="ranking">
                     6.
                   </span>
                 </div>
               </div>
             </div>
             </>
              :
              <>
              <h3 className="title">
              Friends<br/>Rankings
            </h3>
            <div className="rankingList">
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                <div className="counterContainer">
                    <span className="pointsCounter">
                      2663
                    </span>
                  </div>
                  <span className="ranking">
                    <GoldTrophy/>
                  </span>
                </div>
              </div>
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                <div className="counterContainer">
                    <span className="pointsCounter">
                      256
                    </span>
                  </div>
                  <span className="ranking">
                    <SilverTrophy/>
                  </span>
                </div>
              </div>
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                  <div className="counterContainer">
                    <span className="pointsCounter">
                      2
                    </span>
                  </div>
                  <span className="ranking">
                    <BronzeTrophy/>
                  </span>
                </div>
              </div>
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                  <div className="counterContainer">
                    <span className="pointsCounter">
                      2
                    </span>
                  </div>
                  <span className="ranking">
                    4.
                  </span>
                </div>
              </div>
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                  <div className="counterContainer">
                    <span className="pointsCounter">
                      2
                    </span>
                  </div>
                  <span className="ranking">
                    5.
                  </span>
                </div>
              </div>
              <div className="rankingItem">
                <div className="itemLeft">
                  <img src="/assets/person1.jpg" alt="" className="userImg" />
                </div>
                <div className="itemCenter">
                  <span className="userName">
                    Jane Carter
                  </span>
                </div>
                <div className="itemRight">
                  <div className="counterContainer">
                    <span className="pointsCounter">
                      2
                    </span>
                  </div>
                  <span className="ranking">
                    6.
                  </span>
                </div>
              </div>
            </div>
            </>
              }
               
            </div>
        </div>
    </div>
  
  )
}

export default RightBar