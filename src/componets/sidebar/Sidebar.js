import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

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
    <li>About us</li>
    <li>Our Expertise</li>
    <li>Testimonials</li>
    <li>Skin & Hair</li>
    <li>Shop</li>
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
