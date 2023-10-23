import React, { useState } from 'react'
import './HistoryAdd.css'

import activeimg from '../../img/orderActiveimg.png'

import EditAddress from './EditAddress';
import AddAddress from './AddAddress'
import EditDeleteAdd from './EditDeleteAdd'
const HistoryAddress = () => {

    const [addres, setAddress] = useState(false);
    const [editadd, setEditAdd] = useState(false);
    const [addadress, setAddAddress] = useState(false);



    return (
        <>

            <div className="histroryAddContainer">


                <div className="historyAddbox">
                    <h2>Order History</h2>

                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                        <li class="nav-item" role="presentation" id='historyorderbutton' >
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Delivered</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                            <div id="orderselectcontainer">
                                <div className="ordersecdays">
                                    <p>Today</p>
                                </div>

                                <div className="ordersecmiddata">
                                    <div className="ordersecmidimg">
                                        <img src={activeimg} alt="" />
                                    </div>
                                    <div className="orderseccontent2">

                                        <h5>Order no: <span>DFWF65464</span></h5>
                                        <h5>Amount: <span>₹ 1599</span></h5>
                                    </div>

                                </div>


                                <h4>ONLINE PAYMENT MODE PENDING</h4>

                            </div>

                        </div>


                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                            <div id="orderselectcontainer">
                                <div className="ordersecdays">
                                    <p>Today</p>
                                </div>

                                <div className="ordersecmiddata">
                                    <div className="ordersecmidimg">
                                        <img src={activeimg} alt="" />
                                    </div>
                                    <div className="orderseccontent2">
                                        <h5>Order no: <span>DFWF65464</span></h5>
                                        <h5>Amount: <span>₹ 1599</span></h5>
                                    </div>
                                </div>

                                <h4>ONLINE PAYMENT MODE PENDING</h4>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="historyAddbox">

                    <h2>Account Info</h2>

                    {
                        !addres ? <AddAddress toggle={setAddress} /> :

                            !editadd ? <EditDeleteAdd toggle={setEditAdd} toggle2={setAddAddress} /> :

                                !addadress ? <EditAddress toggle={setAddAddress} heading="Edit my Address" /> :

                                    <EditAddress heading="Add Address" />

                    }

                </div>

            </div>

        </>
    )
}

export default HistoryAddress
