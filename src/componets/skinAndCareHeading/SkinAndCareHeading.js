import React from 'react'
import './SkinAndCareHeading.css'
const SkinAndCareHeading = ({h2,p}) => {
    return (
        <>
            <div className="skincareheading">
                <h2>{h2}</h2>
                <p> {p}</p>
            </div>
        </>
    )
}

export default SkinAndCareHeading
