import React, { useState } from 'react'
import './Signup.css'

import varificationimg from '../../img/otpvarification.svg'
import OtpInput from 'react-otp-input';

import OTPInput, { ResendOTP } from "otp-input-react";

const SignInVerification = () => {

    const [otp, setOtp] = useState('');
    const [OTP, setOTP] = useState("");






    return (
        <>

            <div className="signupcontainer2">
                <div className="signupimgsec">
                    <img src={varificationimg} alt="" />
                </div>
                <div className="verifycontent">


                    <div className="verifynumberbox">

                        <div className="verifyheading">
                            <h2>Sign In</h2>
                        </div>

                        <div className="verifynumber">
                            <label htmlFor="">Verification code</label>


                            <div className="verifylableinput12">
                                <OtpInput className="inputotp"
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={5}
                                    renderInput={(props) => <input  {...props} placeholder="0"  />}
                                    
                                />





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

export default SignInVerification
