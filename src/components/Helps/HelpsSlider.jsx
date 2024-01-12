"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HelpsCard from './HelpsCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HelpsSlider = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };


    return (
        <div className='relative'>

            <div className='absolute top-52 2xl:left-[1vw] flex-row xl:flex hidden lg:gap-x-[85vw]'>
                <div className='hover:shadow-md p-5 rounded-full' onClick={prevHandler}><ArrowBackIosIcon className='text-[#FD4A36]' /></div>
                <div className='hover:shadow-md p-5 rounded-full' onClick={nextHandler}><ArrowForwardIosIcon className='text-[#FD4A36]' /></div>
            </div>

            <div className='xl:px-[158px] lg:py-[90px] '>
                <Swiper
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        460: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 60
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    slidesPerView={3}
                    spaceBetween={10}
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="HelpSwiper"
                >
                    <SwiperSlide>  <HelpsCard /></SwiperSlide>
                    <SwiperSlide>  <HelpsCard /></SwiperSlide>
                    <SwiperSlide>  <HelpsCard /></SwiperSlide>
                    <SwiperSlide>  <HelpsCard /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default HelpsSlider