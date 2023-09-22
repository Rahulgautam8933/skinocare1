import React from 'react'
import './Productitem.css'
import img1 from '../../img/product5.png'
import basket from '../../img/basket.png'
import { useNavigate } from 'react-router-dom'
import star from '../../img/ant-design_star-filled.svg'
const Productitem = () => {
    const navigator = useNavigate();
    return (
        <>

            <div className="productbox123">
                <div className="productimg12">
                <p><img src={star} alt="" /> <span>4.5</span></p>
                    <img src={img1} alt="" />
                </div>
                <div className="productcontent2">
                    <p>Gentle Cleanse Face
                        Foam</p>
                    <h3>Rs. 587 <s>Rs.587</s></h3>
                </div>
                <div className="productbutton12">
                    <button onClick={()=>navigator("/product")} ><span>Add to cart</span> <img src={basket} alt="" /> </button>
                </div>
            </div>
        </>
    )
}

export default Productitem
