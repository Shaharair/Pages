import React, { useState } from 'react'
import LogoFF from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    let [show, setShow] = useState(false)

  return (
    <section className="bg-[#7258F7] lg:py-[30px] py-[20px] border-b-2 border-[#D6A033]">
        <div className="container px-3 lg:px-0 mx-auto">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={LogoFF} alt="logo" />
                </div>
                <div className="">
                    <ul className={`lg:flex items-center gap-[30px] absolute top-[102px] left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[gray] w-[250px] h-[350px] py-[50px]" : "left-[-250px]"}`}>
                        <li className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white]"><Link to="/">Home</Link></li>
                        <li className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white] py-2 lg:py-0"><Link to="/home">About</Link></li>
                        <li className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white]"><Link to="/aboutus">Service</Link></li>
                        <li className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white] py-2 lg:py-0"><Link to="/login">Pages</Link></li>
                        <li className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white]"><Link to="/singup">News</Link></li>
                        <div className=" lg:flex items-center gap-5 lg:pl-[100px]">
                            <p className="font-sans font-semibold lg:text-[18px] text-[16px] lg:text-start text-center text-[white] mb-[50px] lg:mb-0 pt-2 lg:pt-0">Login</p>
                            <a href="$" className="font-sans font-semibold lg:text-[18px] text-[14px] text-[white] border-2 border-[white] lg:px-[40px] px-[30px] ml-[30px] lg:ml-0 lg:py-4 py-2 rounded hover:bg-[white] hover:text-[#262626] duration-500 ease-in-out">Free    Consultation</a>
                        </div>
                    </ul>
                    <div onClick={() => setShow(!show)} className="lg:hidden text-[24px] pr-[20px] text-white">
                        {show == true ? <RxCross2/> : <FaBars/>}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar