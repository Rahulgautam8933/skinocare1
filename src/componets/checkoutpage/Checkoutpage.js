import React from 'react'

const Checkoutpage = () => {
    return (
        <>

            <div className="chaeckoutpagecontainer">

                <div className="checkoutpageboxs">
                    <div className="checkoutpagebox">
                        <div className="checkoutpageboxheading">
                            <h3>Total 6 Products</h3>
                            <h3>Edit</h3>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Gentle Cleanse Face Foam</p>
                            <p>Rs. 580  <span>Rs 680</span></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 2</p>
                            <p>Rs. 556  <span>Rs 680</span></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 3</p>
                            <p>Rs. 491  <span>Rs 680</span></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 4</p>
                            <p>Rs. 126  <span>Rs 880</span></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 5</p>
                            <p>Rs. 654  <span>Rs 880</span></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 6</p>
                            <p>Rs. 782  <span>Rs 880</span></p>
                        </div>
                    </div>
                    <div className="checkoutpagebox">
                        <div className="checkboxsigninbutton">
                            <p>Don`t Have an account? <span>Log in</span></p>

                        </div>


                        <div className="checkoutform">

                            <select className='selectform'>
                                <option selected>Contact details</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="checkoutform">

                            <select className='selectform'>
                                <option selected>Shipping address</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="checkoutform">

                            <h4>Order summary</h4>

                            <div className="checkoutpagebase">
                                <p>Products price</p>
                                <p><strong>Rs. 782  </strong></p>
                            </div>
                            <div className="checkoutpagebase">
                                <p>Delivery fee</p>
                                <p><strong>Rs. 782  </strong></p>
                            </div>
                        </div>
                        <div className="checkoutform1">

                            <div className="checkoutpagebase">
                                <p><strong>Subtotal</strong></p>
                                <p><strong>Rs. 782  </strong></p>
                            </div>
                            <div className="checkoutpagebase">
                                <p>Total weight</p>
                                <p>800gm  </p>
                            </div>
                        </div>
                        <div className="checkoutform12">

                           <p>Coupon code</p>
                           <div className="applycupan">
                           <input type="text"  placeholder=' Enter here' />
                           <span>Apply</span>
                           
                           </div>
                           <p>You can only use one discount code per order</p>



                        </div>
                        <div className="checkoutform123">

                          <button>Proseed to pay</button>

                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Checkoutpage
