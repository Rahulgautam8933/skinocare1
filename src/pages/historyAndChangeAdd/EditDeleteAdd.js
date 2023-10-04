import React from 'react'
import './HistoryAdd.css'
import icon from '../../img/icon.svg'
import edit from '../../img/edit.svg'
import delete1 from '../../img/delete.svg'
const EditDeleteAdd = ({toggle,toggle2}) => {
    const adddata = ()=>{
        toggle(true);
        toggle2(true);
    }
    return (
        <>
            <div className="address">
                <span>Name</span>
                <p>Siddartha J</p>
                <span>Phone Number</span>
                <p>98479 69854</p>
                <span>Address</span>
                <p>#23, Brigade Road Koramangala, Bangalore - 560034</p>
                <div className="button1">
                    <button onClick={() => toggle(true)} ><span>Edit</span> <img src={edit} alt="" /> </button>
                    <button id='delete'><span>Delete</span> <img src={delete1} alt="" /></button>
                </div>
                <button onClick={adddata}   ><span>Add Address</span> <img src={icon} alt="" /> </button>
            </div>
        </>
    )
}

export default EditDeleteAdd
