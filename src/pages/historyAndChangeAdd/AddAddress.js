import React from 'react'
import './HistoryAdd.css'
import icon from '../../img/icon.svg'
const AddAddress = ({ toggle }) => {
    return (
        <>

            <div className="addadresscontainer">
                <div className="address">
                    <span>Name</span>
                    <p>Siddartha J</p>
                    <span>Phone Number</span>
                    <p>98479 69854</p>
                    <span>Address</span>
                    <p>#23, Brigade Road Koramangala, Bangalore - 560034</p>
                    <button onClick={() => toggle(true)} ><span>Add Address</span> <img src={icon} alt="" /> </button>
                </div>

                <div className="address">
                    <span>Name</span>
                    <p>Siddartha J</p>
                    <span>Phone Number</span>
                    <p>98479 69854</p>
                    <span>Address</span>
                    <p>#23, Brigade Road Koramangala, Bangalore - 560034</p>
                    <button onClick={() => toggle(true)} ><span>Add Address</span> <img src={icon} alt="" /> </button>
                </div>

            </div>

        </>
    )
}

export default AddAddress
