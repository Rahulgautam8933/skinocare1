import React from 'react'
import './HistoryAdd.css'
const EditAddress = ({heading}) => {
    return (
        <>
            <div className="changeaddrersscontainer">
                <h3>{heading}</h3>
                <p>Complete address help you get your order faster</p>
                <form action="">

                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Enter Your Name' />
                    </div>
                    <div className="input">
                        <label htmlFor="number">Phone Number</label>
                        <input type="number" id='number' placeholder='Enter Your Number' />
                    </div>
                    <div className="input">
                        <label htmlFor="anumber">Alternative Phone Number</label>
                        <input type="number" id='anumber' placeholder='Enter Your Number' />
                    </div>
                    <div className="pincode">
                        <div className="input">
                            <label htmlFor="anumber">Alternative Phone Number</label>
                            <input type="number" id='anumber' placeholder='Enter Your Number' />
                        </div>
                        <button>Find my Pincode</button>
                    </div>

                    <div className="input">
                        <label htmlFor="District">District</label>
                        <input type="text" id='District' placeholder='Bangalor' />
                    </div>
                    <div className="input">
                        <label htmlFor="area">Area</label>
                        <input type="text" id='area' placeholder='Bangalor' />
                    </div>
                    <div className="input">
                        <label htmlFor="Street-number-name">Street number/name</label>
                        <input type="text" id='Street-number-name' placeholder='Bangalor' />
                    </div>
                    <div className="input">
                        <label htmlFor="Door-number">Door number</label>
                        <input type="text" id='Door-number' placeholder='65' />
                    </div>
                    <div className="input">
                        <label htmlFor="Landmark">Landmark</label>
                        <input type="text" id='Landmark' placeholder='65' />
                    </div>

                    <div className="togalbar">

                        <h3>Set as default address</h3>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>

                    </div>

                    <div className="button">

                        <button>Use This Address</button>
                    </div>



                </form>


            </div>
        </>
    )
}

export default EditAddress
