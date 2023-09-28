import React from 'react'
import './Signup.css'
const Signupinput = ({ lable1, lable2, type, placeholder1,mail, placeholder2,eyeopen }) => {
    return (
        <>

            <div className="forminputs">
                <div className="forminput">
                    <label htmlFor="name">{lable1}</label>
                    <input type={type} id='name' placeholder={placeholder1} />
                    <span><img src={mail} alt="" /></span>

                    <div className="eyeopen">
                                    <img src={eyeopen} alt="" />
                                    </div>

                </div>
                <div className="forminput">
                    <label htmlFor="phoneEmail">{lable2}</label>
                    <input type={type} id='phoneEmail' placeholder={placeholder2} />
                    <span><img src={mail} alt="" /></span>

                    <div className="eyeopen">
                                    <img src={eyeopen} alt="" />
                                    </div>

                </div>
            </div>

        </>
    )
}

export default Signupinput
