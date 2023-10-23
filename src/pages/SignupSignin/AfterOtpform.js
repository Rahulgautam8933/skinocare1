import React from 'react'
import './Signup.css'
import female from '../../img/Layer_1.png'
import male from '../../img/Capa_1.png'
const AfterOtpform = ({ toggle }) => {
    return (
        <>
            <div className="afterotpcontainer">

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

                        <label className="imgcontents" htmlFor="flexRadioDefault2" >
                            <div className="genderimg">
                                <img src={female} alt="" />
                            </div>
                            <p>Female</p>

                        </label>

                        <div className="next-button">
                            <input type="radio" name='gender' id="flexRadioDefault2" />
                        </div>



                    </label>

                    <label className="gendercontainer" htmlFor="flexRadioDefault1">

                        <label className="imgcontents" htmlFor="flexRadioDefault1">
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

                <button onClick={() => toggle(true)}>Proceed</button>
            </div>
        </>
    )
}

export default AfterOtpform
