import React from 'react'
import LogoEE from "../assets/logo.png"
import { FaGoogle, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-[#30344E] lg:py-[100px] py-[50px] lg:mt-[100px] mt-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between flex-wrap">
                    <div className="lg:w-[25%] w-[48%]">
                        <img src={LogoEE} alt="logo" />
                        <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white lg:pt-[30px] mt-[20px] lg:pr-[150px]">Build a modern and creative website with Innovate.</p>
                        <div className="flex items-center lg:gap-5 gap-3 lg:mt-[30px] mt-[20px] lg:opacity-100 opacity-0">
                            <div className="text-[18px] text-white border-2 border-[white] w-[60px] h-[60px] rounded-full pl-[20px] pt-[20px] hover:bg-[white] hover:text-[black] duration-500 ease-in-out">
                                <FaGoogle />
                            </div>
                            <div className="text-[18px] text-white border-2 border-[white] w-[60px] h-[60px] rounded-full pl-[20px] pt-[20px] hover:bg-[white] hover:text-[black] duration-500 ease-in-out">
                                <FaLinkedinIn />
                            </div>
                            <div className="text-[18px] text-white border-2 border-[white] w-[60px] h-[60px] rounded-full pl-[20px] pt-[20px] hover:bg-[white] hover:text-[black] duration-500 ease-in-out">
                                <FaTwitter />
                            </div>
                            <div className="text-[18px] text-white border-2 border-[white] w-[60px] h-[60px] rounded-full pl-[20px] pt-[20px] hover:bg-[white] hover:text-[black] duration-500 ease-in-out">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[15%] w-[48%]">
                        <ul>
                            <li className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#52C5B6] lg:pb-[20px] pb-[10px]">Product</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white">Landingpages</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Pricing</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Benefits</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Features</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <ul>
                            <li className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#52C5B6] lg:pb-[20px] pb-[10px]">Company</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white">About</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Privacy Policy</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Terms & Conditions</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Partners</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Contact</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-[48%]">
                        <ul>
                            <li className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#52C5B6] lg:pb-[20px] pb-[10px]">Resources</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white">Guides and resources</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Blog</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Tools</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[16px] text-white pt-2">Support</li>
                        </ul>
                    </div>
                    <div className="lg:w-[20%] w-full mt-[50px] lg:mt-0">
                        <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#52C5B6] lg:pb-[20px] pb-[10px]">Get Latest Updates</h4>
                        <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white">Subscribe to our newsletter and get many interesting things every week</p>
                        <div className="lg:mt-[30px] mt-[20px]">
                            <input type="text" placeholder="Your Email Address" className="font-sans font-medium lg:text-[16px] text-[14px] text-[#A1A2A3] w-full lg:h-[60px] h-[40px] pl-3 outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer