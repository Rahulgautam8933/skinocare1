import React from 'react'
import "./Productitems.css"

import img1 from '../../img/product1.jpg'
import Productitem from '../productitem/Productitem'
const Productitems = ({ heading }) => {
    return (
        <>


            <div className="productpagemidbox">

                <h2>{heading}</h2>

                <div className="productboxs1">

                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />
                    <Productitem />


                </div>

            </div>



        </>
    )
}

export default Productitems
