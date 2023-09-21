

import Productitem2 from '../../componets/productitem/Productitem2'
import React, { useState } from 'react';
import { Slider } from 'antd';
import Mobilefiltersidebar from '../../componets/mobilefilter/Mobilefiltersidebar';
import Navbar2 from '../../componets/navbar2/Navbar2';
import Sidebar from '../../componets/sidebar/Sidebar';
import Backdrop from '../../componets/sidebar/Backdrop';
const Shoppage = () => {


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

                            <div className="accordion accordianbut" id='accordianbut12' >
                                <div className="accordion  " id='accordianclass'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12345" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by Concern
                                        </button>
                                    </h2>
                                    <div id="collapseTwo12345" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="accordion accordianbut" id='accordianbut12' >
                                <div className="accordion  " id='accordianclass'>
                                    <h2 className="accordion">
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort2" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by category
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="accordion accordianbut" id='accordianbut12' >
                                <div className="accordion  " id='accordianclass'>
                                    <h2 className="accordion">
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort3" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop by product
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="accordion accordianbut" id='accordianbut12' >
                                <div className="accordion  " id='accordianclass'>
                                    <h2 className="accordion" id='bordercolor'>
                                        <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort4" aria-expanded="false" aria-controls="collapseTwo">
                                            Shop All
                                        </button>
                                    </h2>
                                    <div id="collapseTwosort4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Popularity
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    New Arrivals
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Best Sellers
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Featured
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>





                        <div className="accordion accordianbut" id='accordianbut12' >
                            <div className="accordion  " id='accordianclass'>
                                <h2 className="accordion">
                                    <button id='productshortbutton' className="accordion-button   accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Sort
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body shortbody">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Popularity
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                New Arrivals
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Best Sellers
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Featured
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Alphabetically, A-Z
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
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
                                <label for="customRange3" className="form-label">Price</label>

                            </div>
                            <div className="shoprange">

                                <Slider
                                    range={{
                                        draggableTrack: true,
                                    }}
                                    defaultValue={[20, 50]}
                                />
                                <label for="customRange3" className="form-label">Offers %</label>

                            </div>


                        </div>

                    </div>
                    <div className="shoppagebox">


                        <div className="shopfilter">
                            <h2 onClick={() => setShow(true)} >Filter <i className="fa-solid fa-filter"></i> </h2>
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

                            <button onClick={() => (count === 1) ? setCount(1) : setCount(count - 1)} > <i className="zmdi zmdi-arrow-left"></i> Previous</button>
                            <p><span onClick={()=>setCount(1)}  className={count === 1 ? "countnumber" : ""}>1</span> <span onClick={()=>setCount(2)}  className={count === 2 ? "countnumber" : ""} >2</span> <span onClick={()=>setCount(3)} className={count === 3 ? "countnumber" : ""} >3</span> <span onClick={()=>setCount(4)} className={count === 4 ? "countnumber" : ""} >4</span> <span onClick={()=>setCount(5)}  className={count === 5 ? "countnumber" : ""} >5</span> </p>

                            <button onClick={() => setCount(count + 1)} >Next <i className="zmdi zmdi-arrow-right"></i>
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Shoppage
