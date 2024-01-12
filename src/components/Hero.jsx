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
            imgsrc: 'https://img.freepik.com/free-photo/man-posing-while-smiling_23-2148372317.jpg',

            description: 'Escape the chaos and immerse yourself in serenity with our curated selection of peaceful getaways. Explore idyllic destinations that rejuvenate your mind and soothe your soul.'
        }, {
            imgsrc: 'https://img.freepik.com/free-photo/front-view-smiley-man-pointing-side_23-2148946252.jpg?w=826&t=st=1705056593~exp=1705057193~hmac=a2a3ab36fbc7ccca6919673471f8041950afc8780be01c81fbaed40705a3bf94', description: 'Embark on a gastronomic adventure with our handpicked collection of culinary delights. Savor the diverse tastes of global cuisine and elevate your dining experience.'
        }
        , {
            imgsrc: 'https://img.freepik.com/free-photo/smiling-happy-indian-student-with-backpack-pointing-his-finger-wall_496169-1532.jpg?w=740&t=st=1705056621~exp=1705057221~hmac=fad32f3747d2bbf63ee7e6b7428da6d5c02847304fb301f1a76b2a3b121b9fba', description: "Immerse yourself in a world of artistic inspiration. Uncover spaces that celebrate creativity, from vibrant art scenes to musical havens. Let your imagination thrive in these cultural hotspots."
        }
        , {
            imgsrc: 'https://img.freepik.com/free-photo/business-man-curly-cute-handsome-guy-black-suit-red-tie-pointing-up-smiling_140725-162620.jpg?w=740&t=st=1705056647~exp=1705057247~hmac=4094709faa7fb7b8ed246e319b43bdd03b083d3af74ed0181fb2b3b0ec0072f9', description: 'Step into a realm of well-being and mindfulness. Explore wellness retreats that prioritize your health and balance. Embrace a lifestyle that nurtures both body and soul.'
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
                {Data.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div style={{ backgroundImage: `url(${item.imgsrc})` }} className="w-full hero-img lg:h-full h-[550px] bg-no-repeat bg-cover overflow-hidden">
                            <div className=" inset-0 absolute bg-black opacity-40 z-0"></div>
                            <div className='text-white relative pt-[100px] text-center lg:pt-[179px] z-10 grid grid-cols-1 place-items-center px-[30px] xl:px-[366px]'>
                                <h3 className='xl:text-[64px] text-[26px] capitalize font-[700] text-center'>Améliorez <span className='text-[#FD4A36]'> vos compétences </span> pour faire progresser votre <span className='text-[#FD4A36]'>carrière</span></h3>
                                <p className='text-[16px] mt-[30px] font-[300]'>{item.description}</p>
                                <div className='grid grid-cols-2 mb-[106px] place-items-center mt-[43px]'>
                                    <button className='lg:px-[45px] hover:bg-white hover:bg-opacity-20 text-[14px] px-[20px] py-[7px] lg:text-[16px] font-[600] lg:py-[14px] rounded-[13px] border border-white'>Apply Now</button>

                                    <button className="rounded-[13px] mx-2  px-[45px] py-[14px] bg-[#FD4A36] text-white   relative  group overflow-hidden font-medium inline-block">
                                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#cc2e1d] group-hover:h-full opacity-90"></span>
                                        <span class="relative group-hover:text-white">Browse Courses</span>
                                    </button>
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