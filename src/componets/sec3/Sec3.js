import React from 'react'
import './Sec3.css'
import Secheader from '../secheader/Secheader';
function Sec3() {
    const heading = "Why choose us";
    const content = "Choose Us for Personalized Care and Transformational Results";
    return (
        <>
            <div className="sec3maincontainer">

                <div className="sec3container">

                    <Secheader heading={heading} content={content} />
                    <div className="sec3midboxcontainer">

                        <div className="sec3midboxs">
                            <div className="sec3midbox">
                                <h3>Comprehensive Care</h3>
                                <p>"We consider factors like product suitability,
                                    mental well-being, nutrition, and environmental
                                    conditions to ensure a comprehensive
                                    approach to your skin and hair health."
                                </p>
                                <p id='absolutediv'>01</p>

                            </div>

                            <div className="sec3midbox">
                                <h3>Continuous Monitoring</h3>
                                <p>"Our personal tracking system monitors your
                                    progress, ensuring you make positive strides
                                    toward your skin and hair health goals."</p>
                                <p id='absolutediv1'>04</p>

                            </div>


                        </div>

                    </div>



                    <div className="sec3midboxs">
                        <div className="sec3midbox">
                            <h3>Personalized Expertise</h3>
                            <p>"Access a personal dermatologist who
                                customizes your care for optimal results."
                            </p>
                            <p id='absolutediv'>02</p>

                        </div>

                        <div className="sec3midbox">
                            <h3>Data-Driven Insights</h3>
                            <p>"We use AI and a vast database of previous
                                cases for accurate and effective insights."</p>
                            <p id='absolutediv1'>05</p>

                        </div>


                    </div>


                    <div className="sec3midboxcontainer">

                        <div className="sec3midboxs">
                            <div className="sec3midbox">
                                <h3>Customized Regimen</h3>
                                <p>"We craft a tailored regimen to meet your
                                    unique skin and hair goals and concerns."
                                </p>
                                <p id='absolutediv'>03</p>

                            </div>

                            <div className="sec3midbox">
                                <h3>Simplified Care</h3>
                                <p>"We simplify skin and hair care with a
                                    dedicated dermatologist, tailored regimen, and
                                    tracking system for an easy, hassle-free
                                    journey to healthier skin and hair."</p>
                                <p id='absolutediv1'>06</p>

                            </div>


                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Sec3
