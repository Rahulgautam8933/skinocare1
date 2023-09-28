import React, { useState } from 'react'
import './Signup.css'

import varificationimg from '../../img/forgetpassword.png'
import password from '../../img/Password.svg'
import eyeopen from '../../img/eye-open.svg'
import { useNavigate } from 'react-router-dom'

const ForgetEmailLink = () => {

    const navigator = useNavigate();
    const [forgetemail, setForgetemail] = useState(false);
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


                            <p>If there is an account associated with this email address you  <br /> will receive a Link to reset email.</p>



                        </div>
                        <div className="verifysigninlink">
                            <div className="resetemaillink">
                                <div className="forgetemail">
                                    <label htmlFor="">Password</label>
                                    <div className="forgetemailinput">
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <div className="mailsvg">
                                        <img src={password} alt="" />
                                    </div>
                                    <div className="eyeopen">
                                    <img src={eyeopen} alt="" />
                                    </div>
                                </div>
                                <div className="forgetemail">
                                    <label htmlFor="">Confirm Password</label>
                                    <div className="forgetemailinput">
                                        <input type="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className="mailsvg">
                                        <img src={password} alt="" />
                                    </div>
                                    <div className="eyeopen">
                                    <img src={eyeopen} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="verifybutton">


                        <button onClick={() => setForgetemail(true)} >Reset Password</button>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetEmailLink
