

import Productitem from '../../componets/productitem/Productitem'
import Productitem2 from '../../componets/productitem/Productitem2'
import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import Mobilefiltersidebar from '../../componets/mobilefilter/Mobilefiltersidebar';
import Navbar2 from '../../componets/navbar2/Navbar2';
import Sidebar from '../../componets/sidebar/Sidebar';
import Backdrop from '../../componets/sidebar/Backdrop';
const Shoppage = () => {

    const [reverse, setReverse] = useState(true);
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);
    const closetab = () => {
        setShow(false);
    }

    
  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    // alert('ssfjhsfjsf');
    setsidebar(true);

  }

  const close = () => {
    setsidebar(false);
  }



    return (
        <>
            <Navbar2 openSidebar={toggleSidebar} />
            <Sidebar sidebar={sidebar} closeback={close} />
            <Backdrop sidebar={sidebar} closeback={close} />

            {show ? <Mobilefiltersidebar close={closetab} /> : ""}

            <div className="shoppagecontainer">
                <div className="shoppageboxs">

                    <div className="shoppagebox1">

                        <div className="shoppagecatagory">

                            <div class="accordion accordianbut" id='accordianbut12' >
                                <div class="accordion  " id='accordianclass'>
                                    <h2 class="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' class="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12345" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by Concern
                                        </button>
                                    </h2>
                                    <div id="collapseTwo12345" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body shortbody">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="accordion accordianbut" id='accordianbut12' >
                                <div class="accordion  " id='accordianclass'>
                                    <h2 class="accordion">
                                        <button id='productshortbutton' class="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort2" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by category
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body shortbody">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="accordion accordianbut" id='accordianbut12' >
                                <div class="accordion  " id='accordianclass'>
                                    <h2 class="accordion">
                                        <button id='productshortbutton' class="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort3" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by product
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body shortbody">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="accordion accordianbut" id='accordianbut12' >
                                <div class="accordion  " id='accordianclass'>
                                    <h2 class="accordion" id='bordercolor'>
                                        <button id='productshortbutton' class="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort4" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop All
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body shortbody">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>





                        <div class="accordion accordianbut" id='accordianbut12' >
                            <div class="accordion  " id='accordianclass'>
                                <h2 class="accordion">
                                    <button id='productshortbutton' class="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Sort
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body shortbody">

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Popularity
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                New Arrivals
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Best Sellers
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Featured
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Alphabetically, A-Z
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Alphabetically, Z-A
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="shopselectrange">
                            <div className="shoprange">

                                <Slider
                                    range={{
                                        draggableTrack: true,
                                    }}
                                    defaultValue={[20, 50]}
                                />
                                <label for="customRange3" class="form-label">Price</label>

                            </div>
                            <div className="shoprange">

                                <Slider
                                    range={{
                                        draggableTrack: true,
                                    }}
                                    defaultValue={[20, 50]}
                                />
                                <label for="customRange3" class="form-label">Offers %</label>

                            </div>


                        </div>

                    </div>
                    <div className="shoppagebox">


                        <div className="shopfilter">
                            <h2 onClick={() => setShow(true)} >Filter <i class="fa-solid fa-filter"></i> </h2>
                        </div>


                        {
                            (count === 1) ? <div className="shoppageproduct">
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                            </div> : <div className="shoppageproduct">
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                                <Productitem2 />
                            </div>
                        }


                        <div className="shoppagination">

                            <button onClick={() => (count === 1) ? setCount(1) : setCount(count - 1)} > <i class="zmdi zmdi-arrow-left"></i> Previous</button>
                            <p><span className={count === 1 ? "countnumber" : ""}>1</span> <span className={count === 2 ? "countnumber" : ""} >2</span> <span className={count === 3 ? "countnumber" : ""} >3</span> <span className={count === 4 ? "countnumber" : ""} >4</span> <span className={count === 5 ? "countnumber" : ""} >5</span> </p>

                            <button onClick={() => setCount(count + 1)} >Next <i class="zmdi zmdi-arrow-right"></i>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Shoppage
