import React from 'react'

import sec6img from '../../img/sec6.png'
// import sec6img from '../../img/sec61.png'
// import sec6img1 from '../../img/sec62.png'
import Imgcontent from '../imgcontent/Imgcontent'
import Button from '../button/Button';
function Sec6() {

  const h1 = "Join the SkinoCare experience and revitalise your skin and hair to their optimal health."
  const p = "Access a well-rounded skincare routine, expertly designed through the fusion of dermatologist knowledge and AI technology.";


  return (
    <>


    <div id="sec6maincontainer">
    
    <div className="sec6maincontainer">

    <div className="sec6boxs">
      <div className="sec6box">
        <h2>"Join the SkinoCare experience and revitalise your skin and hair to their optimal health."</h2>
        <p>"Access a well-rounded skincare routine, expertly designed through the fusion of dermatologist knowledge and AI technology."</p>
        <Button button="Download App " />
      </div>
      <div className="sec6box">
        <div className="sec6imgbox">
        <img src={sec6img} alt="" />
          </div>
      </div>
    </div>
  </div>  
  
  <div ></div>
  
    </div>


   

    </>
  )
}

export default Sec6
