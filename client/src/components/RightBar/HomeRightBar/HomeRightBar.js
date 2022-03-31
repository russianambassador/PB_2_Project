
import "./HomeRightBar.scss"
import '../RightBar.scss'
const RightBar = () => {
    
  return (
    <div className="RightBarContainer">
    <div className="RightBarWrapper">
            <div className="birthdayContainer">
                <img src="/assets/birthday.png" alt="" className="birthdayImg" />
                <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>

            </div>
        </div>
    </div>
  
  )
}

export default RightBar