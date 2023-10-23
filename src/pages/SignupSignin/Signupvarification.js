import React, { useState } from 'react'
import './Signup.css'

import female from '../../img/Layer_1.png'
import male from '../../img/Capa_1.png'
import vector from '../../img/Vector.png'
import vector12 from '../../img/Layer_12.png'
import varificationimg from '../../img/otpvarification.svg'
import OtpInput from 'react-otp-input';
import AfterOtp from './AfterOtp';
import AfterOtpform from './AfterOtpform'
import GetLocation from './GetLocation'
const Signupvarification = () => {
    const [otp, setOtp] = useState('');
    const [afterOtp, setAfterOtp] = useState(false);
    const [afterOtp2, setAfterOtp2] = useState(false);
    const [afterlocation, setafterlocation] = useState(false);


    return (
        <>
            <div className="signupcontainer2">
                <div className="signupimgsec">
                    <img src={varificationimg} alt="" />
                </div>
                <div className="verifycontent">


                    {

                        !afterOtp ? <div className="verifynumberbox">

                            <div className="verifyheading">
                                <h2>OTP Verification</h2>
                            </div>

                            <div className="verifynumber">
                                <label htmlFor="">Verification code</label>

                                <div className="verifylableinput12">
                                    <OtpInput className="inputotp"
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={5}
                                        renderInput={(props) => <input  {...props} placeholder="0" />}

                                    />
                                </div>
                            </div>
                            <div className="verifysigninlink">
                                <p><strong> Didn`t receive?</strong> <span> Send again</span></p>
                            </div>

                        </div> :

                            !afterOtp2 ? <AfterOtpform toggle={setAfterOtp2} /> :
                                !afterlocation ? <GetLocation toggle={setafterlocation} /> :
                                    <div className="afterlocationcontainer">

                                        <h5>But how my city affects my skin and hair?</h5>

                                        <p>You area’s climate can be a major factor behind your skin or hair concerns.</p>
                                        <div className="afterlocationboxs">
                                            <div className="afterlocationboximg">
                                                <img src={vector12} alt="" />
                                            </div>
                                            <p>Bangalore’s hard water can cause heavy hair fall</p>

                                        </div>
                                        <div className="afterlocationboxs">
                                            <div className="afterlocationboximg">
                                                <img src={vector} alt="" />
                                            </div>
                                            <p>Delhi’s pollution is a major factor behind pigmentation</p>

                                        </div>
                                        <div className="afterlocationboxs">
                                            <div className="afterlocationboximg">
                                                <img src={vector12} alt="" />
                                            </div>
                                            <p>Delhi’s pollution is a major factor behind pigmentation</p>
                                            <div className="afterlocationboximg">
                                                <img src={vector} alt="" />
                                            </div>
                                        </div>

                                    </div>

                    }


                    {
                        !afterOtp ? <div className="verifybutton">
                            <button onClick={() => setAfterOtp(true)} >Submit</button>
                        </div> : ""
                    }




                </div>

            </div >
        </>
    )
}

export default Signupvarification
