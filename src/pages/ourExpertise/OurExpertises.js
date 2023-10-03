import React from 'react'
import './OurExpertise.css'
import bgimg from '../../img/expertgroupimg.png'
import Expertise1 from '../../img/expertiesimg1.png'
import Expertise2 from '../../img/expertiesimg2.png'
import SkinAndCareHeading from '../../componets/skinAndCareHeading/SkinAndCareHeading'

import intro from '../../img/introducing.png'
import cutingimg1 from '../../img/cutingimg1.png'
import cutingimg2 from '../../img/cutingimg2.png'
import cutingimg3 from '../../img/cutingimg3.png'
import cutingimg4 from '../../img/cutingimg4.png'

import Sec6 from '../../componets/sec6/Sec6'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OurExpertises = () => {

    const h2 = `"Meet Our Skincare & Health Experts"`
    const p = ` "Guiding You Toward Radiant Skin and Optimal Health"`

    return (
        <>
            <div className="ourExpertiseMainContainer2">
                <div className="ourExpertiseMainContainer1">
                    <div className="ourExpertiseContainer1">
                        <SkinAndCareHeading h2={h2} p={p} />
                        <div className="ourexpertiesimg1">
                            <img src={bgimg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="ourexpertiesimgcontent">
                    <div className="content">
                        <h2>Regarding skin and hair, our experts consider more than just 'care.'</h2>
                        <p>They assess your environment, recommend dietary adjustments, and select tailored solutions that perfectly align with your needs. This takes the form of a personalized regimen that seamlessly integrates data-backed diagnosis, prescribed treatments, consistent skincare/haircare, and guidance from dermatologists. <br />
                            <br />   Our comprehensive suite of services is meticulously crafted to pinpoint and address the underlying issues, delivering enduring outcomes. Furthermore, the effectiveness of these regimens is assured, as they are provided by certified skin and hair specialists endorsed by the Indian Association of Dermatologists (IADVL).
                        </p>
                    </div>
                    <div className="img">
                        <img src={Expertise1} alt="" />
                    </div>
                </div>

                <div className="ourexpertiesimgcontent" id='ourexpertiesimgcontent'>
                    <div className="img1">
                        <img src={Expertise2} alt="" />
                    </div>
                    <div className="content" id='content1'>
                        <h2>Prioritizing the process over the products.</h2>
                        <p>Skin and hair care is a journey filled with various products, yet their compatibility with individual needs and other products can vary. That's where the SkinOCare app's process-oriented strategy takes center stage.  <br /> <br />
                            When you download the app, our AI, working alongside our medical experts, identifies the most suitable products tailored to your objectives, eliminating the need for trial and error. To validate this effectiveness, we offer complimentary checkups every month, during which our experts monitor your skin and hair health diligently.
                        </p>
                    </div>
                </div>

                <div className="cutingagesec">

                    <div className="cutingsecheading">
                        <SkinAndCareHeading h2={"Cutting-Edge Tech Infrastructure Delivering Proven Skin and Hair Solutions"} />

                    </div>

                    <div className="cutingimgcards">

                        <div className="cutingimgcard">

                            <img src={cutingimg1} alt="" />
                            <p>AI-powered skin & hair analysis</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src={cutingimg2} alt="" />
                            <p>Dermatologist diagnosis & treatment</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src={cutingimg3} alt="" />
                            <p>Well-researched formulations & products</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src={cutingimg4} alt="" />
                            <p>Skin reports for tracking progress</p>

                        </div>
                    </div>



                </div>


                <div className="introducingpanel">

                    <div className="introducingpanelheading">
                        <SkinAndCareHeading h2={"Introducing the Panel of Experts at Skinocare"} p={"A team of over 40 extensively skilled and seasoned dermatologists and clinicians is here to guide and assist you throughout your treatment journey. To date, this dedicated team has successfully aided over one million individuals in achieving their desired level of skin and hair health."} />
                    </div>

                    <div className="introducingboxs">
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src={intro} alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Rajesh Sharma</h5>
                                <p>Physician and skin care expert</p>
                                <span>Treated : 10,000 SkinOCare patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">

                            <p>She is a renowned Aesthetic Dermatologist. Accomplished Chief of Dermatology, Cureskin with more than 15 years of experience in hospital academics, clinical settings, health technology and administrative duties.
                                <br /><br />
                                Skilled in Advance Aesthetic & Dermatology procedures, Personalised treatments, Medical Education, Medical Devices, Medicine and Cosmetic Skin Care & Clinical Research. MORE</p>
                        </div>


                    </div>

                    <div className="introducingboxs">
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src={intro} alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Rajesh Sharma</h5>
                                <p>Physician and skin care expert</p>
                                <span>Treated : 10,000 SkinOCare patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">

                            <p>She is a renowned Aesthetic Dermatologist. Accomplished Chief of Dermatology, Cureskin with more than 15 years of experience in hospital academics, clinical settings, health technology and administrative duties.
                                <br /><br />
                                Skilled in Advance Aesthetic & Dermatology procedures, Personalised treatments, Medical Education, Medical Devices, Medicine and Cosmetic Skin Care & Clinical Research. MORE</p>
                        </div>


                    </div>

                    <div className="introducingboxs">
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src={intro} alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Rajesh Sharma</h5>
                                <p>Physician and skin care expert</p>
                                <span>Treated : 10,000 SkinOCare patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">

                            <p>She is a renowned Aesthetic Dermatologist. Accomplished Chief of Dermatology, Cureskin with more than 15 years of experience in hospital academics, clinical settings, health technology and administrative duties.
                                <br /><br />
                                Skilled in Advance Aesthetic & Dermatology procedures, Personalised treatments, Medical Education, Medical Devices, Medicine and Cosmetic Skin Care & Clinical Research. MORE</p>
                        </div>


                    </div>


                </div>


                <div className="introducingsec6">


                    <Sec6 />
                </div>

            </div>


        </>
    )
}

export default OurExpertises
