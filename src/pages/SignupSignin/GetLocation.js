import React from 'react'
import './Signup.css'
const GetLocation = ({ toggle }) => {
    return (
        <div>
            <div className="addlocationContainer">

                <div className="addlocationhead">
                    <p>Tell your doctor which city you live in, so that they give you the best treatment</p>
                    <h4>But how my city affects my skin and hair?</h4>
                </div>

                <div className="addlocationmid">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Enter' />

                </div>
                <div className="addlocationbutton">
                    <button onClick={() => toggle(true)} >No, Thanks</button>
                </div>

            </div>
        </div>
    )
}

export default GetLocation
