"use client";
import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Slide } from "react-awesome-reveal";
import Logo from "@/assets/Logo";

function Navbar() {
    const [toggle, settoggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const Toggle = () => {
        settoggle(!toggle);
    };
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    const navlinkcss =
        "text-[14px] pt-4 hover:border-white hover:border-t-4 text-white text-[#666680] font-[400] ";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";

    return (
        <>
            <nav className="relative">
                <div className={{ isSticky } ? "flex absolute  w-full z-40 flex-row justify-between xl:px-[160px] py-[10px] lg:py-[19px] items-center px-[30px]" : "flex w-full z-40 flex-row absolute justify-between xl:px-[160px] xl:py-[19px] items-center px-[30px]"}>
                    <Logo className={"xl:w-[108px] w-[80px] xl:h-[42px]"} />
                    <div className="lg:block hidden -mt-6">
                        <ul className="flex flex-row gap-x-[24px]">
                            <li className={navlinkcss}>
                                Home
                            </li>
                            <li className={navlinkcss}>
                                Admissions
                            </li>
                            <li className={navlinkcss}>
                                Corporate Training
                            </li>
                            <li className={`${navlinkcss}`}>
                                Program & Courses
                            </li>
                            <li className={`${navlinkcss} `}>
                                About Us
                            </li>
                            <li className={`${navlinkcss}`}>
                                Blog
                            </li>
                        </ul>
                    </div>


                    <div className="flex flex-row gap-5">
                        <button className="rounded-[13px] border mx-2 bg-white lg:px-[45px] px-[25px] py-[7px] lg:py-[14px]  text-[#FD4A36] relative  group overflow-hidden font-medium inline-block">
                            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FD4A36] group-hover:h-full opacity-90"></span>
                            <span class="relative group-hover:text-white">Apply</span>
                        </button>
                        <button
                            onClick={Toggle}
                            className="text-black block lg:hidden Hamburger "
                        >
                            {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon className="text-white" />}
                        </button></div>
                </div>

            </nav>
            {toggle && (
                <Slide direction="right"
                    className="p-10 z-10 pl-10 duration-1000 delay-300 ease-in-out pt-36 fixed bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <li className={mobNavlinkcss}>
                                    Home
                                </li>
                                <li className={mobNavlinkcss}>
                                    Admissions
                                </li>
                                <li className={mobNavlinkcss}>
                                    Corporate Training
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    Program & Courses
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    About Us
                                </li>
                                <li className={`${mobNavlinkcss}`}>
                                    Blog
                                </li>
                            </ul>
                        </div>


                    </div >

                </ Slide>
            )
            }
        </>
    );
}

export default Navbar;