"use client"
import React, { useRef, useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PartnerSlider = () => {

    const Data = [
        { imgsrc: 'https://s3-alpha-sig.figma.com/img/c86e/56a7/35f30c2d78d3e62a92bd0abf4479a492?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZq2e5EihddyFikLiyltCDp6Zwd3lucsKaDnflnO6dCSVuCz9dm9Ka~lslt5xGUxmkgxrik3LI2yj2LYL4LAydFa-WyjB~MAKdUxqK3beZOR-MbpXWveadUPCI8URLPdWQXHi0CPuL96HmlC4C1eJ18n-eMdtEiVbuKPB6WOOdQkJ9eZNRLagEyCL9DgXo33fGHwTLFdZtGJdOrxwiFXbafHu7TaF0BNtZ-x~DeKEzf~OXaoOd887Csf3GC4Qqs97ZB2JqduFQ~PIlvHdg-gk5W6W3pYhDWmDZAgXzrGuKM3Z8LKLOY6sO12v5q9UPDvJ5ttLiCbG4Wlb~wVWOcQRQ__' },
        {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/e56e/700f/45d4e7396d0f26b86dc2ad87efccbe20?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~Lp1NR~lJiLYtMebpzt1nwjMn0WetTu0mpQ~T3AoZJCiDPxF7qS~pc1jc3pPdwpscBX3YWaOWOs8PJzM-W8T~G0oQDOTK~ToMG1o0SNEgv56ogN2y8PjZjAcbzVttj99HDqWzNlHa8Pxjau1nqv3z~uK~VrGxRL3MNWGcVjNzY6OPnoml7eQSoLBxPe0EfN0nvwmHooXFVwraFmF7k6Uk5zzmbJcbX8XBwNxtaviM1lEQPHVC6dd5ieFdqPS8tMFcdPGU9r1pYcbJ3vnOa-nGIJE2VhI-YIG0qyYwKBp5fvnAGl8u1H-zub6gWIAaFC-RcpX2ZlzA60NBd5Pr3pPQ__'
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/d7cb/6cfb/1252e8f624a46f23dca42dfb56867d09?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gHondJ9k~t80HVqWY3IPA0lk5YkJxm-7oLfqhRUYUUCKhF2jjbEMWl4BASN23ny4fLgxXguNn-oO0Ku0bppP9SR2fFTPTIZBVXjZC3z6X4Bc-IITZoRMfL0~8u5XE--rVNRdRxWH5IDCq-nOzfi02d7qFxrr0lJrdvmwKdrxNvc0Dr-V-4iK5w4BRxKEunRxJvED3XZctz5PHSNYUMC6mMLuMOTgr4DHr3J6LPp6pp-5vp0TKjxoQbDbfSRwLdWqb9xfKPdo6LGlUppq3L1Zb8vFHNjQqDwBDpAUiGkz0XDWxEUafClY8tNqU3kgH4Cx8mEEAfBlEGFhV0DY-M8gqg__'
        }, {
            imgsrc: 'https://s3-alpha-sig.figma.com/img/182b/8afe/6d3ce73f0534e31d1599960fe8c34c1e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S5K~Mmitam6-SyBO9t1yl3rDfNq~C9tfAewot2payAv-comZatGQGgwldm9BiA~S-tv5KRQ~mkosXzFzgV6Up-bjkPAqiye7WnbCqR2tt0NnO9KlkKXtzZu75KdPgVMJSS6n4brpDLFVku0rSk58HkoZCB9nmtGbykIptwxNJmDmvI3h28lBUSCTYEQUraIsGQgphJrO9XsNpvEaIfP7lri~KSxJrRfSqvAENA74zthaN3TyN4M~0-TlDXpOgK8mYfmq8yKgC9pZBtUsMfohJV3FRPKm5ocob8s-j41WtTttm7frlcjrZ-4FetXiD2f7PeE3ji6mQJvE2LJApXbiUA__'
        }, {
            imgsrc: 'https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png'
        }, {
            imgsrc: 'https://pngimg.com/d/amazon_PNG11.png'
        }]

    return (
        <div className='bg-[#292B2C] lg:px-[158px] flex flex-col'>
            <p className='text-center text-white my-[24px] text-[20px] lg:text-[40px] font-[600]'>Our Partner</p>
            <div className='w-full py-[60px] px-[30px] lg:px-[150px] lg:py-[39px]'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                        clickable: true
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="PartnerSwiper">
                    {Data.map((item, index) =>
                        <SwiperSlide key={index}>
                            <img className='w-20 lg:w-[132px]' src={item.imgsrc} alt='' />
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>
        </div>
    )
}

export default PartnerSlider