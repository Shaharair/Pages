import React from 'react'
import GallaryEE from "../assets/gallary.png"
import GallaryDD from "../assets/gallary1.png"
import GallarySS from "../assets/gallary2.png"
import GallaryAA from "../assets/gallary3.png"
import RightRR from "../assets/right2.png"
import ImagesWW from "../assets/images.png"

const Login = () => {
  return (
    <>

      <section className="bg-[#6B62C5] lg:pt-[70px] py-[30px] lg:pb-[150px] pb-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="">
            <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-white lg:text-center capitalize">You’re unique.Your Website Should be too</h3>
            <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#E6E5F3] lg:pl-[300px] lg:pr-[300px]">A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>
            <div className="lg:mt-[60px] mt-[30px] text-center">
              <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] capitalize hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out">get free quoto</button>
              <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-white border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] capitalize lg:ml-[50px] ml-[10px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* gallary part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex items-center justify-between relative flex-wrap opacity-0 lg:opacity-100">
            <div className="lg:w-[24%] w-[48%]">
              <img className="absolute top-0" src={GallaryEE} alt="gallary" />
            </div>
            <div className="lg:w-[24%] w-[48%]">
              <img src={GallaryDD} alt="gallary1" />
            </div>
            <div className="lg:w-[24%] w-[48%]">
              <img className="absolute top-0" src={GallarySS} alt="gallary2" />
            </div>
            <div className="lg:w-[24%] w-[48%]">
              <img className="absolute top-0" src={GallaryAA} alt="gallary3" />
            </div>
          </div>
          <div className="flex items-center justify-between lg:mt-[60px] mt-[-350px] flex-wrap">
            <div className="lg:w-[24%] w-[48%]">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00]">53k</h3>
              <p className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Happy client</p>
            </div>
            <div className="lg:w-[24%] w-[48%]">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00]">10k</h3>
              <p className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Projects Done</p>
            </div>
            <div className="lg:w-[24%] w-[48%] mt-[20px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00]">120</h3>
              <p className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Gets Award</p>
            </div>
            <div className="lg:w-[24%] w-[48%] mt-[20px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00]">16</h3>
              <p className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">operated yEARS</p>
            </div>
          </div>
        </div>
      </section>

      {/* gallary part end */}

      {/* why part start */}

      <section className="bg-[#FDFDFD] lg:py-[70px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex items-center justify-between lg:mt-[100px] mt-[30px]">
            <div className="lg:w-[60%] w-full">
              <div className="flex items-center gap-[30px]">
                <div className="flex items-center relative">
                  <h3 className="bg-[#1BBF00] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full"></h3>
                  <h3 className="bg-[#CBC8F0] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full absolute left-[10px]"></h3>
                </div>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] lg:pr-[500px]">We solve real-world problems through people and the web.</p>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <div className="flex items-center relative">
                  <h3 className="bg-[#1BBF00] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full"></h3>
                  <h3 className="bg-[#CBC8F0] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full absolute left-[10px]"></h3>
                </div>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] lg:pr-[500px]">We solve real-world problems through people and the web.</p>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <div className="flex items-center relative">
                  <h3 className="bg-[#1BBF00] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full"></h3>
                  <h3 className="bg-[#CBC8F0] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full absolute left-[10px]"></h3>
                </div>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] lg:pr-[500px]">We solve real-world problems through people and the web.</p>
              </div>
              <div className="flex items-center gap-[30px] mt-[30px]">
                <div className="flex items-center relative">
                  <h3 className="bg-[#1BBF00] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full"></h3>
                  <h3 className="bg-[#CBC8F0] lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] rounded-full absolute left-[10px]"></h3>
                </div>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] lg:pr-[500px]">We solve real-world problems through people and the web.</p>
              </div>
            </div>
            <div className="lg:w-[40%] w-full mt-[30px] lg:mt-0">
              <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black">Why Choose Us</h3>
              <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] pt-[20px]">We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.</p>
              <div className="lg:mt-[60px] mt-[30px]">
                <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why part end */}

      {/* do part start */}

      <section className="bg-[#F6F5FF] lg:py-[80px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">What We Do</h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] group-hover:text-white">We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">web Design & Dev </h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] lg:pr-[100px] pr-[50px] group-hover:text-white">Content Marketing is the other fold of online advertisement. If you are looking to build </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">Software Dev </h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] lg:pr-[200px] pr-[50px] group-hover:text-white">Social Media has changed the way we interact & do business while creating </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center justify-between mt-[30px]">
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">Content Writing </h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] lg:pr-[200px] pr-[50px] group-hover:text-white">Social Media has changed the way we interact & do business while creating </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">Digital Marketing </h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] lg:pr-[200px] pr-[50px] group-hover:text-white">Social Media has changed the way we interact & do business while creating </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6B62C5] rounded-[20px] duration-700 ease-in-out">
                <h3 className="font-sans font-bold lg:text-[24px] text-[18px] text-black lg:ml-[50px] ml-[20px] group-hover:text-white">Support & Training </h3>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#6C7D93] pt-[20px] lg:ml-[50px] ml-[20px] lg:pr-[100px] pr-[50px] group-hover:text-white">Content Marketing is the other fold of online advertisement. If you are looking to build </p>
                <div className="mt-[30px]">
                  <button className="font-sans font-semibold lg:text-[18px] text-[14px] text-black border-2 border-[#1BBF00] lg:w-[200px] w-[150px] lg:h-[60px] h-[50px] rounded-[30px] hover:bg-[#1BBF00] hover:text-white duration-500 ease-in-out lg:ml-[50px] ml-[20px]">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* do part end */}

      {/* right part start */}

      <section className="bg-[#F9F9FB] lg:py-[70px] py-[30px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black text-center lg:mt-[100px] mt-[30px]">Choose The Right Plan</h3>
          <div className="lg:flex items-center justify-between lg:mt-[60px] mt-[30px]">
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6001D3] duration-700 ease-in-out rounded-[20px]">
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black ml-[50px] group-hover:text-white lg:pb-[30px] pb-[20px]">Basic</h3>
                <div className="pl-[50px] bg-[#ECEDF0] py-3">
                  <img src={RightRR} alt="right" />
                </div>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00] ml-[50px] lg:pt-[30px] pt-[20px]">$160</h4>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] ml-[50px] lg:pr-[200px] group-hover:text-white lg:pt-[20px] pt-[10px]"> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6001D3] duration-700 ease-in-out rounded-[20px]">
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black ml-[50px] group-hover:text-white lg:pb-[30px] pb-[20px]">Professional</h3>
                <div className="pl-[50px] bg-[#ECEDF0] py-3">
                  <img src={RightRR} alt="right" />
                </div>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00] ml-[50px] lg:pt-[30px] pt-[20px]">$240</h4>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] ml-[50px] lg:pr-[200px] group-hover:text-white lg:pt-[20px] pt-[10px]"> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
              </div>
            </div>
            <div className="lg:w-[32%] w-full shadow rounded-[20px] group relative mt-[30px] lg:mt-0">
              <div className="lg:py-[50px] py-[30px] group-hover:bg-[#6001D3] duration-700 ease-in-out rounded-[20px]">
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black ml-[50px] group-hover:text-white lg:pb-[30px] pb-[20px]">Exclusive</h3>
                <div className="pl-[50px] bg-[#ECEDF0] py-3">
                  <img src={RightRR} alt="right" />
                </div>
                <h4 className="font-sans font-bold lg:text-[40px] text-[24px] text-[#1BBF00] ml-[50px] lg:pt-[30px] pt-[20px]">$340</h4>
                <p className="font-sans font-medium lg:text-[16px] text-[14px] text-[#726E9E] ml-[50px] lg:pr-[200px] group-hover:text-white"> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* right part end */}

      {/* like part start */}

      <section>
        <div className="container px-3 lg:px-0 mx-auto">
          <div className="lg:flex justify-between lg:mt-[100px] mt-[30px]">
            <div className="lg:w-[40%] w-full">
              <img src={ImagesWW} alt="images" />
            </div>
            <div className="lg:w-[60%] w-full">
              <div className="">
                <ul className="flex items-center lg:gap-[50px] gap-4 mt-[30px] lg:mt-0">
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">News </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Tomas Nikelson </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Posted</li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">5 Hours Ago </li>
                </ul>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black pt-[20px]">Punto Pago Allows Quick And Secure Payments For Services In Panama</h3>
                <div className="mt-[20px]">
                  <button className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Read more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between lg:mt-[50px] mt-[30px]">
            <div className="lg:w-[40%] w-full">
              <img src={ImagesWW} alt="images" />
            </div>
            <div className="lg:w-[60%] w-full">
              <div className="">
                <ul className="flex items-center lg:gap-[50px] gap-4 mt-[30px] lg:mt-0">
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">News </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Tomas Nikelson </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Posted</li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">5 Hours Ago </li>
                </ul>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black pt-[20px]">The User Can Also Replenish A Balance Make Remittances </h3>
                <div className="mt-[20px]">
                  <button className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Read more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between lg:mt-[50px] mt-[30px]">
            <div className="lg:w-[40%] w-full">
              <img src={ImagesWW} alt="images" />
            </div>
            <div className="lg:w-[60%] w-full">
              <div className="">
                <ul className="flex items-center lg:gap-[50px] gap-4 mt-[30px] lg:mt-0">
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">News </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Tomas Nikelson </li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">Posted</li>
                  <li className="font-sans font-semibold lg:text-[18px] text-[14px] text-black hover:text-[#1BBF00] duration-500 ease-in-out">5 Hours Ago </li>
                </ul>
                <h3 className="font-sans font-bold lg:text-[40px] text-[24px] text-black pt-[20px]">The User Can Also Replenish A Balance Make Remittances </h3>
                <div className="mt-[20px]">
                  <button className="font-sans font-semibold lg:text-[24px] text-[18px] text-black">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* like part end */}

    </>
  )
}

export default Login