import React from 'react'
import BannerII from "../assets/banner3.png"
import LogoYY from "../assets/logo5.png"
import LogoQQ from "../assets/logo6.png"
import LogoMM from "../assets/logo7.png"
import LogoZZ from "../assets/logo8.png"
import LogoXX from "../assets/logo9.png"
import LogoCC from "../assets/logo11.png"
import { MdAccessAlarm } from "react-icons/md";
import { FaSearch, FaWallet, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoIosSend, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardRR from "../assets/card.png"
import CardMM from "../assets/card1.png"
import { FaCircleCheck, FaFacebookF } from "react-icons/fa6";
import BuildNN from "../assets/build.png"
import BuildMM from "../assets/build1.png"





const Home = () => {
    return (

        <>
            {/* banner part start */}
            <section className="bg-[#FEF8E4]">
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:flex items-center justify-between lg:py-[60px] py-[30px]">
                        <div className="lg:w-[60%] w-full">
                            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[400px] capitalize">Professional task manager tool to grow </h3>
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] py-[10px] lg:pr-[300px]">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                            <div className="lg:mt-[60px] mt-[10px]">
                                <input type="text" placeholder="Join with us using your gmail address" className="font-sans font-medium  lg:text-[16px] text-[14px] text-[white] bg-[#969696] lg:w-[500px] w-[300px] lg:h-[60px] h-[50px] lg:pl-4 pl-3 outline-none" />
                            </div>
                        </div>
                        <div className="lg:w-[40%] w-full">
                            <img src={BannerII} alt="banner3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* banner part end */}

            {/* logo part start */}

            <section>
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="flex items-center justify-between lg:mt-[60px] mt-[30px] flex-wrap">
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoYY} alt="logo5" />
                        </div>
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoQQ} alt="logo6" />
                        </div>
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoMM} alt="logo7" />
                        </div>
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoZZ} alt="logo8" />
                        </div>
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoXX} alt="logo9" />
                        </div>
                        <div className="lg:w-[16%] w-[48%]">
                            <img src={LogoCC} alt="logo11" />
                        </div>
                    </div>
                </div>
            </section>

            {/* logo part end */}

            {/* best part start */}


            <section>
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                        <div className="lg:w-[50%] w-full">
                            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[300px]">The best solutions in one tool</h3>
                        </div>
                        <div className="lg:w-[50%] w-full mt-[20px] lg:mt-0">
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] lg:pr-[100px]">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                        </div>
                    </div>
                    <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
                            <div className=" lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] text-[green] bg-[#FEC35F] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <MdAccessAlarm />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Set Daily Alarms</h3>
                                </div>
                                <div className="">
                                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                    <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className=" lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] bg-[#FCFCFE] text-black lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <FaSearch />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Advanced Search</h3>
                                </div>
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className="lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] bg-[#74BA52] text-white lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <IoIosSend />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Share Blog Posts</h3>
                                </div>
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex items-center justify-between mt-[30px]">
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
                            <div className="lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] bg-[#6078FF] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <MdAccessAlarm />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Archive Content</h3>
                                </div>
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className="lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] text-[blue] bg-[#F27860] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <FaWallet />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Secure Checkout</h3>
                                </div>
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className="lg:py-[50px] py-[30px] rounded-[20px] left-0 group-hover:bg-[#8454F5] duration-500 ease-in-out">
                                <div className="flex items-center gap-[20px] pl-[20px]">
                                    <div className="text-[18px] bg-[#0D87E7] text-white lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] rounded-[10px]">
                                        <MdAccessAlarm />
                                    </div>
                                    <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black group-hover:text-white">Faster Response Time</h3>
                                </div>
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pl-[20px] py-2 group-hover:text-white">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
                                <h4 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black pl-[20px] pt-2 group-hover:text-white">Read more</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* best part end */}

            {/* base part start */}

            <section>
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[30px]">
                        <div className="lg:w-[50%] w-full">
                            <img src={CardRR} alt="card" />
                        </div>
                        <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
                            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[100px] capitalize">Join with any business tasks and any goals</h3>
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] py-2">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem.</p>
                            <div className="lg:mt-[50px] mt-[20px]">
                                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#8454F5] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* base part end */}

            {/* more part start */}

            <section>
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:mt-[100px] mt-[30px]">
                        <ul className="lg:flex items-center lg:gap-[70px] gap-[10px] justify-center bg-[#DBCCFC] lg:ml-[100px] lg:mr-[100px] py-[30px] rounded">
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black lg:border-2 lg:border-[#8454F5] lg:w-[250px] lg:h-[60px] lg:pl-[27px] pl-[20px] pt-[15px] rounded lg:hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Artificial Intelligence</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black lg:border-2 lg:border-[#8454F5] lg:w-[250px] lg:h-[60px] lg:pl-[55px] pl-[20px] pt-[15px] rounded lg:hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Header Builder</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black lg:border-2 lg:border-[#8454F5] lg:w-[250px] lg:h-[60px] lg:pl-[50px] pl-[20px] pt-[15px] rounded lg:hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Safe and Private</li>
                            <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black lg:border-2 lg:border-[#8454F5] lg:w-[250px] lg:h-[60px] lg:pl-[45px] pl-[20px] pt-[15px] rounded lg:hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Mobility Solutions</li>
                        </ul>
                    </div>
                    <div className="lg:flex items-center justify-between lg:mt-[70px] mt-[30px]">
                        <div className="lg:w-[50%] w-full">
                            <img src={CardMM} alt="card1" />
                        </div>
                        <div className="lg:w-[40%] w-full mt-[30px] lg:mt-0">
                            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[100px] capitalize">No more messy distribution lists.</h3>
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] lg:pr-[100px]">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.</p>
                            <div className="mt-[50px]">
                                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#8454F5] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* more part end */}

            {/* pricing part start */}

            <section>
                <div className="container px-3 lg:mt-0 mx-auto">
                    <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center lg:mt-[100px] mt-[30px]">Build the right plan for your team.</h3>
                    <div className="lg:flex justify-between lg:mt-[60px] mt-[30px]">
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
                            <div className="py-[70px] left-0 group-hover:bg-[#181059] rounded-[20px] duration-500 ease-in-out">
                                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black ml-[30px] group-hover:text-white">Intro</h3>
                                <div className="flex items-center justify-between mt-[20px] ml-[30px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Hosting Space</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">300GB</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Emails</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Not Avai.</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Pricing Feature</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Unlimited</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Exclusive Support</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Not Avai.</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Bonus Plugins</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Not Avai.</h3>
                                    </div>
                                </div>
                                <div className="lg:mt-[50px] mt-[30px] ml-[30px]">
                                    <button className="font-sans font-semibold lg:text-[18px] text-[16px] text-black border-2 border-[#8454F5] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className="py-[70px] left-0 group-hover:bg-[#181059] rounded-[20px] duration-500 ease-in-out">
                                <h3 className="font-sans font-bold text-[24px] text-black ml-[30px] group-hover:text-white">Pro</h3>
                                <div className="flex items-center justify-between mt-[20px] ml-[30px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Hosting Space</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">700GB</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Emails</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Unlimited</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Pricing Feature</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Available</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Exclusive Support</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Included</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Bonus Plugins</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] pr-[30px] group-hover:text-white">Yesß</h3>
                                    </div>
                                </div>
                                <div className="lg:mt-[50px] mt-[30px] ml-[30px]">
                                    <button className="font-sans font-semibold text-[18px] text-black border-2 border-[#8454F5] w-[200px] h-[60px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Get started</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
                            <div className="py-[70px] left-0 group-hover:bg-[#181059] rounded-[20px] duration-500 ease-in-out">
                                <h3 className="font-sans font-bold text-[24px] text-black ml-[30px] group-hover:text-white">Exclusive</h3>
                                <div className="flex items-center justify-between mt-[20px] ml-[30px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Hosting Space</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">900GB</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Emails</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Unlimited</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Pricing Feature</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Available</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Exclusive Support</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Available</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between ml-[30px] mt-[20px]">
                                    <div className="flex items-center gap-[15px] group-hover:text-white">
                                        <FaCircleCheck />
                                        <h5 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#545A64] group-hover:text-white">Bonus Plugins</h5>
                                    </div>
                                    <div className="">
                                        <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#8454F5] lg:pr-[30px] pr-[20px] group-hover:text-white">Available</h3>
                                    </div>
                                </div>
                                <div className="lg:mt-[50px] mt-[30px] ml-[30px]">
                                    <button className="font-sans font-semibold text-[18px] text-black border-2 border-[#8454F5] w-[200px] h-[60px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">Get started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* pricing part end */}

            {/* build part start */}

            <section>
                <div className="container px-3 lg:px-0 mx-auto">
                    <div className="lg:w-[40%] w-full lg:mt-[100px] mt-[30px]">
                        <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">Build the right plan for your team.</h3>
                    </div>
                    <div className="lg:flex justify-between lg:mt-[60px] mt-[30px]">
                        <div className="lg:w-[32%] w-full">
                            <img src={BuildNN} alt="build" />
                        </div>
                        <div className="lg:w-[32%] w-full">
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] mt-[20px] lg:mt-0">As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                            <h3 className="font-sans font-semibold lg:text-[18px] text-[16px] text-black lg:mt-[20px] mt-[10px]">Jonathon</h3>
                            <div className="flex items-center lg:gap-5 gap-3 lg:mt-[50px] mt-[30px]">
                                <div className="text-[18px] border-2 border-[#8454F5] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pl-[20px] pl-[14px] lg:pt-[20px] pt-[14px] hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">
                                    <FaFacebookF />
                                </div>
                                <div className="text-[18px] border-2 border-[#8454F5] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pl-[20px] pl-[14px] lg:pt-[20px] pt-[14px] hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">
                                    <FaYoutube />
                                </div>
                                <div className="text-[18px] border-2 border-[#8454F5] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pl-[20px] pl-[14px] lg:pt-[20px] pt-[14px] hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">
                                    <FaTwitter />
                                </div>
                            </div>
                            <div className="flex items-center lg:gap-5 gap-3 lg:mt-[50px] mt-[30px]">
                                <div className="lg:text-[18px] text-[16px] border-2 border-[#8454F5] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-[10px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">
                                    <IoIosArrowBack />
                                </div>
                                <div className="lg:text-[18px] text-[16px] border-2 border-[#8454F5] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-[10px] lg:pl-[20px] pl-[16px] lg:pt-[20px] pt-[16px] hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out">
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
                            <img src={BuildMM} alt="build" />
                        </div>
                    </div>
                </div>
            </section>

            {/* build part end */}

            {/* ready part start */}

                <section>
                    <div className="container px-3 lg:px-0 mx-auto">
                        <div className="lg:mt-[100px] mt-[30px]">
                            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:text-center">Ready to get started? Start your free trial.</h3>
                            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black lg:text-center mt-[20px] pr-[100px] lg:pr-0">Free 30 days trial   |   Exclusive Support   |   No Fees</p>
                            <div className="lg:flex items-center gap-5 lg:ml-[500px] lg:mt-[50px] mt-[20px]">
                                <input type="text" placeholder="Enter your email" className="font-sans font-medium lg:text-[16px] text-[14px] text-[#29313D] lg:w-[400px] w-[300px] lg:h-[60px] h-[50px] lg:pl-4 pl-3 outline-none bg-[gray]" />
                                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#8454F5] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#8454F5] hover:text-white duration-500 ease-in-out mt-[30px] lg:mt-0">Try for free</button>
                            </div>
                        </div>
                    </div>
                </section>

            {/* ready part end */}


        </>
    )
}

export default Home