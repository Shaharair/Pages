import React from 'react'
import LogoLL from "../assets/logo1.png"
import LogoMM from "../assets/logo2.png"
import LogoVV from "../assets/logo3.png"
import LogoCC from "../assets/logo4.png"

const Facts = () => {
  return (
    <section className="bg-[#52C5B6] lg:py-[100px] py-[50px] lg:mt-[100px] mt-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex justify-between">
                <div className="lg:w-[40%] w-full">
                    <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white">Trusted by the world’s leading companies</h3>
                </div>
                <div className="lg:w-[60%] w-full flex justify-between mt-[20px] lg:mt-0">
                    <div className="w-[32%]">
                        <h4 className="font-sans font-bold lg:text-[40px] text-[18px] text-white">150+</h4>
                        <p className="font-sans font-medium lg:text-[16px] text-[12px] text-white">Finished Session</p>
                    </div>
                    <div className="w-[32%]">
                        <h4 className="font-sans font-bold lg:text-[40px] text-[18px] text-white">100%</h4>
                        <p className="font-sans font-medium lg:text-[16px] text-[12px] text-white">Satisfiction Rate</p>
                    </div>
                    <div className="w-[32%]">
                        <h4 className="font-sans font-bold lg:text-[40px] text-[18px] text-white">350+</h4>
                        <p className="font-sans font-medium lg:text-[16px] text-[12px] text-white">Trusted Clients</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex justify-between">
                <div className="lg:w-[40%] w-full lg:mt-[50px] mt-[30px]">
                    <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[#FD5F36] lg:w-[250px] w-[200px] lg:h-[60px] h-[50px] rounded hover:bg-[#FD5F36] duration-500 ease-in-out">Free Consultation</button>
                </div>
                <div className="lg:w-[60%] w-full flex items-center justify-between flex-wrap">
                        <div className="lg:w-[24%] w-[48%]">
                            <img src={LogoLL} alt="logo1" />
                        </div>
                        <div className="lg:w-[24%] w-[48%]">
                            <img src={LogoMM} alt="logo2" />
                        </div>
                        <div className="lg:w-[24%] w-[48%]">
                            <img src={LogoVV} alt="logo3" />
                        </div>
                        <div className="lg:w-[24%] w-[48%]">
                            <img src={LogoCC} alt="logo4" />
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Facts