import React from 'react'

function Backdrop({sidebar , closeback}) {
  return (
    <>
    <div className={sidebar ? "backdrop" : "closesidebar"} onClick={closeback}   >
        
    </div> 
    </>
  )
}

export default Backdrop
