import React from 'react'
import BannerEE from "../assets/banner2.png"

const Business = () => {
  return (
    <section className="bg-[#E5E5E5] lg:py-[100px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="lg:flex justify-between lg:py-[160px] py-[50px]">
                <div className="lg:w-[50%] w-full lg:pt-[50px] pt-[30px]">
                    <h3 className="font-sans font-bold lg:text-[64px] text-[24px] text-[#262626]">Best Reliable Solution For Your Business</h3>
                    <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#5B5F77] lg:pr-[200px]">We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing.</p>
                    <div className="py-[30px]">
                        <a href="$" className="font-sans font-semibold lg:text-[18px] text-[16px] text-[#262626] border-2 border-[#FD5F36] lg:px-[40px] px-[30px] lg:py-4 py-3 hover:bg-[#FD5F36] hover:text-[white] rounded duration-300 ease-in-out">Get Started Now</a>
                    </div>
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="lg:w-[50%] w-[48%]">
                            <h3 className="font-sans font-bold lg:text-[30px] text-[18px] text-[#262626] lg:pr-[50px]">First-class investment solutions</h3>
                            <p className="font-sans font-medium lg:text-[18px] text-[14px] text-[#5B5F77] lg:pr-[60px]">We can help you with your business strategy, architecture, mapping, and optimisation. </p>
                        </div>
                        <div className="lg:w-[50%] w-[48%]">
                            <h3 className="font-sans font-bold lg:text-[30px] text-[18px] text-[#262626] lg:pr-[175px]">Building the idea of future</h3>
                            <p className="font-sans font-medium lg:text-[18px] text-[14px] text-[#5B5F77] lg:pr-[50px]">Offering Performance Driven Partnerships CIBA Specializes In Business Process Outsourcing.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
                    <img src={BannerEE} alt="banner" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Business