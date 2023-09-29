import React from 'react'
import './OurExpertise.css'
import star from '../../img/star.svg'
import profile from '../../img/t1.png'
const OurExpertisecard = ({date,para,rating,name}) => {
    return (
        <>

            <div className="expertiseCardContainer">

                <div className="datestar">
                    <p>{date}</p>
                    <h6> <img src={star} alt="" /><span>{rating}</span></h6>

                </div>

                <div className="nameProfileDate">
                    <div className="profileName">
                        <img src={profile} alt="" />
                        <span>{name}</span>
                    </div>

                    <h5>{date}</h5>
                </div>


                <p className='cardpara'>{para}</p>




            </div>


        </>
    )
}

export default OurExpertisecard
