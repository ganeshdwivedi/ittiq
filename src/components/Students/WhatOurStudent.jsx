"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const WhatOurStudent = () => {

    const Data = [
        {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        },
        {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        }, {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        }, {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        }, {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        }, {
            title: 'Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots',
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3cab/d868/6f5dec1ec0b9a6a9f4bf866478581656?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5Ks66obBK3JIfNc8mFxhlncVKOvRLrDq82igkQtv8QheqRLsGVZNwjP2DzVqeI8WHhzBsmwG151oJ2WqiBRm9CPrnOJFf0zuOkaRrEo-Y1xN5pevkMjcL11YLxCMZnz6TqPG6xOYaxdOEiDlvoaZOpueqe0vulOrz5~U0wJIZrXlx0HpAGb-6xDD8RfQee9zz016BRT3BI0OBiSzl-G5EmkTzFzw7eHCJ1A~oOSBgwTdFK0y4veVuxzPWDrmFw2BqfEr-P97QpQ4gfNwTakV4gdyvA-~WWPKTz69A1m7uDrB7TifTOGtOxa85t1ULweKbjT7FItomLv5kme3-Dndg__',
            name: 'Dannette P. Cervantes',
            desig: 'Web Design'
        }
    ]

    return (
        <div className='py-[75px] lg:px-0 px-[30px]'>
            <div className='text-center mb-[40px] px-0 xl:px-[310px]'>
                <p className='text-[#050C26] lg:text-[40px] text-[20px] font-[600]'>What Our Student’s Say</p>
                <p className='text-[#8A8A8A] lg:text-[16px] font-[300] text-[14px]'>L'ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de l'industrie technologique</p>
            </div>

            <Swiper
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
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
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -90,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }
                }
                pagination={{
                    clickable: true,
                }
                }
                effect='coverflow'
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="StudentSwipper">
                {Data.map((item) =>
                    <SwiperSlide>
                        <div className='lg:w-[412px] p-1 lg:h-[241px] shadow-md pl-[27px] py-[23px] place-items-center'>
                            <p>“Complete account of the system and expound the actual
                                Contrary to popular belief, Lorem Ipsum is not simply
                                random text. It has roots”</p>
                            <div className='flex flex-row mt-[20px] gap-5 lg:mt-[58px]'>
                                <img className='w-10 h-10 rounded-full' src='https://s3-alpha-sig.figma.com/img/12cd/40ee/0f25971de5708cd6d7f344f617c24a8e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R39yWmgnfRvemZ-lRCh-ZcJdHWNQ311lo8aBpsvPmyMbaX79WQEmGsNGch1RcS~jwEXYSH4nADFdMGoKVLZGUUA--Ue1aovZO8dCgissmIQoK51QB2wFax~k9uFZpnzYKWs7lRImQtZivVcru~qsHw1ovqToHyWWf5v7egFONyax~qPl5-WCm0odboq~npmuenN9Gys5i1QI3D01zlIkHZU9Qdbys8Rxv1-G65S4JgDFjTJYmfsEKVB3CARRS~yxOC1RqnP6d1uLIDTBz-yjejV-GHPESxNzhgFfZvuzpWWZvXgtorZLrmLGREiRR8t-b3IC5iEix8r6owBGXVc3cQ__' alt='' />
                                <div>
                                    <p className='text-[#353535] text-[14px] lg:text-[16px] font-[600]'>Dannette P. Cervantes</p>
                                    <p className='text-[#353535] text-[12px] lg:text-[14px]'>Web design</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div >
    )
}

export default WhatOurStudent