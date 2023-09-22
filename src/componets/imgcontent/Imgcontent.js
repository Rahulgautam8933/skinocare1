import React from 'react'


import Carousel from 'react-bootstrap/Carousel';

import Button from '../button/Button'
function Imgcontent({ secimg, h1, p, secimg2, secimg3, secimg4, secimg5 }) {

  
  return (
    <>

    <div id="home">
    
    <div className="sec1container">
    <div className="sec1containerboxs">
      <div className="sec1box">
        <h1>"{h1}"</h1>
        <p>"{p}"</p>
        <Button button="Download App" />
      </div>
      <div className="sec1box">
        <div className="sec1boximg">
          <Carousel fade>
            <Carousel.Item interval={400}>
              <img src={secimg3} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img src={secimg4} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img src={secimg} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img src={secimg2} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img src={secimg5} alt="" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
    </div >
  </div >
    
    
    
    </div>
     

    </>
  )
}

export default Imgcontent
