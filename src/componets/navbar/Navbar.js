import React from 'react'
import navlogo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
function Navbar({ openSidebar }) {

    const navigator = useNavigate();   
    const gotohome = () => {
        navigator('/');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
const up = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
const contact = ()=>{
   navigator('/contact');
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

    return (
        <>
            <div className="navbarcontainer">
                <div className="navbarboxs">
                    <div className="navbarbox">
                        <div onClick={gotohome} className="navlogoimg">
                            <img src={navlogo} alt="" />
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="navbarlinks">
                            <ul>
                                <li onClick={up}>
                                    <Link to="/aboutUs">About us </Link>
                                </li>
                                <li onClick={up} >
                                    <Link to="/ourExpertise">Our Expertise  </Link>
                                </li>
                                <li onClick={up} >
                                    <a href="#sec7maincontainer">Testimonials   </a>
                                </li>
                                <li onClick={up} >
                                    <Link to="/skinAndCare">Skin & Hair</Link>
                                </li>
                                <li onClick={up} >
                                    <Link to="/shop_now"> Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className="navbarbox">
                        <div className="contactnavbox">
                            <div className="navbarbutton">
                                <button onClick={contact}   >Contact us</button>
                            </div>
                           

                           
                        </div>
                    </div>
                    <div className="navbarbox1">
                        <div onClick={openSidebar} className="navmenubar">
                            <i class="fa-solid fa-bars menulogo"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
