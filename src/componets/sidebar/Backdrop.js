import React from 'react'
import './Sidebar.css'
function Backdrop({sidebar , closeback}) {
  return (
    <>
    <div className={sidebar ? "backdrop" : "closesidebar"} onClick={closeback}   >
        
    </div> 
    </>
  )
}

export default Backdrop
