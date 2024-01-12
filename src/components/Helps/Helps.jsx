import React from "react"
import HelpsSlider from "./HelpsSlider"


const Helps = () => {
    return (
        <div className='flex relative py-[50px] flex-col px-[30px]'>
            <div className='grid grid-cols-1 xl:px-[158px]  lg:grid-cols-2 gap-x-[25px]  lg:place-items-center'>
                <div>
                    <p className='text-[#FD4A36] lg:text-[24px] text-[15px] font-[600]'>ITTIQ helps you design,</p>
                    <h3 className='lg:text-[38px] text-[19px] font-[600] leading-[135.2%]'>Deliver, Manage, and Sustain Talent Development Solutions<br />
                        <span className='lg:text-[24px] leading-[161.2%]'>for today and the future</span> </h3>
                </div>
                <div className="lg:my-0 my-5">
                    <p className='lg:text-[16px] text-[14px] font-[300]'>Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals...Read More</p>
                </div>
            </div>
            <HelpsSlider />
        </div>
    )
}

export default Helps