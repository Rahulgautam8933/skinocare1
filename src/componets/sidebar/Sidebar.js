import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Sidebar({sidebar, closeback}) {

  const navigator = useNavigate();
  const gotocart = ()=>{
    navigator('/check_out')
  }
  return (
    <>

    <div className={sidebar ? "sidebar" : "closesidebar"}>

    <div className="sidebarlinks">
    <div onClick={closeback}  className="sidebarclosebutton">
    <i class="fa-solid fa-xmark ilogo "></i>
    </div>

    <ul>
    <li><Link to="/">About us</Link></li>
    <li><a href="#sec3maincontainer">Our Expertise</a></li>
    <li> <a href="#sec7maincontainer">Testimonials</a> </li>
    <li> <a href="#sec6maincontainer">Skin & Hair</a> </li>
    <li  > <a href="/shop_now">Shop</a></li>
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
