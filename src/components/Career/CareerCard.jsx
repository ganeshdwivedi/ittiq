import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CareerCard = () => {
    return (
        <div className='grid grid-cols-1 2xl:w-[351px] bg-white CareerCard rounded-[16px] overflow-hidden'>
            <div className='2xl:w-[351px] 2xl:h-[276px] overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover' src='https://lh3.googleusercontent.com/proxy/5abWGRLTbQwGSEFBgi8C1lWCxWJ08Q2-zQJKB5Yp5wOMWf4jQM9zNVa3E6qpLOZmLWNDUIbgXfH8MQhbwa3DoiFW_xc3oB-YGBYJtfWP1KOeBOa0wYpFODptCKoMCKLRnSp4LaFx-A' alt='' />
            </div>
            <div className='mb-[27px] mt-[3px]'>
                <p className='md:text-[24px] font-[600] text-[16px]  ml-2'>Finance fundamentals
                    course</p>
                <p className='text-[#ACACAC] mb-[23px] ml-2 text-[14px] md:text-[16px] font-[300]'>By Kelly Anderson</p>
                <div className='grid grid-cols-3 place-items-center'>
                    <div className='flex flex-row gap-x-1 items-center'>
                        <AccessTimeIcon /><p className='text-[#ACACAC] text-[11px] md:text-[14px]'>22hr 30min</p>
                    </div>
                    <div className='flex flex-row gap-x-1 items-center'><VideocamOutlinedIcon /> <p className='text-[#ACACAC] text-[11px] md:text-[14px]'>34 Courses</p></div>
                    <div className='flex flex-row gap-x-1 items-center'><FileDownloadOutlinedIcon /> <p className='text-[#ACACAC] text-[11px] md:text-[14px]'>250 Sales</p></div>
                </div>
            </div>
            <button className='rounded-[13px] mx-2 text-white px-[45px] py-[14px]  bg-[#FD4A36]'>Learn More</button>

        </div>
    )
}

export default CareerCard