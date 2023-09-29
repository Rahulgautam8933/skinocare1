import React from 'react'
import './OurExpertise.css'
import bgimg from '../../img/expertgroupimg.png'
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


                </div>

            </div>


        </>
    )
}

export default OurExpertises
