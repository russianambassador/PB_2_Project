import Share from '../../components/Share/Share'
import Post from '../../components/Post/Post'
import ProfileRightBar from '../../components/RightBar/ProfileRightBar/ProfileRightBar'
import { useMediaQuery } from '../../functions/mediaQuery'
import EditProfile from '../../design/icons/Profile/EditProfile'
import EditProfilePhoto from '../../design/icons/Profile/EditProfilePhoto'
import './Profile.scss'
const Profile = () => {
  return (

    <>
        <div className="profilePageContainer">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <div className="coverImgContainer">
                            <img src="assets/bg2.jpg" alt="" className="profileCoverImg" />
                            <button className="editCoverImg">
                                <EditProfilePhoto/>
                            </button>
                            </div>
                        <div className="profileImgContainer">
                            <img src="assets/person2.jpg" alt="" className="profileUserImg" />
                            <button className="editProfileImg">
                                <EditProfilePhoto/>
                            </button>
                            </div>
                    </div>
                    <div className="profileInfo">
                        <div>
                        <span className="profileInfoName">Jane Karter</span>
                                                    <span className="hobby"> 
                                                    Loves gardening</span>

                        </div>
                        <button className="editProfileButton">
                            Edit Profile <EditProfile/>
                        </button>
                        <div className="userDetails">
                            <span className="location">
                                New York, United States
                            </span>
                            <span className="friendsCounter">
                                3654 Friends
                            </span>
                        </div>
                        <div className="profileInfoDescContainer">
                            <h5 className='heading'>About me</h5>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="profilrRightBottom">
                </div>
            </div>
            <div className="feedMargin">
            <Share/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </div>

            
        </div>
        {useMediaQuery('(min-width: 660px)')?
          <ProfileRightBar/>
          :
          null}
    </>
  )
}

export default Profile