import Share from '../../components/Share/Share'
import Post from '../../components/Post/Post'

import './Profile.scss'
const Profile = () => {
  return (

    <>
        <div className="profilePageContainer">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/person1.jpg" alt="" className="profileCoverImg" />
                        <img src="assets/person1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Jane Karter</h4>
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
    </>
  )
}

export default Profile