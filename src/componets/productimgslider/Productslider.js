import React, { useState } from 'react'
import './Productimg.css'
import img1 from '../../img/product1.jpg'
import img2 from '../../img/product2.jpg'
import img3 from '../../img/product3.jpg'

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Thumbs } from "swiper/modules";

let size = window.outerWidth;
console.log(size);
let number;
if (size > 1300) {
  number = 6;
}
else if (size >= 762 && 1300 > size) {
  number = 4;
}
else if (size >= 762 && 762 > size) {
  number = 4;
}
else {
  number = 4;
}

const Productslider = () => {

  const [thumbsswiper, setThumbswiper] = useState(null);
  const [imgchange, setImgchange] = useState("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")

  //  img1:"https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg",
  // img2:"https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg",
  // img3:"https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg",


  return (
    <>

      <div className="swiperimg">
        <img src={imgchange} alt="" />
      </div>

      <Swiper
        spaceBetween={2}
        slidesPerView={number}
        // navigation={true}
        thumbs={{ swiper: thumbsswiper }}
        modules={[Navigation, Thumbs]}
        className='mySwiper2'

        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
        <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>

      </Swiper>
    </>
  )
}

export default Productslider
