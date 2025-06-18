import React from "react";
import Image1 from "../assets/Images/image1.png"
import Image2 from "../assets/Images/image2.png"
const Home = () => {
  return (
  <main className='w-full h-full bg-[#FFFFFF] mt-[40px] min-h-screen overflow-hidden font-worksans px-4 md:px-[30px] lg:px-[100px]'>
    
          <section className="flex flex-col lg:flex-row py-[30px] md:py-[50px] lg:py-[100px] relative w-full mb-[150px]">
            <div className="relative ">
                <img src={Image1} alt="" />
            </div>
            <div className="absolute top-[60%] left-[5%] shadow-lg bg-white flex flex-col  p-8 gap-y-4 rounded-[12px] justify-center items-start">
                <button className="bg-[#4B6BFB] px-3 py-2 rounded-[6px] text-white text-[14px]">Technology</button>
                <p className="text-[36px] font-semibold w-[500px]">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="flex gap-x-4">
                    <img src={Image2} alt="" className="rounded-full"/>
                    <p className="text-[#97989F] text-[16px]">Jason Francisco</p>
                    <p className="text-[#97989F] text-[16px]">August 20, 2022</p>
                </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center bg-[#E8E8EA] rounded-[12px] py-3">
                <p className="text-[14px] text-[#696A75]">Advertisement</p>
                <p className="text-[20px] text-[#696A75] font-semibold">You can place ads</p>
                <p className="text-[18px] text-[#696A75] ">750x100</p>
          </section>
          </main>
  );
};

export default Home;
