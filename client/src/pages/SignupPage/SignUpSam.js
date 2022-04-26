import React, {useState} from 'react';
import axios from 'axios';

function RegisterForm() {
    const[details, setDetails] = useState({email: "", password: "", username: "", fullName: "", confirmPassword: ""});
   
    const submitHandler = e => {
        e.preventDefault();
        if(details.password == details.confirmPassword){
            axios.post('http://localhost:3000/app/register', details)
        } else{
            console.log("Something went wrong");
        }

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
                            <p className='intro-container-p'>Create an account to become a part of the GoGreen community!</p>
                            <div className='login-container'>
                                <div id="fullNameBox" onMouseOver={() => onChangeLeftBorder("fullNameBox")} onMouseOut={() => offChangeLeftBorder("fullNameBox")} className ="input-box">
                                    <label htmlFor='fullName' style={{display: 'block'}}>Full Name</label>
                                    <input autoComplete='off' type="name" name="fullName" id="fullName" onChange={e => setDetails({...details, fullName: e.target.value})} value={details.fullName}/> 
                                </div>
                                <div id="usernameBox" onMouseOver={() => onChangeLeftBorder("usernameBox")} onMouseOut={() => offChangeLeftBorder("usernameBox")} className ="input-box">
                                    <label htmlFor='username' style={{display: 'block'}}>Username</label>
                                    <input autoComplete='off' type="name" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/> 
                                </div>
                                <div id="emailBox" onMouseOver={() => onChangeLeftBorder("emailBox")} onMouseOut={() => offChangeLeftBorder("emailBox")} className ="input-box">
                                    <label htmlFor='email' style={{display: 'block'}}>Email Address</label>
                                    <input autoComplete='off' type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/> 
                                </div>
                                <div id="passwordBox" onMouseOver={() => onChangeLeftBorder("passwordBox")} onMouseOut={() => offChangeLeftBorder("passwordBox")} className ="input-box">
                                    <label htmlFor='email' style={{display: 'block'}}>Password</label>
                                    <input autoComplete='off' type="password" name="password" className ="input" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                                </div>
                                <div id="confirmPasswordBox" onMouseOver={() => onChangeLeftBorder("confirmPasswordBox")} onMouseOut={() => offChangeLeftBorder("confirmPasswordBox")} className ="input-box">
                                    <label htmlFor='confirmPassword' style={{display: 'block'}}>Confirm Password</label>
                                    <input autoComplete='off' type="password" name="confirmPassword" id="confirmPassword" onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}/> 
                                </div>
                            </div>
                            <div className ='option-container'>
                                <div className="form-check" style={{display:'inline-block', float:'left', color:'black'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="agreement"/>
                                    <label style={{paddingLeft:"10px"}} className ="form-check-label" id="rememberMe"> Privacy Terms Agreement</label>
                                </div>
                                <div className="form-check" style={{display:'inline-block', float:'right'}}>
                                    <a href='/login' style={{color: 'black', textDecoration: 'none'}}>Already have an account?</a>
                                </div>
                            </div>
                            <div className ="buttons-container">
                                <button style={{display: "inline-block", marginRight: "10px", backgroundColor:"#649B4D", boxShadow:"#649B4D"}} type="submit" className ="btn btn-success">Join now</button>
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

export default RegisterForm;
