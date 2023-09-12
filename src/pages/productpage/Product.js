import React from 'react'
import './Product.css'
import img1 from '../../img/imgswiper.png'
import Productitems from '../../componets/productitems/Productitems'
const Product = () => {
    return (
        <>
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
                            <button className='cardbutton ' id='buynow'>Buy Now</button>
                        </div>
                        <div className="productitemscontainer">
                            <select class="form-select-1" >
                                <option selected>Specification</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="productitemscontainer">
                            <select class="form-select-1" >
                                <option selected>How to use?</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="productitemscontainer">
                            <select class="form-select-1" >
                                <option selected> <span><i class="fa-solid fa-star"></i></span>  4.8 Review(28)</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>

                 <Productitems heading = "Related Products" />
                 <Productitems heading = "Recently viewed Products" />  

            </div>
        </>
    )
}

export default Product
