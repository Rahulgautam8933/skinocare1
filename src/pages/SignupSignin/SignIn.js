import React, { useState } from 'react'
import './Signup.css'
import signup from '../../img/signinimg.png'
import buttonlogo from '../../img/google.svg'
import buttonlog2 from '../../img/facebook.png'
import buttonlog3 from '../../img/applelogo.png'
import mail from '../../img/mail.svg'

import password from '../../img/Password.svg'

import eyeopen from '../../img/eye-open.svg'

import Signupinput from './Signupinput'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {

    const navigator = useNavigate();

    const [input, setInput] = useState(true);
    const continuebutton = (e) => {
        e.preventDefault()
        setInput(false);
    }
    const continuebuttonalert = (e) => {
        e.preventDefault()
        navigator("/signInVerify");


    }

    const gotosignup = ()=>{
        navigator('/Signup')
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }


    return (
        <>

            <div className="signupcontainer">
                <div className="signuppageimg">
                    <img src={signup} alt="signup" />
                </div>
                <div className="signupcontent">

                    <div className="formheading">
                        <h1>Sign In</h1>
                    </div>
                    <form >
                        <div className="inputs">

                            <div className="forminputs">
                                <div className="forminput">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" id='name' placeholder='email' />
                                    <span><img src={mail} alt="" /></span>

                                </div>
                                <div className="forminput">
                                    <label htmlFor="phoneEmail">Password</label>
                                    <input type="password" id='phoneEmail' placeholder="Password" />
                                    <div className="mailsvg">
                                    <img src={password} alt="" />
                                </div>
                                <div className="eyeopen">
                                <img src={eyeopen} alt="" />
                                </div>
                                </div>
                                <span className='signinwithotp' onClick={()=> navigator("/signInVerify")} >Sign In with OTP</span>
                            </div>



                            <div className="formbutton">
                                <button onClick={continuebuttonalert}>Submit</button>
                            </div>

                            <div className="forgetpassword" onClick={()=>navigator("/forgetpassword")} >
                            <p>Forgot your password?</p>
                            </div>



                        </div>


                    </form>

                    <div className="hrtag">
                        <hr class="hr-text gradient" data-content="OR" />
                        <p>or</p>
                    </div>

                    <div className="googlelogin">
                        <div className="googleloginbox">
                            <button> <img src={buttonlogo} alt="" /> <span>Sign in with Google</span> </button>
                        </div>
                        <div className="googleloginbox" id='applebutton1'>
                            <button><img src={buttonlog2} alt="" />  <span>Sign in with Facebook</span></button>
                        </div>
                        <div className="googleloginbox" id='applebutton'>
                            <button> <img src={buttonlog3} alt="" /> <span>Sign in with Apple</span></button>
                        </div>
                    </div>

                    <div className="signuplogin" onClick={gotosignup}>
                        <strong>Don`t have an account?</strong> <span>Sign up</span>
                    </div>

                </div>

            </div>

        </>
    )
}

export default SignIn
