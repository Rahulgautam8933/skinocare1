import React from 'react'
import './OurExpertise.css'
import SkinAndCareHeading from '../../componets/skinAndCareHeading/SkinAndCareHeading'
import OurExpertisecard from './OurExpertisecard'
import Sec6 from '../../componets/sec6/Sec6'
const OurExpertise = () => {
    const h2 = `"Skinocare Success Stories"`
    const p = ` "Real Stories, Real Results, Real People"`

    const strorydata = [
        {
            id: 0,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 1,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner2",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 2,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner3",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 3,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner4",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 4,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner5",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 5,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner5",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
        {
            id: 6,
            date: "18 jam 2022",
            rating: "4.8",
            name: "Lana Steiner5",
            para: "Like any ordinary guy, my skincare earlier was limited to only a cream. However, a year back, I started getting dark spots. It did not worry me initially, but it worsened when I tried correcting it with normal products. Thanks to the dermatologists at Cureskin and their simple skin routine solutions, now my spots have lightened a lot."

        },
    ]

    return (
        <>


            <div className="ourExpertiseMainContainer">
                <div className="ourExpertiseContainer">

                    <SkinAndCareHeading h2={h2} p={p} />

                    <div className="ourExpertiseCards">

                        {
                            strorydata.map((story) => {
                                return (
                                    <OurExpertisecard date={story.date} para={story.para} rating={story.rating} name={story.name} />
                                )
                            })
                        }

                    </div>

                    <Sec6/>
                    

                </div>
            </div>

        </>
    )
}

export default OurExpertise

