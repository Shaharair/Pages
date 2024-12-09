import React, { useState } from 'react'
import BannerBB from "../assets/banner4.png"
import BuisCC from "../assets/buis.png"
import BuisQQ from "../assets/buis1.png"
import BuisEE from "../assets/buis2.png"
import BannerTT from "../assets/banner5.png"
import { FaPlus, FaMinus } from "react-icons/fa6";
import BannerNN from "../assets/banner6.png"
import { AiFillLike } from "react-icons/ai";




const AboutUs = () => {

  let [story, setStory] = useState(false)
  let [storyone, setStoryOne] = useState(false)
  let [storytwo, setStoryTwo] = useState(false)

  return (
    <>

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex justify-between items-center lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[50%] w-full">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[100px]">We build E-commerce solution your business</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[100px] pt-[10px]">Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
              <div className="lg:mt-[50px] mt-[20px]">
                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#7258F7] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded hover:bg-[#7258F7] hover:text-white duration-500 ease-in-out">Contact Us</button>
                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#7258F7] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded lg:ml-[50px] ml-[20px] hover:bg-[#7258F7] hover:text-white duration-500 ease-in-out">Learn More</button>
              </div>
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <img src={BannerBB} alt="banner4" />
            </div>
          </div>
        </div>
      </section>

      {/* help part start */}

      <section className="bg-[#FCF8F8] lg:py-[70px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:pr-[800px]">We help you to go online and increase your sales</h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full">
              <img src={BuisCC} alt="buis" />
              <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Ecommerce Consulting</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[100px]">Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers.</p>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <img src={BuisQQ} alt="buis1" />
              <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Branding Strategy</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[100px]">Brands are ideas that keep growing. We think of them like machine learning. When you build a brand, you build in the power.</p>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <img src={BuisEE} alt="buis2" />
              <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black mt-[30px]">Analyse and Optimise</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[100px]">With features that let you tag and identify every action, you can see the whole story behind every unique customer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* help part end */}

      {/* what part start */}

      <section>
        <div className="container px-3 lg:mt-0 mx-auto">
          <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
            <div className="lg:w-[50%] w-full">
              <img src={BannerTT} alt="banner5" />
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">What We Do?</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:py-[20px] py-2">We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences.</p>
              <div className="">
                <div onClick={() => setStory(!story)} className="flex items-center justify-between">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Understand whole customer story</h3>
                  {story == true ? <FaMinus /> : <FaPlus />}
                </div>
                {story &&
                  <div className="lg:mt-[30px] mt-[20px]">
                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[200px]">Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.</p>
                  </div>
                }
              </div>
              <div className="lg:mt-[30px] mt-[20px]">
                <div onClick={() => setStoryOne(!storyone)} className="flex items-center justify-between">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Understand whole customer story</h3>
                  {storyone == true ? <FaMinus /> : <FaPlus />}
                </div>
                {storyone &&
                  <div className="lg:mt-[30px] mt-[20px]">
                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[200px]">Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.</p>
                  </div>
                }
              </div>
              <div className="lg:mt-[30px] mt-[20px]">
                <div onClick={() => setStoryTwo(!storytwo)} className="flex items-center justify-between">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Understand whole customer story</h3>
                  {storytwo == true ? <FaMinus /> : <FaPlus />}
                </div>
                {storytwo &&
                  <div className="lg:mt-[30px] mt-[20px]">
                    <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[200px]">Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what part end */}

      {/* content part start */}

      <section className="bg-[#FEF8E4] lg:py-[70px] py-[30px] lg:mt-[100px] mt-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-[50%] w-full">
              <img src={BannerNN} alt="banner6" />
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">01</h3>
              <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Make your business visible online</h4>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[300px] mt-[10px]">Open an online store and become an international seller. Your customers will enjoy shopping online!</p>
            </div>
          </div>
          <div className="lg:flex items-center justify-between mt-[30px] lg:mt-0">
            <div className="lg:w-[50%] w-full">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">02</h3>
              <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Make your eCommerce business stand out</h4>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[300px] mt-[10px]">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <img src={BannerNN} alt="banner6" />
            </div>
          </div>
          <div className="lg:flex items-center justify-between mt-[30px] lg:mt-0">
            <div className="lg:w-[50%] w-full">
              <img src={BannerNN} alt="banner6" />
            </div>
            <div className="lg:w-[50%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">03</h3>
              <h4 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Grow with your audience</h4>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pr-[300px] mt-[10px]">We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* content part end */}

      {/* plan part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black lg:mt-[100px] mt-[30px] lg:text-center">Choose The Right Plan</h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full">
              <div className="bg-[#E2DDFB] py-[30px]">
                <h3 className="font-sans font-semibold lg:text-[30px] text-[20px] text-black text-center">Basic</h3>
                <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] text-center mt-[10px]">Monthly Package</h5>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center mt-[10px]">$30/Month</h4>
              </div>
              <div className=" shadow">
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pl-[160px] pl-[20px] lg:pr-[150px] mt-[20px]">Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
                <div className="mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#7258F7] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded mb-[50px] hover:bg-[#7258F7] hover:text-white duration-500 ease-in-out">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <div className="bg-[#FEF8E4] py-[30px]">
                <h3 className="font-sans font-semibold lg:text-[30px] text-[20px] text-black text-center">Professional</h3>
                <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] text-center mt-[10px]">Monthly Package</h5>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center mt-[10px]">$60/Month</h4>
              </div>
              <div className=" shadow">
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pl-[160px] pl-[20px] lg:pr-[150px] mt-[20px]">Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
                <div className="mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#7258F7] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded mb-[50px] hover:bg-[#7258F7] hover:text-white duration-500 ease-in-out">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full mt-[30px] lg:mt-0">
              <div className="bg-[#E2DDFB] py-[30px]">
                <h3 className="font-sans font-semibold lg:text-[30px] text-[20px] text-black text-center">Exclusive</h3>
                <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] text-center mt-[10px]">Monthly Package</h5>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center mt-[10px]">$85/Month</h4>
              </div>
              <div className=" shadow">
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] lg:pl-[160px] pl-[20px] lg:pr-[150px] mt-[20px]">Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
                <div className="mt-[30px] text-center">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#7258F7] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded mb-[50px] hover:bg-[#7258F7] hover:text-white duration-500 ease-in-out">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* plan part end */}

      {/* people part start */}

      <section className="bg-[#FCF8F8] lg:py-[50px] py-[30px] lg:mt-[100px] mt-[30px]">
        <div className="container px-3 lg:mt-0 mx-auto">
          <h3 className="font-sans font-bold lg:text-[40px] text-[24px] pr-[50px] lg:pr-0 text-black">What People Thinks About Us </h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full bg-[#FFFF] rounded-[20px] py-[50px]">
              <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-3 ml-[30px] text-[#7258F7]">
                  <AiFillLike />
                  <AiFillLike />
                </div>
                <div className="">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Denis Zakerburg</h3>
                  <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450]">Marketing Management Remmi </h5>
                </div>
              </div>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] ml-[30px] mt-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .</p>
            </div>
            <div className="lg:w-[32%] w-full bg-[#FFFF] rounded-[20px] py-[50px] mt-[30px]">
              <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-3 ml-[30px] text-[#7258F7]">
                  <AiFillLike />
                  <AiFillLike />
                </div>
                <div className="">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Robert Anyino</h3>
                  <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450]">Marketing Management Remmi </h5>
                </div>
              </div>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] ml-[30px] mt-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .</p>
            </div>
            <div className="lg:w-[32%] w-full bg-[#FFFF] rounded-[20px] py-[50px] mt-[30px]">
              <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-3 ml-[30px] text-[#7258F7]">
                  <AiFillLike />
                  <AiFillLike />
                </div>
                <div className="">
                  <h3 className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Mehmet Parblo</h3>
                  <h5 className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450]">Marketing Management Remmi </h5>
                </div>
              </div>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#5F5450] ml-[30px] mt-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .</p>
            </div>
          </div>
        </div>
      </section>

      {/* people part end */}

    </>
  )
}

export default AboutUs