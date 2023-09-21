import React from 'react'


import img1 from '../../img/product1.jpg'
import Productitem from '../productitem/Productitem'
import { Swiper, SwiperSlide } from 'swiper/react';
const Productitems = ({ heading }) => {


    let size = window.outerWidth;
console.log(size);
let number;
if (size > 2000){
  number = 6;
}
else if (size >= 1352 && 1500 > size){
  number = 5.5;
}
else if (size >= 1200 && 1352 > size){
  number = 5;
}
else if (size >= 1074 && 1200 > size){
  number = 4.5;
}
else if (size >= 800 && 1074 > size){
  number = 4;
}
else if (size >= 600 && 800 > size) {
  number = 3;
}
else if (size >= 400 && 600 > size) {
  number = 1.5;
}
else {
  number = 1.5;
}


    
    return (
        <>


            <div className="productpagemidbox">

                <h2>{heading}</h2>

                <div className="productboxs1">
                <Swiper
                spaceBetween={50}
                slidesPerView={number}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
                <SwiperSlide>  <Productitem/>  </SwiperSlide>
             
           
                
                
                
              </Swiper>



                </div>

            </div>



        </>
    )
}

export default Productitems
