import React from 'react'

import navlogo from '../../img/logo.png'
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
const Navbar2 = ({ openSidebar }) => {

const navigator = useNavigate();

    return (
        <>
            <div className="navbarcontainer">
                <div className="navbarboxs">
                    <div className="navbarbox">
                        <div  onClick={()=>navigator('/')} className="navlogoimg">
                       
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
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>profile name</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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

export default Navbar2
