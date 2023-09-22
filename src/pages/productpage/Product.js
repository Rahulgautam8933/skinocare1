import React, { useState } from 'react'
import './Product.css'
import img1 from '../../img/imgswiper.png'
import img2 from '../../img/product3.jpg'
import Productitems from '../../componets/productitems/Productitems'
import { useNavigate } from 'react-router-dom'
import Productsidebar from '../../componets/productsidebar/Productsidebar'
import ProductSidebar2 from '../../componets/productsidebar/ProductSidebar2'
import Productsidebar3 from '../../componets/productsidebar/Productsidebar3'
import Splide from '@splidejs/splide'
import basket from '../../img/basket.png'
import buynow from '../../img/Buy Now.svg'
import Productslider from '../../componets/productimgslider/Productslider'
import Cart from '../../componets/cart/Cart'
const Product = () => {
    const navigator = useNavigate();
    const [show, setShow] = useState(false);
    const closebutton = () => {
        setShow(false);
    }
    const closebutton1 = () => {
        setShow1(false);
    }
    const closebutton2 = () => {
        setShow2(false);
    }
    const closebutton3 = () => {
        setShow3(false);
    }
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);




    return (
        <>

            {show ? <Productsidebar close={closebutton} /> : ""}
            {show1 ? <ProductSidebar2 close={closebutton1} /> : ""}
            {show2 ? <Productsidebar3 close={closebutton2} /> : ""}
            {show3 ? <Cart close={closebutton3} /> : ""}

            <div className="productmaincontainer">
                <div className="productcontainer">
                    <div className="productbox">

                          <div className="procductimgslider">
                            <Productslider />
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
                            <button onClick={()=>setShow3(true)} className='cardbutton' id='addcard' >Add to cart <img src={basket} alt="" /></button>
                            <button onClick={() => navigator('/check_out')} className='cardbutton ' id='buynow'>Buy Now <img src={buynow} alt="" /></button>
                                         </div>
                        <div className="productitemscontainer">
                            <div class="accordion accordianbut" id='accordianbut' >
                                <div class="accordion">
                                    <h2 class="accordion">
                                        <button onClick={() => setShow(true)} class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                        <button onClick={() => setShow1(true)} id='accordianbutton1' class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
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
                                        <button onClick={() => setShow2(true)} id='accordianbutton1' class="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12" aria-expanded="false" aria-controls="collapseTwo">
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
