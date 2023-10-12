import React, { useState } from 'react'

import navlogo from '../../img/logo.png'

import { useNavigate } from 'react-router-dom';

import Cart from '../cart/Cart';
const Navbar2 = ({ openSidebar }) => {

    const navigator = useNavigate();
    const [show3, setShow3] = useState(false);
    const closebutton3 = () => {
        setShow3(false);
    }

    const signup = () => {
        navigator('/Signup');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }
    const signIn = () => {
        navigator('/signIn');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>

            {show3 ? <Cart close={closebutton3} /> : ""}


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
                            <div onClick={() => setShow3(true)} className="navbuttonback">
                                <i class="zmdi zmdi-shopping-basket"></i>
                            </div>
                            <div className="navbuttonback">
                                <i class="fa-regular fa-bell"></i>
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
                                                <p onClick={signup} >Sign up </p>
                                                <p onClick={signIn}>Sign in</p>
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
