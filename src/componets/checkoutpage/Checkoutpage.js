import React from 'react'

import './Checkoutpage.css'
import { useNavigate } from 'react-router-dom'
const Checkoutpage = () => {

    const navigator = useNavigate();
    const gotohistory = () => {
        navigator("/history");
    }
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
                            <p><strong>Rs. 580</strong>  <s>Rs 680</s></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 2</p>
                            <p><strong>Rs. 556 </strong> <s>Rs 680</s></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 3</p>
                            <p><strong>Rs. 491 </strong> <s>Rs 680</s></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 4</p>
                            <p><strong>Rs. 126</strong>  <s>Rs 880</s></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 5</p>
                            <p><strong>Rs. 654 </strong> <s>Rs 880</s></p>
                        </div>
                        <div className="checkoutpagebase">
                            <p>Product 6</p>
                            <p><strong>Rs. 782 </strong> <s>Rs 880</s></p>
                        </div>
                    </div>
                    <div className="checkoutpagebox">
                        <div className="checkboxsigninbutton">
                            <p>Don`t Have an account? <span>Log in</span></p>

                        </div>
                        <div className="checkoutform">
                            <div className="accordion accordianbut" id='accordianbut127' >
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123456" aria-expanded="false" aria-controls="collapseTwo">
                                            Contact details
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123456" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <form class="row g-3">
                                                <div class="col-md-12">
                                                    <label for="inputEmail4" class="form-label">Full Name</label>
                                                    <input type="text" class="form-control" id="inputEmail4" />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="inputPassword4" class="form-label">Phone Number</label>
                                                    <input type="number" class="form-control" id="inputPassword4" />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="inputPassword4" class="form-label">Alternative Phone Number</label>
                                                    <input type="number" class="form-control" id="inputPassword4" />
                                                </div>
                                                <div class="col-md-12">
                                                    <label for="inputPassword4" class="form-label">Email</label>
                                                    <input type="email" class="form-control" id="inputPassword4" />
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="checkoutform">
                            <div className="accordion accordianbut" id='accordianbut127' >
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1234567" aria-expanded="false" aria-controls="collapseTwo1234567">
                                            Shipping Address
                                        </button>
                                    </h2>
                                    <div id="collapseTwo1234567" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <form class="row g-3">
                                                <div class="col-md-6">
                                                    <label for="inputState" class="form-label">Country</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputState" class="form-label">State</label>
                                                    <select id="inputState" class="form-select">
                                                        <option className='select1' selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputState" class="form-label">District</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputState" class="form-label">Pincode</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputState" class="form-label">City</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputState" class="form-label">Area</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputState" class="form-label">Street name/Number</label>
                                                    <select id="inputState" class="form-select">
                                                        <option selected>Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputState" class="form-label">Door no</label>
                                                    <select id="inputState" class="form-select" placeholder='enter' >
                                                        <option selected> Enter</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>



                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label class="form-check-label" for="gridCheck">
                                                            Check me out
                                                        </label>
                                                    </div>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="checkoutform">
                            <div className="accordion accordianbut" id='accordianbut127' >
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123456712" aria-expanded="false" aria-controls="collapseTwo123456712">
                                            Shipping Method
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123456712" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                        <div className="paymentMethod">
                                        <div className="checkboxs">
                                            <div  className='check'>
                                                <input type="checkbox" value="" />

                                            </div>
                                            <div className="para">
                                            <h6>Free Shipping (Cash on Delivery)</h6>
                                            <p>This shipping option is eligible for Cash on Delivery.</p>

                                        </div>
                                        </div>
                                       
                                        <div className="free">
                                            <p>free</p>
                                        </div>
                                    </div>

                                    <div className="paymentMethod">
                                        <div className="checkboxs">
                                            <div className='check' >
                                                <input type="checkbox" value="" />

                                            </div>
                                            <div className="para">
                                            <h6>Standard</h6>
                                           
                                        </div>
                                        </div>
                                       
                                        <div className="free">
                                            <p>free</p>
                                        </div>
                                    </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="checkoutform">
                            <div className="accordion accordianbut" id='accordianbut127' >
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123456709" aria-expanded="false" aria-controls="collapseTwo123456709">
                                            Payment Method
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123456709" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                        <div className="paymentMethod">
                                        <div className="checkboxs">
                                            <div className='check' >
                                                <input type="checkbox" value="" />

                                            </div>
                                            <div className="para">
                                           
                                            <p>Razorpay Secure (UPI, Cards, Wallets, NetBanking)</p>

                                        </div>
                                        </div>
                                       
                                        <div className="free">
                                            <p>free</p>
                                        </div>
                                    </div>

                                    <div className="paymentMethod">
                                        <div className="checkboxs">
                                            <div className='check' >
                                                <input type="checkbox" value="" />

                                            </div>
                                            <div className="para">
                                            <p>Cash on Delivery (COD)</p>
                                           
                                        </div>
                                        </div>
                                       
                                        <div className="free">
                                            <p>free</p>
                                        </div>
                                    </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
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
                                <input type="text" placeholder=' Enter here' />
                                <span>Apply</span>

                            </div>
                            <p className='coupon1'>You can only use one discount code per order</p>



                        </div>
                        <div className="checkoutform123">

                            <button onClick={gotohistory} >Proseed to pay</button>

                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Checkoutpage
