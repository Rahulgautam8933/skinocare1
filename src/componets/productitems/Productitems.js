import React from 'react'


import img1 from '../../img/product1.jpg'
import Productitem from '../productitem/Productitem'
import { Swiper, SwiperSlide } from 'swiper/react';
const Productitems = ({ heading }) => {


  let size = window.innerWidth;
  let size1 = window.innerWidth;
  console.log(size);
  let number;
  if (size > 1500) {
    number = 5;
  }
  else if (size >= 1352 && 1500 > size) {
    number = 4.5;
  }
  else if (size >= 1200 && 1352 > size) {
    number = 4;
  }
  else if (size >= 1074 && 1200 > size) {
    number = 3.5;
  }
  else if (size >= 900 && 1074 > size) {
    number = 3;
  }
  else if (size >= 800 && 900 > size) {
    number = 2.5;
  }
  else if (size >= 600 && 800 > size) {
    number = 2;
  }
  else if (size >= 400 && 600 > size) {
    number = 1.5;
  }
  else {
    number = 1.3;
  }



  return (
    <>


      <div className="productpagemidbox">

        <h2>{heading}</h2>

        <div className="productboxs12">

          { /*   
        <Swiper
            spaceBetween={2}
            slidesPerView={number}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>  <Productitem />  </SwiperSlide>
            <SwiperSlide>  <Productitem />  </SwiperSlide>





          </Swiper>

  */   }

          <div className="productslider">

            <div className="productsliderboxs2">
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />
              <Productitem />

            </div>

          </div>





        </div>

      </div>



    </>
  )
}

export default Productitems
