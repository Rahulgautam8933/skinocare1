import React from 'react'
import './ContactUs.css'
import location from '../../img/octicon_location-16.svg'
import phone from '../../img/ph_phone.svg'
import mail from '../../img/ic_outline-mail.svg'
import Sec6 from '../../componets/sec6/Sec6'
const ContactUs = () => {
    return (
        <>
            <div className="contactcontainers">

                <div className="contactbox">

                    <div className="contactheading">
                        <h1> Contact Us</h1>
                    </div>

                    <div className="contactmidcontent">
                        <p> <img src={location} alt="" /> Address</p>
                        <p> <img src={phone} alt="" />  Mobile</p>
                        <p> <img src={mail} alt="" />Email</p>
                    </div>

                    <div className="contactdetails">
                        <p>Over <span>5000+ Customers</span> <br /> have benefited from us</p>
                    </div>

                </div>

                <div className="contactbox">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14260.05821611967!2d81.02024254999998!3d26.8524467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695899263188!5m2!1sen!2sin" width="600" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            <Sec6 />
        </>
    )
}

export default ContactUs
