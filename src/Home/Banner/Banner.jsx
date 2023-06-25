import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import headphone from '../../assets/banner/headphone.png'
import tv from '../../assets/banner/tv.png'
// import furniture from '../../assets/banner/furniture.jpg'
import x_box from '../../assets/banner/xbox.png'


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerContent from './BannerContent';
const Banner = () => {
      return (
            <div className=' '>
                  <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                        }}
                        pagination={{
                              clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <BannerContent title={'New Portable Bluetooth Speaker'} subTitle={'New Arrivals'} image={headphone}></BannerContent>
                        </SwiperSlide>
                        <SwiperSlide>
                              <BannerContent title={'X-Box Wireless Controller.'} subTitle={'For Game Riding'} image={x_box}></BannerContent>
                        </SwiperSlide>
                        <SwiperSlide>
                              <BannerContent title={'Clearance Sales Up to 30% off.'} subTitle={'November sales'} image={tv}></BannerContent>
                        </SwiperSlide>


                  </Swiper>
            </div>
      );
};

export default Banner;