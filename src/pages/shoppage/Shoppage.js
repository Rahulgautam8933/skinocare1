

import Productitem from '../../componets/productitem/Productitem'
import Productitem2 from '../../componets/productitem/Productitem2'
import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import Mobilefiltersidebar from '../../componets/mobilefilter/Mobilefiltersidebar';
import Navbar2 from '../../componets/navbar2/Navbar2';
const Shoppage = () => {

    const [reverse, setReverse] = useState(true);
    const [count, setCount] = useState(1);
    const [show,setShow] = useState(false);
    const closetab = ()=>{
        setShow(false);
    }

    return (
        <>
        <Navbar2/>

        {show? <Mobilefiltersidebar close = {closetab}  /> : ""}

            <div className="shoppagecontainer">
                <div className="shoppageboxs">

                    <div className="shoppagebox1">

                        <div className="shoppagecatagory">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Shop by Concern</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Shop by category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Shop by product</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Shop All</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>

                        <select class="form-select" id='sel' aria-label="Default select example">
                            <option selected>Sort</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

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
                            <h2 onClick={()=> setShow(true)} >Filter <i class="fa-solid fa-filter"></i> </h2>
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
