import React from 'react'
import BannerEE from "../assets/banner.png"
import { FaCheckCircle } from "react-icons/fa";



const About = () => {
  return (
    <section>
        <div className="container px-3 lg:px-0 mx-auto lg:py-[100px] py-[30px]">
            <div className="lg:flex justify-between">
                <div className="lg:w-[50%] w-full">
                    <img src={BannerEE} alt="banner" />
                </div>
                <div className="lg:w-[50%] w-full lg:pt-[100px] pt-[30px]">
                    <h2 className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#FD5F36] uppercase">About Us</h2>
                    <h3 className="font-sans font-bold lg:text-[48px] text-[24px] text-[#262626]">Welcome to World Best Business Company</h3>
                    <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#262626] lg:pr-[100px]">We partner with experienced and qualified Accountants, Financial Advisors and Chartered Secretaries to provide</p>
                    <div className="lg:py-[30px] py-[20px]">
                        <div className="flex items-center lg:gap-5 gap-3 text-[#52C5B6] lg:text-[18px] text-[16px]">
                            <FaCheckCircle/>
                            <h3 className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#262626]">Monthly assesment report</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 text-[#52C5B6] lg:text-[18px] text-[16px]">
                        <FaCheckCircle/>
                            <h3 className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#262626]">Tax planning consultation</h3>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 text-[#52C5B6] lg:text-[18px] text-[16px]">
                        <FaCheckCircle/>
                            <h3 className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#262626]">Montly rent problem solution</h3>
                        </div>
                    </div>
                    <div className="lg:py-[20px] py-[10px]">
                        <a href="$" className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#262626] border-2 border-[#FD5F36] lg:px-[40px] px-[30px] lg:py-4 py-3 rounded hover:bg-[#FD5F36] hover:text-[white] duration-300 ease-in-out">Free Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About