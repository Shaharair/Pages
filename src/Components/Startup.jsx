import React, { useState } from 'react'
import StartupMM from "../assets/startup.png"
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";


const Startup = () => {

    let [show, setShow] = useState(false)
    let [insv, setInsv] = useState(false)
    let [pay, setPay] = useState(false)
    let [accu, setAccu] = useState(false)

    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
                    <div className="lg:w-[60%] w-full">
                        <img src={StartupMM} alt="startup" />
                    </div>
                    <div className="lg:w-[40%] w-full lg:mt-[200px] mt-[30px]">
                        <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[100px]">Startup digital platform for investing</h3>
                        <div onClick={() => setShow(!show)} className="flex items-center justify-between lg:mt-[50px] mt-[30px]">
                            <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Securing Digital Payment</h4>
                            {show == true ? <RxCross2 /> : <FaPlus />}
                        </div>
                        {show &&
                            <div className="lg:mt-[30px] mt-[20px]">
                                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5B5F77]">Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                            </div>
                        }
                        <div className="">
                            <div onClick={() => setInsv(!insv)} className="flex items-center justify-between lg:mt-[50px] mt-[30px]">
                                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Investing in Digital Company</h4>
                                {insv == true ? <RxCross2 /> : <FaPlus />}
                            </div>
                            {insv &&
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5B5F77]">Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                                </div>
                            }
                        </div>
                        <div className="">
                            <div onClick={() => setPay(!pay)} className="flex items-center justify-between lg:mt-[50px] mt-[30px]">
                                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Building the  idea of future</h4>
                                {pay == true ? <RxCross2 /> : <FaPlus />}
                            </div>
                            {pay &&
                                <div className="lg:mt-[30px] mt-[20px]">
                                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5B5F77]">Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                                </div>
                            }
                        </div>
                        <div className="">
                            <div onClick={() => setAccu(!accu)} className="flex items-center justify-between lg:mt-[50px] mt-[30px]">
                                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Accurate and friendly support</h4>
                                {accu == true ? <RxCross2 /> : <FaPlus />}
                            </div>
                            {accu &&
                                <div className="mt-[30px]">
                                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5B5F77]">Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Startup