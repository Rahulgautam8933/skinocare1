import React from 'react'
import './Signup.css'

import varificationimg from '../../img/otpvarification.svg'
const Signupvarification = () => {
    return (
        <>
            <div className="signupcontainer2">
                <div className="signupimgsec">
                    <img src={varificationimg} alt="" />
                </div>
                <div className="verifycontent">


                    <div className="verifynumberbox">

                        <div className="verifyheading">
                            <h2>OTP Verification</h2>
                        </div>

                        <div className="verifynumber">
                            <label htmlFor="">Verification code</label>
                            <div className="verifylableinput">
                                <div className="verifynumberinput">
                                    <input type="text" placeholder='0' />
                                </div>
                                <div className="verifynumberinput">
                                    <input type="text" placeholder='0' />
                                </div>
                                <div className="verifynumberinput">
                                    <input type="text" placeholder='0' />
                                </div>
                                <div className="verifynumberinput">
                                    <input type="text" placeholder='0' />
                                </div>
                                <div className="verifynumberinput">
                                    <input type="text" placeholder='0' />
                                </div>  
                            </div>
                        </div>
                        <div className="verifysigninlink">
                            <p><strong> Didn`t receive?</strong> <span> Send again</span></p>
                        </div>

                    </div>

                    <div className="verifybutton">
                        <button>Submit</button>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Signupvarification
