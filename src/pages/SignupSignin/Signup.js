import React, { useState } from 'react'
import './Signup.css'
import signup from '../../img/signup.svg'
import buttonlogo from '../../img/google.svg'
import buttonlog2 from '../../img/facebook.png'
import buttonlog3 from '../../img/applelogo.png'

import mail from '../../img/mail.svg'

import password from '../../img/Password.svg'

import eyeopen from '../../img/eye-open.svg'

import Signupinput from './Signupinput'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigator = useNavigate();

    const [input, setInput] = useState(true);
    const continuebutton = (e)=>{
        e.preventDefault()
        setInput(false);
    }
    const continuebuttonalert = (e)=>{
        e.preventDefault()
        navigator("/verify");
        document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


    }

    const gotosignin = ()=>{
        navigator('/signIn');
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
                        <h1>Sign up</h1>
                    </div>
                    <form >
                        <div className="inputs">

                            {
                                input ?<Signupinput lable1 = "Name" lable2 = "Phone/Email" type = "text" placeholder1 = "Name" placeholder2 = " Number/Email" mail = {mail}  />
                                 : <Signupinput lable1 = "Password" lable2 = "Confirm Password" type = "password" placeholder1 = "Password" placeholder2 = "Confirm Password" eyeopen = {eyeopen} mail = {password}  />
                            }

                            {

                                input ?   <div className="formbutton">
                                <button onClick={continuebutton}>Continue</button>
                            </div>  :   <div className="formbutton">
                            <button onClick={continuebuttonalert}>Continue</button>
                        </div>
                            }
                          

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

                    <div className="signuplogin"  onClick={gotosignin}>
                        <strong>Already have an account?</strong> <span>SingIn</span>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Signup
