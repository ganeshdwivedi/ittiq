"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CareerCard from './CareerCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slide } from 'react-awesome-reveal';
import RectangleSVG from '@/assets/RectangleSVG';
import RectangleRight from '@/assets/RectangleRight';

const ChooseYourCareer = () => {

    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    return (

        <div className='py-[60px] relative flex flex-col overflow-hidden px-[30px]'>
            <RectangleSVG className={"left-30 lg:block hidden top-52"} />
            <RectangleRight className={"right-[0rem] lg:block hidden  top-52"} />

            <div className='absolute top-[26rem] z-50 2xl:left-[3vw] flex-row xl:flex hidden lg:gap-x-[85vw]'>
                <div className='hover:shadow-md p-5 rounded-full' onClick={prevHandler}><ArrowBackIosIcon className='text-[#FD4A36]' /></div>
                <div className='hover:shadow-md p-5 rounded-full' onClick={nextHandler}><ArrowForwardIosIcon className='text-[#FD4A36]' /></div>
            </div>
            <div className='text-center px-0 lg:px-[155px]'>
                <p className='text-[20px] font-[600] lg:text-[40px]'>Choose  Your Career Path</p>
                <p className='text-[14px] lg:text-[16px] font-[300] text-[#292B2C]'>Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation</p>
            </div>
            <div className='mt-[32px] py-10 xl:px-[158px]'>
                <Slide cascade={true} triggerOnce="true" direction='up'>
                    <div>
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
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                }
                            }}
                            slidesPerView={3}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => setSwiperRef(swiper)}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="CareerSwiper"
                        >
                            <SwiperSlide><CareerCard /> </SwiperSlide>
                            <SwiperSlide><CareerCard /> </SwiperSlide>
                            <SwiperSlide><CareerCard /> </SwiperSlide>
                            <SwiperSlide><CareerCard /> </SwiperSlide>
                            <SwiperSlide><CareerCard /> </SwiperSlide>
                            <SwiperSlide><CareerCard /> </SwiperSlide>


                        </Swiper>
                    </div>
                </Slide >
            </div>
            <button className='bg-[#292B2C] hover:shadow-lg self-center my-[32px] rounded-[13px] lg:px-[45px] lg:py-[11px] px-[20px] py-[7px] lg:text-[16px] font-[600] text-[14px] text-white'>View all</button>
        </div>

    )
}

export default ChooseYourCareer