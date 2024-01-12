"use client"
import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Design from './Students/Design';

const HighRated = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[90px] place-items-center px-[30px] py-[66px] xl:px-[158px] overflow-hidden'>
            <div className='xl:w-[520px] relative lg:h-[642px]'>
                <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/ee07/512b/7e4fe8ccf920af387cdc597e220c7d46?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nyrGmS258pr4jJwHge0qXdSQ4p~b4jPJGo3A8xgpwlSAlDSXouei45bbVaoo3KEXifRzssyWK0gmK~k7jiqr3xik6GVOH1pQ8Gbnp2mg~DNBvmD2ywFvRa4aKtunf7wJF8tejvHVBcNt-MboAfUU4OgeVk6bLmN60-W-wNA2SSEltzx~jyNUbs-DBxB1SaCvxOBDO5MRRs6kERTVta80VPp9Rd4Q4MsvqJK2hrLQejLTeP5ovlcsGx26xVL77pYuR0YnX~6rc~eHHq7gEFH~7TrJzcp20m1Po5iBBaJwGr6Us1L~-ecyWkao1pQmMx~gF0mFHOW3p4R36RYKMRcQjA__' alt='' />
                <Design className={"bottom-0 -right-10"} />
            </div>
            <div className='mt-[40px] lg:mt-0'>
                <p className='text-[#FD4A36] font-[600] text-[14px] lg:text-[16px]'>High Rated</p>
                <h3 className='lg:text-[54.984px] leading-[60.004px] text-[24px] text-[#010305] font-[600]'>Student Campus
                    Life</h3>
                <p className='text-[#010305] mt-[15px] text-[16px] lg:text-[24px] font-[600]'>BE AMBITIOUS. BE VULNERABLE. BE YOU</p>
                <p className='text-[#797C7F] font-[300] mt-[18px] lg:mt-[24px] text-[14px] lg:text-[16px]'>In addition to its training programs, ITTIQ offers a rich and varied social experience and other support systems where you’ll find outlets for creative expression and be your true self.</p>
                <div className='mt-[40px] lg:mt-[60px] flex flex-row gap-x-5 lg:gap-x-10'>
                    <button className="rounded-[13px] mx-2  px-[45px] py-[14px] bg-[#FD4A36] text-white   relative  group overflow-hidden font-medium inline-block">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#cc2e1d] group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-white">How We Work</span>
                    </button>
                    <button className='lg:text-[15px] border-[#FD4A36] hover:border p-2 animate-bounce rounded-md translate-x-0 delay-100 text-[13px] font-medium'> <PhoneInTalkIcon /> +229-54335532</button>
                </div>
            </div>
        </div>
    )
}

export default HighRated