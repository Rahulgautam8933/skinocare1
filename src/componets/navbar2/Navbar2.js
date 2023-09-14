import React from 'react'

import navlogo from '../../img/logo.png'

import { useNavigate } from 'react-router-dom';
const Navbar2 = ({ openSidebar }) => {

    const navigator = useNavigate();

    return (
        <>
            <div className="navbarcontainer">
                <div className="navbarboxs">
                    <div className="navbarbox">
                        <div onClick={() => navigator('/')} className="navlogoimg">

                            <img src={navlogo} alt="" />
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="navsearchbox">
                            <i class="zmdi zmdi-search"></i>
                            <input type="text" placeholder='Search for Product' />
                        </div>

                    </div>
                    <div className="navbarbox">
                        <div className="navbarbutton">
                            <div className="navbuttonback">
                                <i class="zmdi zmdi-shopping-basket"></i>
                            </div>
                            <div className="navbuttonback">
                                <i class="fa-regular fa-bell"></i>
                            </div>


                            <div className="navbarprofile">

                                <div class="accordion accordianbut" id='accordianbut' >
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

export default Navbar2
