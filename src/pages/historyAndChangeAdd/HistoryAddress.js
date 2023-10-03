import React from 'react'
import './HistoryAdd.css'
const HistoryAddress = () => {
    return (
        <>

            <div className="histroryAddContainer">


                <div className="historyAddbox">
                    <h2>Order History</h2>
                </div>
                <div className="historyAddbox">
                    <h2>Account Info</h2>

                    <div className="address">
                    <span>Name</span>
                    <p>Siddartha J</p>
                    <span>Phone Number</span>
                    <p>98479 69854</p>
                    <span>Address</span>
                    <p>#23, Brigade Road Koramangala, Bangalore - 560034</p>

                    <button>Add Address</button>

                    
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default HistoryAddress
