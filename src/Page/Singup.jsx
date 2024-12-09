import React from 'react'
import ImagesEE from "../assets/images1.png"
import IconWW from "../assets/icon.png"
import IconDD from "../assets/icon1.png"
import IconNN from "../assets/icon2.png"
import FeaturesRRA from "../assets/features.png"
import { FaRocket, FaLock, FaUserCheck, FaArrowRight, FaUser, FaCheckCircle } from "react-icons/fa";
import { IoSettings,IoBusiness } from "react-icons/io5";
import AppsEE from "../assets/apps.png"
import AppsQQ from "../assets/apps1.png"
import AppsWW from "../assets/apps2.png"
import AppsUU from "../assets/apps3.png"
import AppsKK from "../assets/apps4.png"
import AppsMM from "../assets/apps5.png"
import AppsLL from "../assets/apps6.png"
import AppsBB from "../assets/apps7.png"
import { FcFlowChart } from "react-icons/fc";
import { LuMonitorCheck } from "react-icons/lu";
import { SiNeutralinojs } from "react-icons/si";
import HappyEE from "../assets/happy.png"
import { FaUsers } from "react-icons/fa6";





const Singup = () => {
  return (
    <>

      <section className="bg-[#3639A4] lg:pt-[150px] pt-[50px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="">
            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white lg:pl-[500px] lg:pr-[400px]">Get your work done with Management Tool</h3>
            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white lg:pl-[500px] lg:pr-[600px] pt-[20px]">The world's first project management platform that connects everything</p>
            <div className="lg:mt-[50px] mt-[30px] relative">
              <input type="text" placeholder="Your business email" className="font-sans font-medium lg:text-[16px] text-[14px] text-[#B4B6C4] lg:w-[500px] w-[300px] lg:h-[60px] h-[50px] lg:pl-4 pl-3 lg:ml-[500px]" />
              <button className="font-sans font-semibold text-[18px] text-white bg-[#43E7DF] w-[200px] h-[60px] absolute top-0 left-[800px]">Try for free</button>
            </div>
            <div className="lg:mt-[70px] mt-[30px]">
              <img src={ImagesEE} alt="images1" />
            </div>
          </div>
        </div>
      </section>

      {/* how part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[30px]">
            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[400px]">How simple is it to use our platform?</h3>
            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-black pt-[10px] lg:pt-0">This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
          </div>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full">
              <img className="lg:pl-[150px] pl-[30px]" src={IconWW} alt="icon" />
              <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[40px]">Login or sign up to be able use our platform</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[20px]">This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <img className="lg:pl-[150px] pl-[30px]" src={IconDD} alt="icon1" />
              <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[40px]">Login or sign up to be able use our platform</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[20px]">This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <img className="lg:pl-[150px] pl-[30px]" src={IconNN} alt="icon2" />
              <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[40px]">Login or sign up to be able use our platform</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] lg:pl-[50px] pl-[30px] lg:pr-[100px] mt-[20px]">This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
          </div>
        </div>
      </section>

      {/* how part end */}

      {/* features part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
            <div className="lg:w-[60%] w-full">
              <img src={FeaturesRRA} alt="featuress" />
            </div>
            <div className="lg:w-[40%] w-full">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">We provide features for your Business</h3>
              <div className="flex items-center justify-between mt-[40px]">
                <div className="lg:w-[50%] w-[48%]">
                  <div className="lg:text-[24px] text-[18px] text-[#FF7364] bg-[#FAEAE8] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pt-[18px] pt-[16px] lg:pl-[18px] pl-[16px]">
                    <FaRocket />
                  </div>
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Fast and Easy to use</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[100px] pt-1">Easily to convert API with just a few clicks</p>
                </div>
                <div className="lg:w-[50%] w-[48%]">
                  <div className="lg:text-[24px] text-[18px] text-[#FFCA4B] bg-[#FAF1E8] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pt-[18px] pt-[16px] lg:pl-[18px] pl-[16px]">
                    <FaLock />
                  </div>
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Safely Security</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[100px] pt-1">All customer data is encrypted</p>
                </div>
              </div>
              <div className="flex items-center justify-between lg:mt-[40px] mt-[30px]">
                <div className="lg:w-[50%] w-[48%]">
                  <div className="lg:text-[24px] text-[18px] text-[#50DFFD] pb-[20px] bg-[#E8F7FA] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] rounded-full lg:pt-[18px] pt-[16px] lg:pl-[18px] pl-[16px]">
                    <IoSettings />
                  </div>
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Get Organized</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#767676] lg:pr-[100px] pt-1">From lists to boards, organize work your way. </p>
                </div>
                <div className="lg:w-[50%] w-[48%] mt-[50px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3639A4] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#3639A4] hover:text-white duration-500 ease-in-out">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* features part end */}

      {/* apps part start */}

      <section className="bg-[#F4FAFA] lg:py-[70px] py-[30px] mt-[30px] lg:mt-0">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-[50%] w-full">
              <h4 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#FF7364]">Integrations</h4>
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[100px]">Easily integrate with your favorite apps</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] py-3 lg:pr-[100px]">App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
              <div className="lg:mt-[50px] mt-[20px]">
                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#3639A4] rounded lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] hover:bg-[#3639A4] hover:text-white duration-500 ease-in-out">Get Started</button>
              </div>
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <div className="flex items-center justify-between">
                <div className="w-[48%] bg-white">
                  <img src={AppsEE} alt="apps" />
                </div>
                <div className="w-[48%] bg-white">
                  <img className="h-[145px]" src={AppsQQ} alt="apps1" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-[30px]">
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsWW} alt="apps2" />
                </div>
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsUU} alt="apps3" />
                </div>
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsKK} alt="apps4" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-[30px]">
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsMM} alt="apps5" />
                </div>
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsLL} alt="apps6" />
                </div>
                <div className="w-[32%] bg-white">
                  <img className="h-[145px]" src={AppsBB} alt="apps7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* apps part end */}

      {/* service part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <h4 className="font-sans font-medium lg:text-[18px] text-[16px] text-[#FF7364] text-center lg:mt-[100px] mt-[30px]">Our Services</h4>
          <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center">How It Works</h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[24%] w-full shadow rounded-[20px] group relative">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[24px] w-[60px] h-[60px] bg-[#FAEAE8] rounded-full pt-[18px] pl-[18px] ml-[30px]">
                  <FcFlowChart />
                </div>
                <h3 className="font-sans font-bold lg:text-[24px] text-[20px] text-black pt-[20px] ml-[30px] group-hover:text-white">Plan Product Roadmap</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] py-1 ml-[30px] pr-[50px] group-hover:text-white">A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                <div className="mt-[20px] ml-[30px]">
                  <button className=" font-sans font-semibold lg:text-[18px] text-[16px] text-black flex items-center gap-5 group-hover:text-white">Read More <FaArrowRight /></button>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full shadow rounded-[20px]  group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[24px] w-[60px] h-[60px] bg-[#E8F2FA] rounded-full pt-[18px] pl-[18px] ml-[30px]">
                  <FaUserCheck />
                </div>
                <h3 className="font-sans font-bold lg:text-[24px] text-[20px] text-black pt-[20px] ml-[30px] group-hover:text-white">Assign Any Work</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] py-1 ml-[30px] pr-[50px] group-hover:text-white">Work assignment or job assignment is allocating work to work centers or appropriate </p>
                <div className="mt-[20px] ml-[30px]">
                  <button className=" font-sans font-semibold lg:text-[18px] text-[16px] text-black flex items-center gap-5 group-hover:text-white">Read More <FaArrowRight /></button>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full shadow rounded-[20px]  group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[24px] w-[60px] h-[60px] bg-[#E8FAF0] rounded-full pt-[18px] pl-[18px] ml-[30px]">
                  <LuMonitorCheck />
                </div>
                <h3 className="font-sans font-bold lg:text-[24px] text-[20px] text-black pt-[20px] ml-[30px] group-hover:text-white">Monitor Work Progress</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] py-1 ml-[30px] pr-[50px] group-hover:text-white">Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
                <div className="mt-[20px] ml-[30px]">
                  <button className=" font-sans font-semibold lg:text-[18px] text-[16px] text-black flex items-center gap-5 group-hover:text-white">Read More <FaArrowRight /></button>
                </div>
              </div>
            </div>
            <div className="lg:w-[24%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[24px] w-[60px] h-[60px] bg-[#E8F2FA] rounded-full pt-[18px] pl-[18px] ml-[30px]">
                  <SiNeutralinojs />
                </div>
                <h3 className="font-sans font-bold lg:text-[24px] text-[20px] text-black pt-[20px] ml-[30px] group-hover:text-white">Pertect Intergration</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#645E76] py-1 ml-[30px] pr-[50px] group-hover:text-white">App integration, in a general sense, is the process of resources or capabilities from one application </p>
                <div className="mt-[20px] ml-[30px]">
                  <button className=" font-sans font-semibold lg:text-[18px] text-[16px] text-black flex items-center gap-5 group-hover:text-white">Read More <FaArrowRight /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service part end */}

      {/* happy part start */}

      <section className="bg-[#3639A4] lg:mt-[100px] mt-[30px] lg:pt-[100px] pt-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex justify-between">
            <div className="lg:w-[50%] w-full">
              <img src={HappyEE} alt="happy" />
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white">Trusted by 35,000+ happy customers.</h3>
              <div className="flex items-center justify-between lg:pt-[50px] pt-[30px] pb-[30px] lg:pb-0">
                <div className="w-[32%]">
                  <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white">720+</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white lg:pr-[50px]">Over 500 business powered with us</p>
                </div>
                <div className="w-[32%]">
                  <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white">4.9</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white lg:pr-[50px]">Rating on google play and app store</p>
                </div>
                <div className="w-[32%]">
                  <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white">200+</h3>
                  <p className="font-sans font-medium lg:text-[16px] text-[14px] text-white lg:pr-[50px]">Easily integrate with your favorite apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* happy part end */}

      {/* pricing part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <h3 className="font-sans font-bold lg:text-[48px] text-[24px] text-black lg:text-center lg:mt-[100px] mt-[30px]">Pricing Designed To Fit Your Business</h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
              <div className="py-[50px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[18px] w-[60px] h-[60px] bg-[#E8F2FA] pt-[20px] pl-[20px] rounded-full lg:ml-[220px] ml-[140px]">
                  <FaUser />
                </div>
                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#3639A4] text-center mt-[20px] group-hover:text-white">Personal</h4>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center py-4 group-hover:text-white">$10/mth</h3>
                <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#645E76] text-center group-hover:text-white">Annual pricing <span className="font-sans font-medium text-[16px] text-[#3639A4] group-hover:text-white">(save 20%)</span></p>
                <div className="mt-[30px] ml-[50px]">
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Calendar View</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Custom Templates</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />list view</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />board view</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Assignees & Due Dates</h6>
                </div>
                <div className="lg:mt-[50px] mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#43E7DF] rounded lg:w-[300px] w-[200px] lg:h-[60px] h-[50px] hover:bg-[#43E7DF] hover:text-white duration-500 ease-in-out group-hover:text-white">Purchase Now</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[18px] w-[60px] h-[60px] bg-[#E8F2FA] pt-[20px] pl-[20px] rounded-full lg:ml-[220px] ml-[140px]">
                  <FaUsers />
                </div>
                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#3639A4] text-center mt-[20px] group-hover:text-white">Team</h4>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center py-4 group-hover:text-white">$25/mth</h3>
                <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#645E76] text-center group-hover:text-white">Annual pricing <span className="font-sans font-medium text-[16px] text-[#3639A4] group-hover:text-white">(save 35%)</span></p>
                <div className="mt-[30px] ml-[50px]">
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Timeline Review</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Custom fields</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Custom Templates</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Task dependencies</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Milestones Manage</h6>
                </div>
                <div className="lg:mt-[50px] mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#43E7DF] rounded lg:w-[300px] w-[200px] lg:h-[60px] h-[50px] hover:bg-[#43E7DF] hover:text-white duration-500 ease-in-out group-hover:text-white">Purchase Now</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#3639A4] rounded-[20px] duration-700 ease-in-out">
                <div className="text-[18px] w-[60px] h-[60px] bg-[#E8F2FA] pt-[20px] pl-[20px] rounded-full lg:ml-[220px] ml-[140px]">
                  <IoBusiness />
                </div>
                <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-[#3639A4] text-center mt-[20px] group-hover:text-white">Enterprise</h4>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center py-4 group-hover:text-white">$50/mth</h3>
                <p className="font-sans font-medium lg:text-[18px] text-[16px] text-[#645E76] text-center group-hover:text-white">Annual pricing <span className="font-sans font-medium text-[16px] text-[#3639A4] group-hover:text-white">(save 40%)</span></p>
                <div className="mt-[30px] ml-[50px]">
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Data export & deletion</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Block native integrations</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Custom branding</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Lock custom fields</h6>
                  <h6 className="flex items-center gap-5 font-sans font-semibold lg:text-[18px] text-[14px] text-[#645E76] pt-3 group-hover:text-white"><FaCheckCircle className="text-[#3639A4] group-hover:text-white" />Priority support</h6>
                </div>
                <div className="lg:mt-[50px] mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#43E7DF] rounded lg:w-[300px] w-[200px] lg:h-[60px] h-[50px] hover:bg-[#43E7DF] hover:text-white duration-500 ease-in-out group-hover:text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing part end */}

      {/* element part start */}

    <section className="bg-[#4347B7] lg:py-[100px] py-[30px] lg:mt-[100px] mt-[30px]">
      <div className="container px-3 lg:px-0 mx-auto">
        <div className="flex items-center justify-between">
          <div className="lg:w-[60%] w-full">
            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white lg:pr-[200px]">Don’t find the answer? contact us for any query.</h3>
          </div>
          <div className="">
            <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[#43E7DF] rounded lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] hover:bg-[#43E7DF] hover:text-black duration-500 ease-in-out">Contact Us</button>
          </div>
        </div>
      </div>
    </section>

      {/* element part end */}

    </>
  )
}

export default Singup