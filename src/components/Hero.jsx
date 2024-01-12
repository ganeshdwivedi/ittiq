"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {

    const Data = [
        {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/3a7a/42e1/97bf5afde9535014c30535c04893e8b3?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXDEQLNwtb0D~BDpNCyuLHvcDUDEEbv7jaN4u6wLYNOjt6fW2M3xIQb~2d6b7twd2fQR02mylb7CUkJe79mJQHSOrxy9bqo2in8yWcHGrkxbMjDuiofPFws466L3jUzewXtkxm23pXa9anY0UFxc09E76~Y6~CmMs-N5dN7mo6P~ZTDl2JVjeuW5oYc2iYJbqGlvHhkYyJy4m6JNZizcDrV1H2RFQTBoF734QXb3DruS1MzYxDaekymi28fGtr8i-84z3uGeP6Y1q326MvxKPgxAvLs1R9cjxkhE2MfkzRz98XbqZpG6igtKTUD5Nx4wT0FuMocA648a~JRtxjrMvA__', description: "Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en promouvant l'égalité et l'autonomisation."
        },
        {
            imgsrc: 'https://img.freepik.com/free-photo/medium-shot-man-hiking-tour_23-2150343020.jpg?w=740&t=st=1704951762~exp=1704952362~hmac=24b86cc2ddc719e38cfec52842f09c1bd9133bd8ba577d75403c991503659b4b',

            description: 'Escape the chaos and immerse yourself in serenity with our curated selection of peaceful getaways. Explore idyllic destinations that rejuvenate your mind and soothe your soul.'
        }, {
            imgsrc: 'https://img.freepik.com/premium-photo/lake-dolomites-italy_321315-326.jpg?w=740', description: 'Embark on a gastronomic adventure with our handpicked collection of culinary delights. Savor the diverse tastes of global cuisine and elevate your dining experience.'
        }
        , {
            imgsrc: 'https://img.freepik.com/free-photo/traveller-explores-rugged-landscape-iceland_346278-307.jpg?w=740&t=st=1704952327~exp=1704952927~hmac=700b71d57b92d980743cb18744553936a7f7bad58112eace4fb54907590e3e14', description: "Immerse yourself in a world of artistic inspiration. Uncover spaces that celebrate creativity, from vibrant art scenes to musical havens. Let your imagination thrive in these cultural hotspots."
        }
        , {
            imgsrc: 'https://img.freepik.com/free-photo/entrance-gate-sunset-istanbul-turkey_335224-616.jpg?w=826&t=st=1704953609~exp=1704954209~hmac=50f02027db02c4148877f7c113cc5fc5c134ce6e4b11d68d966612bc0bb10451', description: 'Step into a realm of well-being and mindfulness. Explore wellness retreats that prioritize your health and balance. Embrace a lifestyle that nurtures both body and soul.'
        }, {
            imgsrc: 'https://img.freepik.com/free-photo/photographer-hand-holding-camera-standing-viewpoint-clouds-panorama-viewpoint-sunrise_335224-1320.jpg?w=740&t=st=1704952419~exp=1704953019~hmac=2c9e57caf7a5c134afa6c447f226e02fad4d10719cc1fdfe9a5dfe217c5f0a07', description: 'Stay ahead of the curve with our showcase of the latest and greatest in technology. From smart homes to futuristic gadgets, discover innovations that redefine modern living.'
        }
    ]


    return (
        <div className='w-full h-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="HeroSwipper"
            >
                {Data.map((item) =>
                    <SwiperSlide>
                        <div style={{ backgroundImage: `url(${item.imgsrc})` }} className="w-full lg:h-full h-[550px] bg-no-repeat bg-cover overflow-hidden">
                            <div className=" inset-0 absolute bg-black opacity-40 z-0"></div>
                            <div className='text-white relative pt-[100px] text-center lg:pt-[179px] z-10 grid grid-cols-1 place-items-center px-[30px] xl:px-[366px]'>
                                <h3 className='xl:text-[64px] text-[26px] capitalize font-[700] text-center'>Améliorez <span className='text-[#FD4A36]'> vos compétences </span> pour faire progresser votre <span className='text-[#FD4A36]'>carrière</span></h3>
                                <p className='text-[16px] mt-[30px] font-[300]'>{item.description}</p>
                                <div className='grid grid-cols-2 mb-[106px] place-items-center mt-[43px]'>
                                    <button className='lg:px-[45px] hover:bg-white hover:bg-opacity-20 text-[14px] px-[20px] py-[7px] lg:text-[16px] font-[600] lg:py-[14px] rounded-[13px] border border-white'>Apply Now</button>
                                    <button className='lg:px-[45px] lg:py-[14px] text-[14px] px-[20px] py-[7px] hover:bg-[#f85e4d] hover:text-black bg-[#FD4A36] text-white rounded-[13px] lg:text-[16px] font-[600]'>Browse Courses</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default Hero