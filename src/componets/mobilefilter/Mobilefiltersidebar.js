import React from 'react'
import './Mobilefiltersidbar.css';
import { Slider } from 'antd';
const Mobilefiltersidebar = ({ close }) => {
    return (
        <>

            <div className="mobilefiltercontainer">
                <div className="mobilefilterclosebutton">
                    <h1 onClick={close}><i class="zmdi zmdi-close"></i></h1>
                </div>

                <div className="selectfiltercontainer">


                    <div className="flterselect">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Shop by Concern</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="flterselect">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Shop by category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="flterselect">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Shop by product</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="flterselect">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Shop All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                </div>

                <div className="flterselect">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Shop All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>



                <div className="selerangefilter">
                
                <Slider  range={{ draggableTrack: true,   }} defaultValue={[20, 50]}/>
                <label htmlFor="rate">Price</label>
                <Slider  range={{ draggableTrack: true,   }} defaultValue={[20, 50]}/>
                <label htmlFor="rate">Offers %</label>
                </div>







            </div>

        </>
    )
}

export default Mobilefiltersidebar
