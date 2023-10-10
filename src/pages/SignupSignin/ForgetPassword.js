import React, { useState } from 'react'
import './Signup.css'

import varificationimg from '../../img/forgetpassword.png'
import mail from '../../img/mail.svg'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const navigator = useNavigate();
    const [forgetemail,setForgetemail] = useState(false);

    return (
        <>

            <div className="signupcontainer2">
                <div className="signupimgsec">
                    <img src={varificationimg} alt="" />
                </div>
                <div className="verifycontent">
                    <div className="verifynumberbox">
                        <div className="verifyheading">
                            <h2>Forget your Password</h2>
                        </div>
                        <div className="verifynumber">

                        {
                            !forgetemail ? <p>Enter your registered email to reset the password.</p>
                            : <p>If there is an account associated with this email address you  <br /> will receive a Link to reset email.</p>
                            
                        }
                           
                        </div>
                        <div className="verifysigninlink">
                            <div className="forgetemail">
                                <label htmlFor="">Email</label>
                                <div className="forgetemailinput">
                                    <input type="email" placeholder='email' />
                                </div>
                                <div className="mailsvg">
                                    <img src={mail} alt="" />
                                </div>
                            </div>
                        </div>
{
    !forgetemail ? "" : <div className="">
    <p>Didn`t receive the email? Click to resend</p>
    </div>
}

                    </div>
                    <div className="verifybutton">

                    {
                        !forgetemail ? 
                        <button onClick={()=>setForgetemail(true)} >Reset Password</button>
                        : 
                        <button onClick={()=>navigator('/signIn')} >Go back to Sign in</button>
                        
                    }

                    

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword
