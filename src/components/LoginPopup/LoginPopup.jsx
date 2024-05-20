
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

export const LoginPopup = (props) => {

    const [currState, setCurrState] = useState("Login")
    console.log('====================================');
    console.log(currState);
    console.log('====================================');


  return (
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>props.setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState=== "Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" />
                <p>By continuing, is agree to the  terms of use & privacy policy.</p>
            </div>
            {currState === "Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Create Account</span></p>
            :<p>Already have an account? <span  onClick={()=> setCurrState('Login') }>Sign Up</span></p>}

            
        </form>
    </div>
  )
}
