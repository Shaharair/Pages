import React from 'react'
import LineRR from "../assets/line.png"
import GroupEE from "../assets/group.png"
import { FaStar } from "react-icons/fa";
import VideoDD from "../assets/video.png"
import ManSS from "../assets/man.png"


const Banner = () => {
  return (
    <section className="bg-[#30344E]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-[50%] w-full">
                    <h3 className="font-sans font-bold lg:text-[64px] text-[24px] text-[white] lg:pr-[100px] pt-[30px] lg:pt-0">We Provi  Premium Consulting Service For your Business</h3>
                    <p className="font-sans font-medium lg:text-[18px] text-[14px] text-[white] lg:pr-[200px] lg:py-[20px] py-[10px]">The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.</p>
                    <h4 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] border-2 border-[#FD5F36] lg:h-[60px] h-[50px] lg:w-[250px] w-[200px] text-center lg:leading-[60px] leading-[50px] rounded hover:bg-[#FD5F36] hover:text-[white] duration-300 ease-in-out">get started now</h4>
                    <div className="flex items-center justify-between py-[30px]">
                        <h3 className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white]">Already member of our communty?<span className="font-sans font-semibold lg:text-[18px] text-[14px] text-[#52C5B6] lg:pl-[10px] pl-1">Sign in</span></h3>
                        <img src={LineRR} alt="line" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="">
                            <img src={GroupEE} alt="group" />
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#52C5B6]">4.5</h3>
                            <div className="flex gap-1 lg:text-[24px] text-[18px]">
                               <FaStar className="text-[#FDB400]"/>
                               <FaStar className="text-[#FDB400]"/>
                               <FaStar className="text-[#FDB400]"/>
                               <FaStar className="text-[#FDB400]"/>
                               <FaStar className="text-[#FDB400]"/>
                            </div>
                        </div>
                        <div className="lg:w-[160px]">
                            <img src={VideoDD} alt="video" />
                        </div>
                    </div>
                    <p className="lg:mt-[-60px] mt-[-40px] lg:pl-[307px] pl-[80px] font-sans font-medium lg:text-[18px] text-[14px] text-[white]">305k Total Review</p>
                </div>
                <div className="lg:w-[50%] w-full bg-[#52C5B6] mt-[50px] lg:mt-0">
                    <img src={ManSS} alt="man" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner