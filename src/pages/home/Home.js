import React, { useState } from 'react'
import Navbar from '../../componets/navbar/Navbar'
import Sec1 from '../../componets/sec1/Sec1'
import Sec2 from '../../componets/sec2/Sec2'
import Sec3 from '../../componets/sec3/Sec3'
import Sec4 from '../../componets/sec4/Sec4'
import Sec5 from '../../componets/sec5/Sec5'
import Sec6 from '../../componets/sec6/Sec6'
import Sec7 from '../../componets/sec7/Sec7'
import Sec8 from '../../componets/sec8/Sec8'
import Navbar2 from '../../componets/navbar2/Navbar2'
import Sidebar from '../../componets/sidebar/Sidebar'
import Backdrop from '../../componets/sidebar/Backdrop'

const Home = () => {

      
  const [showModal, setModel] = useState(false);

  const closeModel = ()=>setModel(false);


const [sidebar, setsidebar] = useState(false);

const toggleSidebar = ()=>{
  // alert('ssfjhsfjsf');
setsidebar(true);

}

const close = ()=>{
  setsidebar(false);
}



  return (
    <>
    <div className="navbarshadow">
    <Navbar openSidebar={toggleSidebar}   />

    <Sidebar sidebar={sidebar} closeback = {close} />
    <Backdrop sidebar={sidebar} closeback = {close} />


  </div>
    <Sec1/>
    <Sec2/>

    <Sec3/>
    <Sec4/>
    <Sec5/>
    <Sec6/>
    <Sec7/>
    <Sec8/>

    </>
  )
}

export default Home
