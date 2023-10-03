import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Sidebar({sidebar, closeback}) {

  const navigator = useNavigate();
  const gotocart = ()=>{
    navigator('/check_out')
  }
  const up = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
  
  return (
    <>

    <div className={sidebar ? "sidebar" : "closesidebar"}>

    <div className="sidebarlinks">
    <div onClick={closeback}  className="sidebarclosebutton">
    <i class="fa-solid fa-xmark ilogo "></i>
    </div>

    <ul>
    <li onClick={up} ><Link to="/aboutUs">About us</Link></li>
    <li onClick={up} ><Link to="/ourExpertise">Our Expertise</Link></li>
    <li onClick={up} > <a href="#sec7maincontainer">Testimonials</a> </li>
    <li onClick={up} ><Link to="/skinAndCare">Skin & Hair</Link> </li>
    <li onClick={up} ><Link to="/shop_now">Shop</Link></li>
    <li onClick={up} ><Link to="/Signup">Sign up</Link></li>
    </ul>


    </div>

    <div className="sidebarcardlink">
    <span  onClick={gotocart}  ><i class="fa-solid fa-cart-shopping  "></i></span>
    <i class="fa-regular fa-bell sidebarcard"></i>
    </div>

  </div>


      
    </>
  )
}

export default Sidebar
