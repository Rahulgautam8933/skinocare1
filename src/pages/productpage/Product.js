import React, { useState } from 'react'

import img1 from '../../img/imgswiper.png'
import Productitems from '../../componets/productitems/Productitems'
import { useNavigate } from 'react-router-dom'
import Productsidebar from '../../componets/productsidebar/Productsidebar'
import ProductSidebar2 from '../../componets/productsidebar/ProductSidebar2'
import Productsidebar3 from '../../componets/productsidebar/Productsidebar3'
const Product = () => {
    const navigator = useNavigate();
    const [show,setShow] = useState(false);
    const closebutton = ()=>{
        setShow(false);
    }
    const closebutton1 = ()=>{
        setShow1(false);
    }
    const closebutton2 = ()=>{
        setShow2(false);
    }
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);

    return (
        <>

        {show ? <Productsidebar close = {closebutton} /> : ""}
        {show1 ? <ProductSidebar2 close = { closebutton1}/> : ""}
        {show2 ? <Productsidebar3 close = { closebutton2}/> : ""}

            <div className="productmaincontainer">
                <div className="productcontainer">
                    <div className="productbox">
                        <div className="prpductswiper">
                            <img src={img1} alt="" />
                        </div>
                        <div className="productimgslider">
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                            <div className="productimgbox">
                                <img src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="productbox">
                        <h2>Gentle Cleanse Face Foam</h2>
                        <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                        <div className="productboxproduct">
                            <div className="productbox12">
                                <h3>Rs. 587 <s>Rs 587</s></h3>
                                <p>Price incl. of all taxes</p>
                                <p><i class="fa-solid fa-star ilogostar"></i><i class="fa-solid fa-star ilogostar "></i><i class="fa-solid fa-star ilogostar "></i><i class="fa-solid fa-star ilogostar "></i><i class="fa-solid fa-star ilogostar "></i></p>
                            </div>
                            <div className="productbox12">
                                <button><span>-</span> 1  <span>+</span></button>
                            </div>
                        </div>
                        <div className="productitemscontainer">
                            <button className='cardbutton' id='addcard' >Add to cart</button>
                            <button onClick={()=>navigator('/check_out')}  className='cardbutton ' id='buynow'>Buy Now</button>
                        </div>
                        <div className="productitemscontainer">

                            <div class="accordion accordianbut" id='accordianbut' >
                                <div class="accordion">
                                    <h2 class="accordion">
                                        <button onClick={()=>setShow(true)}  class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Specification
                                        </button>
                                    </h2>
                                    
                                </div>


                            </div>
                        </div>
                        <div className="productitemscontainer">

                            <div class="accordion accordianbut" id='accordianbut' >
                                <div class="accordion">
                                    <h2 class="accordion">
                                        <button onClick={()=>setShow1(true)}  id='accordianbutton1' class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                                            How to use?
                                        </button>
                                    </h2>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer" id='review'>
                            <div class="accordion accordianbut" id='accordianbut' >
                                <div class="accordion">
                                    <h2 class="accordion">
                                        <button onClick={()=>setShow2(true)}   id='accordianbutton1' class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12" aria-expanded="false" aria-controls="collapseTwo">
                                           4.8 Review(28)
                                        </button>
                                    </h2>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Productitems heading="Related Products" />
                <Productitems heading="Recently viewed Products" />

            </div>
        </>
    )
}

export default Product
