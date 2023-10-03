import React from 'react'
import SkinAndCareHeading from '../../componets/skinAndCareHeading/SkinAndCareHeading'
import './AboutUs.css'
import ourStory from '../../img/ourStory.png'
import vector from '../../img/Vector 37.png'
import linkedin from '../../img/in.png'
import improveskills from '../../img/improveskills.png'
import Sec6 from '../../componets/sec6/Sec6'
const AboutUs = () => {
    const h2 = `"Using straightforward technology to tackle the intricacies of skin and hair."`
    const p = `"In 2017, accessing a dermatologist's expertise for everyday skin and hair care was a challenge we recognized. This led us to harness the power of AI to provide continuous dermatologist care through the Cureskin app, making expert care accessible."`
    return (
        <>
            <div className="aboutUsContainer">

                <div className="AboutUsHeading">
                    <SkinAndCareHeading h2={h2} p={p} />
                </div>

                <div className="improvingskils">

                    <div className="improvingskillbox">

                        <div className="improvingskillboxContainer">

                            <div className="improvingskillboxheding">
                                <h2>"Improving skin and hair health on a daily basis."</h2>
                                <p>"We recognize the influence of incorrect products, mental well-being, nutrition, and environmental elements on your skin and hair. That's why we meticulously analyze your photos, ask pertinent questions, and take into account these factors to curate a personalized kit aligned with your skin and hair objectives."</p>
                            </div>
                            <h6>We simplify skin & hair care with 3 essential personalizations</h6>

                            <div className="improveskillpoint">
                                <p>A personal dermatologist assigned to you</p>
                                <p>A personal regimen based on your skin & hair needs</p>
                                <p>A personal tracking system to monitor your skin & hair progress</p>

                            </div>
                        </div>


                    </div>

                    <div className="improvingskillbox">

                        <div className="improvingskillimgbox">

                            <img src={improveskills} alt="" />
                        </div>



                    </div>

                </div>

                <div className="improvestory">

                    <div className="ourStorybox">
                        <div className="ourstoryheading">

                            <SkinAndCareHeading h2={"Our Story"} />

                            <div className="para">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique quam adipisci? </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, mollitia! Dolorem beatae libero dignissimos accusantium vel temporibus ipsa autem mollitia. </p>
                                <p>Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ad. sit amet consectetur adipisicing elit. Sed ipsum </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum Lorem ipsum dolor sit. </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam molestias dolore est nesciunt commodi atque maxime praesentium at. Consectetur, vel illum. </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum </p>

                            </div>
                        </div>

                    </div>


                    <div className="ourStorybox " id='ourStorybox' >
                        <div className="ourstoryimg">
                            <img src={ourStory} alt="" />

                        </div>

                    </div>





                </div>


                <SkinAndCareHeading h2={" Milestones in the journey so far"}/>

                <div className="milestonesContainer">

                
                    <img src={vector} alt="" />

                    <p id='p2022' ><span>Got funding of $5M, introduced hair AI and crossed 10 Lakh customers</span> <h2>2022</h2> </p>
                    <p id='p2021'><span>Expanded SKU list and entered hair category</span> <h2>2021</h2> </p>
                    <p id='p2020'><span>Launched 1st private label product and crossed 1 Lakh customers</span> <h2>2020</h2> </p>
                    <p id='p2019'><span>Formed in-house panel of dermatologists and got first 1000 customers</span> <h2>2019</h2> </p>
                    <p id='p2018'><span>Launched AI engine to assist doctors in prescribing treatments for skin conditions</span> <h2>2018</h2> </p>
                    <p id='p2017'><span>Launched SkinoCare mobile application for diagnosis of skin conditions through AI</span> <h2>2017</h2> </p>

                    

                </div>


                <div className="aboutUsPillars">

                    <div className="pillarsheading">
                        <SkinAndCareHeading h2={`Pillar behind the pursuit of ‘skin health’`} />
                    </div>

                    <div className="pilarscards">
                        <div className="pilarcard">
                            <div className="pilarimgcontent">
                                <img src={ourStory} alt="" />
                                <div className="info" id='info'>
                                    <h6>Kiran Joshy</h6>
                                    <p>Co-founder & CEO</p>
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>

                            <div className="pilarpara">
                                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae consequuntur saepe. ipsum dolor sit, amet consectetur adipisicing elit. Et quo veritatis illum ex, aspernatur doloribus cumque. A suscipit laboriosam omnis.</p>
                            </div>

                        </div>

                        <div className="pilarcard">
                            <div className="pilarimgcontent">
                                <img src={ourStory} alt="" />
                                <div className="info" id='info'>
                                    <h6>Kiran Joshy</h6>
                                    <p>Co-founder & CEO</p>
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>

                            <div className="pilarpara">
                                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae consequuntur saepe. ipsum dolor sit, amet consectetur adipisicing elit. Et quo veritatis illum ex, aspernatur doloribus cumque. A suscipit laboriosam omnis.</p>
                            </div>
                        </div>
                        <div className="pilarcard">
                            <div className="pilarimgcontent">
                                <img src={ourStory} alt="" />
                                <div className="info" id='info'>
                                    <h6>Kiran Joshy</h6>
                                    <p>Co-founder & CEO</p>
                                    <img src={linkedin} alt="" />


                                </div>
                            </div>

                            <div className="pilarpara">
                                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae consequuntur saepe. ipsum dolor sit, amet consectetur adipisicing elit. Et quo veritatis illum ex, aspernatur doloribus cumque. A suscipit laboriosam omnis.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="aboutsec6">
                    <Sec6 />
                </div>
            </div>
        </>
    )
}

export default AboutUs
