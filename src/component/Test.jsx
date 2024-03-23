import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Pagination]);

const CarouselComponent = () => {
  return (
    <div className="relative bg-no-repeat bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1606938704652-3e588c2c9fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)'}}>
      <div className="absolute bg-gradient-to-r from-gray-900 to-gray-900 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen flex justify-center">
        <div className="grid grid-cols-2 gap-4 items-center z-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-100 tracking-tight">
              A smile <br className="hidden sm:block lg:hidden" /> is an inexpensive way to change your looks
            </h2>
            <p className="mt-4 text-gray-300">
              Goals are just dreams with deadline
            </p>
            <div className="flex flex-row items-center space-x-3 mt-5">
              {/* Your social media links */}
            </div>
          </div>
          <div className="mx-0 max-w-xl flex rounded-2xl bg-indigo-700">
            <Swiper
              className="swiper-container flex-col flex self-center"
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <blockquote className="text-left">
                  {/* First slide content */}
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="text-left">
                  {/* Second slide content */}
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="text-left">
                  {/* Third slide content */}
                </blockquote>
              </SwiperSlide>
              {/* Add more SwiperSlide components for additional slides */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
