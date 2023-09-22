import React, { useState } from 'react'
import img1 from '../../img/product2.jpg'
import img2 from '../../img/product1.jpg'
const Cart = ({close}) => {

    const [count ,setCount] = useState(1);

    return (
        <>


        <div className="productsidebarmaincontainer">
        <div className="producsidbarboxs">
            <div className="productsidbarbox">
                <div className="closebutton">
                    <h2>Cart</h2>
                    <p onClick={close} className='closebutton' ><i class="zmdi zmdi-close"></i></p>
                </div>
            <div className="cartmaincontainer">
            <div className="cartboxs1">
                <div className="cardbox1">
                    <div className="cartimgbox">
                        <img src={img2} alt="" />
                    </div>
                    <div className="cartcontentbox">
                        <div className="cartheding">
                            <h3>Gentle Cleanse Face Foam</h3>
                            <p className='ratingsec'> <i class="fa-solid fa-star"></i>  4.5</p>
                        </div>
                        <div className="cartheding1">
                            <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                            <h2>Rs. 587 <span><s>Rs. 587</s></span></h2>
                        </div>
                        <div className="cartheding">
                        <button><span onClick={()=> count === 1 ? setCount(1 ) : setCount(count-1)}> - </span> {count} <span onClick={()=>setCount(count+1)}> + </span></button>
                        <div className="cartdeletebox"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>
                <div className="cardbox1">
                    <div className="cartimgbox">
                        <img src={img2} alt="" />
                    </div>
                    <div className="cartcontentbox">
                        <div className="cartheding">
                            <h3>Gentle Cleanse Face Foam</h3>
                            <p className='ratingsec'> <i class="fa-solid fa-star"></i>  4.5</p>
                        </div>
                        <div className="cartheding1">
                            <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                            <h2>Rs. 587 <span><s>Rs. 587</s></span></h2>
                        </div>
                        <div className="cartheding">
                        <button><span onClick={()=> count === 1 ? setCount(1 ) : setCount(count-1)}> - </span> {count} <span onClick={()=>setCount(count+1)}> + </span></button>
                        <div className="cartdeletebox"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>
                <div className="cardbox1">
                    <div className="cartimgbox">
                        <img src={img2} alt="" />
                    </div>
                    <div className="cartcontentbox">
                        <div className="cartheding">
                            <h3>Gentle Cleanse Face Foam</h3>
                            <p className='ratingsec'> <i class="fa-solid fa-star"></i>  4.5</p>
                        </div>
                        <div className="cartheding1">
                            <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                            <h2>Rs. 587 <span><s>Rs. 587</s></span></h2>
                        </div>
                        <div className="cartheding">
                        <button><span onClick={()=> count === 1 ? setCount(1 ) : setCount(count-1)}> - </span> {count} <span onClick={()=>setCount(count+1)}> + </span></button>
                        <div className="cartdeletebox"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>
                <div className="cardbox1">
                    <div className="cartimgbox">
                        <img src={img2} alt="" />
                    </div>
                    <div className="cartcontentbox">
                        <div className="cartheding">
                            <h3>Gentle Cleanse Face Foam</h3>
                            <p className='ratingsec'> <i class="fa-solid fa-star"></i>  4.5</p>
                        </div>
                        <div className="cartheding1">
                            <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                            <h2>Rs. 587 <span><s>Rs. 587</s></span></h2>
                        </div>
                        <div className="cartheding">
                        <button><span onClick={()=> count === 1 ? setCount(1 ) : setCount(count-1)}> - </span> {count} <span onClick={()=>setCount(count+1)}> + </span></button>
                        <div className="cartdeletebox"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>
                <div className="cardbox1">
                    <div className="cartimgbox">
                        <img src={img2} alt="" />
                    </div>
                    <div className="cartcontentbox">
                        <div className="cartheding">
                            <h3>Gentle Cleanse Face Foam</h3>
                            <p className='ratingsec'> <i class="fa-solid fa-star"></i>  4.5</p>
                        </div>
                        <div className="cartheding1">
                            <p>Cleanse & Exfoliate - For Normal to Dry Skin</p>
                            <h2>Rs. 587 <span><s>Rs. 587</s></span></h2>
                        </div>
                        <div className="cartheding">
                        <button><span onClick={()=> count === 1 ? setCount(1 ) : setCount(count-1)}> - </span> {count} <span onClick={()=>setCount(count+1)}> + </span></button>
                        <div className="cartdeletebox"><i class="fa-solid fa-trash"></i></div>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
            </div>
        </div>

    </div>




        </>
    )
}

export default Cart
