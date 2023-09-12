import React from 'react'
import './Sec4.css'
import doctorimg1 from '../../img/doctor1.png'
import doctorimg2 from '../../img/doctor2.png'
import doctorimg3 from '../../img/doctor3.png'
import doctorimg4 from '../../img/doctor4.png'
import doctorimg5 from '../../img/doctor5.png'
import doctorimg6 from '../../img/doctor6.png'
import Secheader from '../secheader/Secheader'
function Sec4() {
    const heading = "Ensuring specialized care from our experts.";
    const content = "After AI's supportive role, our team of over 40 experienced dermatologists designs a personalized regimen. These dermatologists are skilled in addressing mild to severe issues and offer effective care solutions for maintaining optimal skin and hair health. Currently, they provide ongoing monthly care to more than one million customers through our app."
    return (
        <>
            <div className="sec4maincontainer">

                <div className="sec4container">
                    <Secheader heading={heading} content={content} />
                    <div className="sec4doctorimgs">
                        <div className="doctorimgs">
                            <img src={doctorimg1} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg2} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg3} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg4} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg5} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg6} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg1} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg2} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg3} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg4} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg5} alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src={doctorimg6} alt="" />
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Sec4
