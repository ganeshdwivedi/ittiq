"use client"
import Logo from '@/assets/Logo'
import React, { useState } from 'react'
import FacebookSVG from '@/assets/FacebookSVG';
import TwitterSVG from '@/assets/TwitterSVG';
import InstagramSVG from '@/assets/InstagramSVG';
import EmailSVG from '@/assets/EmailSVG';
import PhoneSVG from '@/assets/PhoneSVG';


const Footer = () => {

    const footerLinkcss = "text-[14px] cursor-pointer font-[400] lg:hover:scale-110 hover:font-[600]"

    const [toggle, setToggle] = useState(false);
    const [email, SetEmail] = useState("");
    console.log(email)
    const Show = () => {
        setToggle(true)
        setTimeout(() => setToggle(false), 3000)
    }

    return (
        <div className='bg-black  px-[30px] overflow-hidden mt-[66px] xl:px-[158px]'>
            <div className='flex  flex-col py-[28px] lg:flex-row justify-between lg:items-center'>
                <Logo className={"w-[132px]"} />
                <div className='flex flex-col py-4 lg:py-0 gap-y-5 lg:flex-row gap-x-12 text-white'>
                    <p className={footerLinkcss}>Quick Links</p>
                    <p className={footerLinkcss}>Home</p>
                    <p className={footerLinkcss}>Admission</p>
                    <p className={footerLinkcss}>Program Courses</p>
                    <p className={footerLinkcss}>FAQ</p>
                    <p className={footerLinkcss}>Blog</p>
                    <p className={footerLinkcss}>Careers</p>
                </div>
            </div>
            <div className=' text-white py-4 lg:py-[28px] flex flex-col lg:flex-row justify-between lg:items-center'>
                <p className="text-[16px] cursor-pointer text-white font-[600]">Canada<br />
                    Chemin D’aigremont<br />
                    Lorraine Quebec<br />
                    Republic Of Benin - Lot 29<br />
                    PK Cotonou</p>
                <div className='flex flex-row items-center gap-x-[25px]'><PhoneSVG /> <p className="text-[16px] lg:py-0 py-4 text-white cursor-pointer font-[600]">P+229-54335532</p></div>
                <div className='flex flex-row items-center gap-x-[25px]'><EmailSVG /> <p className="text-[16px] cursor-pointer text-white font-[600]">info@email.com</p></div>
                <div className='text-right'>
                    <p className='mr-2'>Subscribe</p>
                    <div className='bg-white flex flex-row overflow-hidden rounded-[25px]'>
                        <input value={email} onChange={(e) => SetEmail(e.target.value)} type='text' className='text-black w-full lg:w-[182px] lg:pl-[10px] border-0' />
                        <button onClick={Show} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out bg-[#FD4A36] rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#cc2e1d] group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Subscribe</span>
                            <span className="relative invisible">Subscribe</span>
                        </button>

                    </div>
                    <p className={toggle ? "text-[14px] text-green-400" : "text-red-500 hidden text-[14px]"}>{email != "" ? "Thankyou for your subscribing" : "please enter valid email"}</p>
                </div>
            </div>
            <div className='text-white py-[28px] items-center gap-x-10 flex flex-col lg:flex-row justify-between'>
                <div><p className='text-[16px] inline-block font-[600] text-[#CFCFCF] cursor-pointer'>loremipsum© 2023. All Rights Reserved.</p></div>
                <div className='grid grid-rows-1 gap-y-10 gap-x-0 lg:gap-x-5 lg:grid-cols-4'>
                    <p className="text-[14px] cursor-pointer text-white hover:scale-110 font-[400]">Privacy Policy</p>
                    <p className="text-[14px] cursor-pointer font-[400] text-white hover:scale-105">Terms & Condition </p>
                    <p className="text-[14px] cursor-pointer font-[400] text-white hover:scale-105">Site Map</p>
                </div>
                <div className='flex flex-row lg:mt-0 mt-5 gap-x-6'>
                    <FacebookSVG />
                    <TwitterSVG />
                    <InstagramSVG />
                </div>
            </div>
        </div>
    )
}

export default Footer