import React from 'react'

import product1 from '../../img/product1.jpg'
import product2 from '../../img/product2.jpg'

import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
function Sec8() {
    const navigator = useNavigate();
    const gotoproduct = ()=>{
        navigator('/shop_now')
    }
    return (
        <>

            <div className="sec8maincontainer">
                <div className="sec8container">
                    <div className="sec8box">
                        <div className="sec8boxs">
                            <div className="sec8box1">
                                <div className="sec8box1img">
                                    <img src={product1} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                            <div className="sec8box1">
                                <div className="sec8box1img">
                                    <img src={product2} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                        </div>
                        <div className="sec8boxs">
                            <div className="sec8box1">
                                <div className="sec8box1img">
                                    <img src={product1} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                            <div className="sec8box1">
                                <div className="sec8box1img">
                                    <img src={product2} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                        </div>
                    </div>
                    <div className="sec8box">
                        <h2>"Not currently in need of
                            dermatological assistance?"</h2>
                        <p className='secboxp' >But still desire access to products that are entirely safe and approved by
                            dermatologists..."</p>

                        <div onClick={gotoproduct}  className="buttoncontainer">
                            <Button button = "Shop Now" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sec8
