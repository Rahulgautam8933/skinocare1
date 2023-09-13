import React from 'react'


function Secheader({heading,content}) {
  return (
    <>

    <div className="seccontainer">
    <h2>{heading}</h2>
    <p>{content}</p>
    </div>
      
    </>
  )
}

export default Secheader
