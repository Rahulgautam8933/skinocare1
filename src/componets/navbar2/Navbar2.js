import React from 'react'
import './Navbar2.css'
import navlogo from '../../img/logo.png'
import Accordion from 'react-bootstrap/Accordion';
const Navbar2 = ({ openSidebar }) => {

    

    return (
        <>


            <div className="navbarcontainer">

                <div className="navbarboxs">
                    <div className="navbarbox">
                        <div  className="navlogoimg">
                            <img src={navlogo} alt="" />
                        </div>

                    </div>

                    <div className="navbarbox">

                        <div className="navbarbutton">
                            <i class="fa-regular fa-bell"></i>

                            <div className="navbarprofile">

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
