import React from 'react'
import './Productitem.css'
import img1 from '../../img/product1.jpg'
const Productitem = () => {
  return (
    <>

    <div className="productbox1">

    <div className="productimg1">
        <img src={img1} alt="" />
    </div>
    <div className="productcontent">
        <p>Gentle Cleanse Face
            Foam</p>
        <h3>Rs. 587 <s>Rs.587</s></h3>

        <div className="productbutton1">
            <button>Add to cart</button>
        </div>

    </div>



</div>
      
    </>
  )
}

export default Productitem
