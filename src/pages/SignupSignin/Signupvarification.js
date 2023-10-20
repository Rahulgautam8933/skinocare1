import React, { useState } from 'react'
import './Signup.css'

import female from '../../img/Layer_1.png'
import male from '../../img/Capa_1.png'

import varificationimg from '../../img/otpvarification.svg'
import OtpInput from 'react-otp-input';
import AfterOtp from './AfterOtp';
const Signupvarification = () => {
    const [otp, setOtp] = useState('');
    const [afterOtp, setAfterOtp] = useState(false);
   
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

                        </div> : <div className="afterotpcontainer">

                            <div className="afterotpunputbox">

                                <div><label htmlFor="name">Full Name</label> </div>
                                <input type="text" placeholder='Enter here' />
                            </div>
                            <div className="afterotpunputbox">

                                <div><label htmlFor="age">Age</label> </div>
                                <input type="numbert" placeholder='Enter here' />


                            </div>
                            <div className="afterotpunputbox">

                                <div><label htmlFor="email">Email</label> </div>
                                <input type="email" placeholder='Enter here' />


                            </div>
                            <div className="afterotpunputbox">

                                <div><label htmlFor="gender">Choose your Gender</label> </div>


                                <label className="gendercontainer" htmlFor="flexRadioDefault2">

                                    <label className="imgcontents"  htmlFor="flexRadioDefault2" >
                                        <div className="genderimg">
                                            <img src={female} alt="" />
                                        </div>
                                        <p>Female</p>

                                    </label>

                                    <div className="next-button">
                                        <input type="radio" name='gender' id="flexRadioDefault2" />
                                    </div>



                                </label>

                                <label className="gendercontainer"  htmlFor="flexRadioDefault1">

                                    <label className="imgcontents"  htmlFor="flexRadioDefault1">
                                        <div className="genderimg">
                                            <img src={male} alt="" />
                                        </div>
                                        <p>Male</p>
                                       
                                    </label>

                                    <div className="next-button">
                                        <input type="radio" name='gender' id='flexRadioDefault1' />
                                    </div>



                                </label>






                            </div>

                            <button>Proceed</button>
                        </div>
                    }


                    {
                        !afterOtp ?   <div className="verifybutton">
                        <button onClick={()=>setAfterOtp(true)} >Submit</button>
                    </div> : "" 
                 }

                   


                </div>

            </div>
        </>
    )
}

export default Signupvarification
