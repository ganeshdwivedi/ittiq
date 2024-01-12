import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const CareerCard = () => {
    return (
        <div className='grid grid-cols-1 2xl:w-[351px] 2xl:h-[537px] bg-white CareerCard rounded-[16px] overflow-hidden'>
            <div className='2xl:w-[351px] 2xl:h-[276px] overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/93a5/e429/5f57ac056d170d1388028aa90dc75b6a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auC-Nfgco58INoSysOHNwQUlu4JXXsQd8URiPIGXFq2cDt1epMd0VfZxQlD5xx5ySeaG0pJ0tawL0EhaQk2YcHppfxZ8-u-F~0v7PkAvMQeQd-c6K~Vu-0zl4VA1sf7qzzaz6jdZIuADOrsaYXQOWUvss8hebot6a68MQbTdIkH7CQMcJdxgY7zQxRPnDbX0~vbv8T0i5dyfWhkKZgGidzGilEDtjweBwsRwbAUnvYmM3n6g0FDZBElYIJYTS-Hs7xgO393oxYjripR6rXOCG3z9NXDozdrU7P8~yz-JwXrHmN97v2l2sJtcbu1QdkdSiZT6OEMR8ZXKMWXXudEn9g__' alt='' />
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
            <button className="rounded-[13px] mx-2 text-white px-[45px] py-[14px]  bg-[#FD4A36] relative  group overflow-hidden font-medium inline-block">
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-400 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">Apply Now</span>
            </button>
        </div>
    )
}

export default CareerCard