import React from 'react'
import navlogo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
function Navbar({ openSidebar }) {

    const navigator = useNavigate();   
    const gotohome = () => {
        navigator('/')
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
                                <li>
                                    <Link to="/">About us </Link>
                                </li>
                                <li>
                                    <a href="#sec3maincontainer">Our Expertise  </a>
                                </li>
                                <li>
                                    <a href="#sec7maincontainer">Testimonials   </a>
                                </li>
                                <li>
                                    <a href="#sec6maincontainer">Skin & Hair</a>
                                </li>
                                <li>
                                    <Link to="/shop_now"> Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="contactnavbox">
                            <div className="navbarbutton">
                                <button onClick={()=>navigator('/Signup')}>Sign up</button>
                            </div>
                           

                           
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="contactnavbox">
                            <div className="navbarbutton">
                                <button onClick={()=>navigator('/contact')}   >Contact us</button>
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
