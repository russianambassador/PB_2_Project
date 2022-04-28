import './SignupPage.scss'

const SignupPage = () => {
    return (
      <div className="SignUpContainer">
        <div className="SignUpWrapper">
           <div className="signUpLeft">
                <h3 className="slogan">Welcome to the community that makes impact happen</h3>
                <span className="signUpDesc">Create an account to become a part of  the GoGreen  community!</span>
                <div className="signUpBox">
                          <div className="inputField">
                            <label className='inputLabel' htmlFor="username">Username</label>
                            <input id="username"placeholder="" type="text" className="loginInput" />
                          </div>

                          <div className="inputField">
                            <label className='inputLabel' htmlFor="name">Name</label>
                            <input id="name"placeholder="" type="text" className="loginInput" />
                          </div>

                          <div className="inputField">
                            <label className='inputLabel' htmlFor="email">Email</label>
                            <input id="email"placeholder="" type="email" className="loginInput" />
                          </div>
                        
                          <div className="inputField">
                            <label className='inputLabel' htmlFor="password">Password</label>
                            <input id="password"placeholder="" type="password" className="loginInput" />
                          </div>

                          <div className="inputField">
                            <label className='inputLabel' htmlFor="password2">Confirm password</label>
                            <input id="password2"placeholder="" type="password" className="loginInput" />
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
                        <button className="registerButton">Join Now</button>
                      </div>
                </div>
           </div>
           <div className="signUpRight">
           <img className='logo' src="/assets/logo.png" alt="" />
           </div>
        </div>
      </div>
    )
  }


export default SignupPage