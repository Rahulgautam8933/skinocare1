import React, { useState } from 'react'
import './HistoryAdd.css'


import EditAddress from './EditAddress';
import AddAddress from './AddAddress'
import EditDeleteAdd from './EditDeleteAdd'
const HistoryAddress = () => {

    const [addres, setAddress] = useState(false);
    const [editadd,setEditAdd] = useState(false);
    const [addadress,setAddAddress] = useState(false);



    return (
        <>

            <div className="histroryAddContainer">


                <div className="historyAddbox">
                    <h2>Order History</h2>
                </div>
                <div className="historyAddbox">
                    <h2>Account Info</h2>

                    {
                        !addres ? <AddAddress toggle = {setAddress} />  :

                        !editadd ? <EditDeleteAdd toggle = {setEditAdd} toggle2 = {setAddAddress} /> :

                        !addadress ? <EditAddress toggle = {setAddAddress} heading = "Edit my Address"  /> :

                        <EditAddress heading = "Add Address"/>
    
                    }

                </div>

            </div>

        </>
    )
}

export default HistoryAddress
