import React from 'react'
import BlogRR from "../assets/blog.png"
import { FaCalendarCheck } from "react-icons/fa6";


const Blog = () => {
    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#FD5F36] uppercase lg:mt-[100px] mt-[30px] text-center">New Blog</p>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center">Latest Updates and News</h3>
                <div className="lg:flex justify-between lg:mt-[60px] mt-[30px]">
                    <div className="lg:w-[32%] w-full">
                        <img className="w-[500px]" src={BlogRR} alt="blog" />
                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black lg:pt-[50px] pt-[30px]">Simple Juice Recipes to boost your immune system</h3>
                        <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470] py-3">Objectively restore stand-alone markets rather than enterprise-wide products. </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center lg:gap-5 gap-3">
                                <h5 className="bg-[#9C9BA9] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] rounded-full"></h5>
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">Esther Howard</h4>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3">
                                <FaCalendarCheck />
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">8 Sep, 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
                        <img className="w-[500px]" src={BlogRR} alt="blog" />
                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black lg:pt-[50px] pt-[30px]">4 steps for measuring the impact of product</h3>
                        <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470] py-3">Objectively restore stand-alone markets rather than enterprise-wide products. </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center lg:gap-5 gap-3">
                                <h5 className="bg-[#9C9BA9] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] rounded-full"></h5>
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">Esther Howard</h4>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3">
                                <FaCalendarCheck />
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">24 May, 2021</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
                        <img className="w-[500px]" src={BlogRR} alt="blog" />
                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black lg:pt-[50px] pt-[30px]">The modern product manager’s tech stack</h3>
                        <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470] py-3">Objectively restore stand-alone markets rather than enterprise-wide products. </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center lg:gap-5 gap-3">
                                <h5 className="bg-[#9C9BA9] lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] rounded-full"></h5>
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">Esther Howard</h4>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3">
                                <FaCalendarCheck />
                                <h4 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#575470]">30 Nov, 2021</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog