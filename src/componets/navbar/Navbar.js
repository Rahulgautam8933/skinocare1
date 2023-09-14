import React from 'react'
import navlogo from '../../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
function Navbar({ openSidebar }) {

    const navigator = useNavigate();

    const gotocart = () => {
        navigator('/cart')
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
                                <button>Contact us</button>
                            </div>
                            <div className="cardbutton1">
                                <span onClick={gotocart} className="navlinbox">
                                    <i class="fa-solid fa-cart-shopping navilogo "></i>
                                </span>
                            </div>

                            <div className="profilesec">
                                <div class="accordion accordianbut" id='accordianbut1' >
                                <div class="accordion">
                                    <h2 class="accordion">
                                        <button id='accordianbutton12' class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123" aria-expanded="false" aria-controls="collapseTwo">
                                      <div className="navprofileimgbox">
                                      <i class="fa-regular fa-user"></i>
                                      </div>  Siddartha
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body profilebox1">
                                        <p><i class="fa-regular fa-user"></i> </p>  
                                        <p>Sign up </p>  
                                        <p>Sign in</p>  
                                        </div>
                                    </div>
                                </div>
                            </div>

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
