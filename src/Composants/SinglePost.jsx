import React from "react";
import Image9 from "../assets/Images/Image9.png";
import Image10 from "../assets/Images/Image10.png";
import Image11 from "../assets/Images/Image11.png";
const SinglePost = ({ theme }) => {
  return (
    <main
      className={`w-full h-full mt-[40px] min-h-screen overflow-hidden px-4 md:px-[30px] lg:px-[100px] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
     
     <section className=" mt-[5%] flex flex-col w-[50%] px-[15%]  font-worksans">
                    <button className="bg-[#4B6BFB] px-3 py-2 rounded-[6px] text-white text-[14px] w-fit">
                 Technology
               </button>
               <p className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold w-[750px]">
                 The Impact of Technology on the Workplace: How Technology is Changing
               </p>
                <div className="md:flex  gap-x-4 items-center md:w-[600px]">
                           <img src={Image9} alt="" className="rounded-full w-8 h-8" />
                           <p className="text-[#97989F] text-[14px] sm:text-[16px]">Tracey Wilson</p>
                           <p className="text-[#97989F] text-[14px] sm:text-[16px]">August 20, 2022</p>
                         </div>
                       
                 </section>
                 <div className="px-[15%] py-7">
                         <img src={Image10} alt="" />
                 </div>
                 <section className="py-3 flex-flex-col sourceSerif w-full px-[15%]">
                        <p className="text-[20px]">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
                        <p className="py-4 text-[20px]">One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                        <p className="py-3 text-[24px] font-semibold">Research Your Destination</p>
                        <p className=" text-[20px]">Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
                        <p className="text-[20px] py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
                         <p className="py-3 text-[24px] font-semibold">Plan Your Itinerary</p>
                        <p className=" text-[20px]">While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
                        <p className="text-[20px] py-3">Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
                    </section> 
                              <section
        className={`mx-auto w-full max-w-[800px] flex flex-col sourceSerif justify-center items-center rounded-[12px] py-3 mt-[60%] md:mt-0 ${
          theme === "light"
            ? "bg-[#E8E8EA] text-black"
            : "bg-[#2a2a2a] text-white"
        }`}
      >
        <p className="text-[24px] p-4" style={{ fontStyle: 'italic' }}>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
   
      </section>
            <div className="px-[15%] py-7">
                         <img src={Image11} alt="" />
                 </div>
                 <section
        className={`mx-auto w-full max-w-[800px] flex flex-col justify-center font-worksans items-center rounded-[12px] py-3 mt-[60%] md:mt-0 ${
          theme === "light"
            ? "bg-[#E8E8EA] text-[#696A75]"
            : "bg-[#2a2a2a] text-[#d1d1d1]"
        }`}
      >
        <p className="text-[14px]">Advertisement</p>
        <p className="text-[20px] font-semibold">You can place ads</p>
        <p className="text-[18px]">750x100</p>
      </section>
       <section className="py-3 flex-flex-col sourceSerif w-full px-[15%] sourceSerif">
                       
                        <p className="py-3 text-[24px] font-semibold">Pack Lightly and Smartly</p>
                        <p className=" text-[20px]">Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
                         <p className="py-3 text-[24px] font-semibold">Stay Safe and Healthy</p>
                        <p className=" text-[20px]">Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
                        <p className="py-3 text-[24px] font-semibold">Immerse Yourself in the Local Culture</p>
                        <p className=" text-[20px]">One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                        <p className="py-3 text-[24px] font-semibold">Capture Memories</p>
                        <p className=" text-[20px]">Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
                        <p className="py-3 text-[24px] font-semibold">Conclusion:</p>
                        <p className=" text-[20px]">Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
                    </section> 
    </main>
  );
};

export default SinglePost;
