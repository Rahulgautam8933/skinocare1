import React from 'react'

import Button from '../button/Button'
// import sec1img from '../../img/sec1img.png'
function Imgcontent({secimg,h1,p,secimg2,secimg3,secimg4,secimg5}) {
  return (
    <>

    <div className="sec1container">
    <div className="sec1containerboxs">
        <div className="sec1box">
            <h1>"{h1}"</h1>
            <p>"{p}"</p>
                
    <Button button = "Download App" />
        </div>
        <div className="sec1box">
            <div className="sec1boximg">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={secimg} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={secimg2} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={secimg3} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={secimg4} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={secimg5} class="d-block w-100" alt="..."/>
              </div>
            </div>
          </div>
            </div>
        </div>
    </div>

</div>
      
    </>
  )
}

export default Imgcontent
