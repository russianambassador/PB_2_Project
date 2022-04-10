import React, {useState} from 'react'

function LoginForm() {
    const[details, setDetails] = useState({email: "", password: ""});
   
    const submitHandler = e => {
        e.preventDefault();
        
    }
    
    const onChangeLeftBorder = (id) => {
        document.getElementById(id).style.borderLeft = "5px solid #649B4D";
    }

    const offChangeLeftBorder = (id) => {
        document.getElementById(id).style.borderLeft = "1px solid #C1BBBB";
    }
    


  return (
    <form onSubmit={submitHandler}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <link rel='stylesheet' href="/index.css"></link>
        <div className ='row no-gutters'>
            <div className ='col-md-12 col-lg-6 no-gutters'>
                <div className='leftHalf'>
                    <div className="form-inner">
                        <div className="container" style={{padding: "90px 30px 5px 46px", overflow: "hidden"}}>
                            <h2 className='intro-container-h2'>Welcome to the community that makes impact happen</h2>
                            <p className='intro-container-p'>We are glad to see you are back! Please login to your account</p>
                            <div className='login-container'>
                                <div id="emailBox" onMouseOver={() => onChangeLeftBorder("emailBox")} onMouseOut={() => offChangeLeftBorder("emailBox")} className ="input-box">
                                    <label htmlFor='email' style={{display: 'block'}}>Email Address</label>
                                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/> 
                                </div>
                                <div id="passwordBox" onMouseOver={() => onChangeLeftBorder("passwordBox")} onMouseOut={() => offChangeLeftBorder("passwordBox")} className ="input-box">
                                    <label htmlFor='email' style={{display: 'block'}}>Password</label>
                                    <input type="password" name="password" className ="input" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                </div>
                            </div>
                            <div className ='option-container'>
                                <div className="form-check" style={{display:"inline-block"}}>
                                    <input className="form-check-input" type="checkbox" value="" id="rememberMe"/>
                                    <label className ="form-check-label" id="rememberMe"> Remember Me</label>
                                </div>
                                <a href='#' style={{color: 'black', textDecoration: 'none'}}>Forgot Password</a>
                            </div>
                            <div className ="buttons-container">
                                <button style={{display: "inline-block", marginRight: "10px", backgroundColor:"#649B4D", boxShadow:"#649B4D"}} type="submit" className ="btn btn-success">Login</button>
                                <a href='/register'><button style={{display: "inline-block", borderColor:"#649B4D", color:"#649B4D"}} type="button" className ="btn btn-outline-success">Join now</button></a>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
            <div className ='col d-none d-lg-block no-gutters'>
                <div className ='rightHalf'>
                    <img src='img/hand.png' className='rightHalf-img'></img>
                    <img src='img/Logo.png' className ='rightHalf-logo'></img>
                </div>
            </div>
        </div>
    </form>
  )
}

export default LoginForm;
