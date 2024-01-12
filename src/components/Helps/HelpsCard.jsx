import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const HelpsCard = () => {
    return (
        <div className='grid grid-cols-1 HelpCard overflow-hidden rounded-md'>
            <div className='2xl:w-[394.457px] 2xl:h-[308px] overflow-hidden rounded-md'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/5b5a/1995/571bdb36ca2f6490945aa6c45b3d8553?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeO41w4hiRuLJ1YuX8BOeyWMwRsijeMve7QVZFBi94-9kGknEUnbzCN3LBIsX8PTZaFE7qjE7NSqEKCtFFZ5g3cq~7rckKbXv6WO3TPEJpqiszcTchOupMgmG9B30iISJuy98vRVtlGwOv2UUdZ3naWdtqwALztY0X3~oTaCDJaGW9XcYu16sBYL09edFey5WuVBnvaiXmSF5ymmU23FLVlfEKKCnhFXaPTg8vLyZgzySqIW1As-Y-hckudVRgWdn0R7nqx4xzSsW9iqR-H7VPGcnlUYR9mU-GZt7WfTs0bAtnd-JDY-3BfJPVR1i7lXGJ64kTJyIJb~gmmSe1WbDA__' alt='' />
            </div>
            <div className='mb-[27px] grid mt-[3px]'>
                <p className='text-[#ACACAC] ml-2 text-[14px] md:text-[16px] font-medium'>UI/UX Design</p>
                <p className='md:text-[20px] text-[16px] mb-[23px] ml-2 font-medium'>UI/UX Design for Beginners</p>
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
                <span class="relative group-hover:text-white">Learn More</span>
            </button>

        </div>
    )
}

export default HelpsCard