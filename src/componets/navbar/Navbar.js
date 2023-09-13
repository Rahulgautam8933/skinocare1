import React from 'react'
import navlogo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom'
function Navbar({ openSidebar }) {

    const navigator = useNavigate();

    const gotocart = () => {
        navigator('/check_out')
    }
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
                                    <a href="#">About us </a>
                                </li>
                                <li>
                                    <a href="#">Our Expertise  </a>
                                </li>
                                <li>
                                    <a href="#">Testimonials   </a>
                                </li>
                                <li>
                                    <a href="#">Skin & Hair</a>
                                </li>
                                <li>
                                    <a href="#"> Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="contactnavbox">
                            <div className="navbarbutton">
                                <button>Contact us</button>
                            </div>
                            <div className="cardbutton">
                                <span onClick={gotocart} className="navlinbox">
                                    <i class="fa-solid fa-cart-shopping navilogo "></i>
                                </span>
                            </div>

                            <div className="profilesec">

                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Profile name</option>
                                    <option value="1">Sign up</option>
                                    <option value="2">Sign in</option>
                                    <option value="2">Contact us</option>
        
                                </select>
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
