
import './Login.scss'
import { useMediaQuery } from '../../functions/mediaQuery'

const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="LoginWrapper">
         <div className="loginLeft">
              <h3 className="slogan">Welcome to the community that makes impact happen</h3>
              <span className="loginDesc">We are glad to see you are back! Please login to your account</span>
              <div className="loginBox">
                      
                        <div className="inputField">
                          <label className='inputLabel' htmlFor="email">Email</label>
                          <input id="email"placeholder="" type="email" className="loginInput" />
                        </div>
                      
                        <div className="inputField">
                          <label className='inputLabel' htmlFor="password">Password</label>
                          <input id="password"placeholder="" type="password" className="loginInput" />
                        </div>
                    <div className="helperButtonContainer">
                      <div className="checkBoxContainer">
                        <label className='rememberMeLabel' htmlFor="rememberMe">Remember Me</label>
                        <input type="checkbox" id="rememberMe"className="rememberMeCheck" />
                      </div>
                       <span className="loginForgot">Forgot Password?</span>
                    </div>
                    <div className="AuthButtonContainer">
                      <button className="loginButton">Login</button>
                      <button className="registerButton">Join{'\u00A0'}Now</button>
                    </div>
              </div>
         </div>
         {useMediaQuery('(min-width: 460px)')?
         <div className="loginRight">
         <img className='logo' src="/assets/logo.png" alt="" />
         </div>
         :
         null}       
      </div>
    </div>
  )
}

export default Login