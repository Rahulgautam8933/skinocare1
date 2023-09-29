import React from 'react'
import './OurExpertise.css'
import bgimg from '../../img/expertgroupimg.png'
import Expertise1 from '../../img/expertiesimg1.png'
import Expertise2 from '../../img/expertiesimg2.png'
import SkinAndCareHeading from '../../componets/skinAndCareHeading/SkinAndCareHeading'
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
                            Our comprehensive suite of services is meticulously crafted to pinpoint and address the underlying issues, delivering enduring outcomes. Furthermore, the effectiveness of these regimens is assured, as they are provided by certified skin and hair specialists endorsed by the Indian Association of Dermatologists (IADVL).</p>

                    </div>

                    <div className="img">
                        <img src={Expertise1} alt="" />
                    </div>


                </div>
                <div className="ourexpertiesimgcontent">
                   
                <div className="img1">
                <img src={Expertise2} alt="" />
            </div>

                <div className="content">
                        <h2>Regarding skin and hair, our experts consider more than just 'care.'</h2>
                        <p>They assess your environment, recommend dietary adjustments, and select tailored solutions that perfectly align with your needs. This takes the form of a personalized regimen that seamlessly integrates data-backed diagnosis, prescribed treatments, consistent skincare/haircare, and guidance from dermatologists. <br />
                            Our comprehensive suite of services is meticulously crafted to pinpoint and address the underlying issues, delivering enduring outcomes. Furthermore, the effectiveness of these regimens is assured, as they are provided by certified skin and hair specialists endorsed by the Indian Association of Dermatologists (IADVL).</p>

                    </div>

                   


                </div>



            </div>


        </>
    )
}

export default OurExpertises
