import React from 'react'

import img1 from '../../img/product1.jpg'
import { useNavigate } from 'react-router-dom'
const Productitem2 = () => {
    const navigator = useNavigate();
    return (
        <>

            <div className="productbox123">

                <div className="productimg12">
                    <img src={img1} alt="" />
                </div>
                <div className="productcontent1">
                    <p>Gentle Cleanse Face <br />
                        Foam</p>
                    <h3>Rs. 587 <s>Rs.587</s></h3>

                    <div className="productbutton12">
                        <button onClick={()=> navigator('/product')} >Add to cart <i class="zmdi zmdi-shopping-basket"></i> </button>
                    </div>

                </div>



            </div>


        </>
    )
}

export default Productitem2
