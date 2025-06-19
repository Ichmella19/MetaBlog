import React from "react";
import Post from '../assets/Images/post.jpg'
const Blog =({ theme }) => {

   return(
     <main
      className={`w-full h-full mt-[40px] min-h-screen overflow-hidden font-worksans px-4 md:px-[30px] lg:px-[100px] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* HERO */}
      <section className=" py-[30px] md:py-[50px] lg:py-[100px] relative w-full mb-[150px]">
            <img src={Post} alt="" className="rounded-[12px]"/>
      </section>
      </main>
   )
}
export default Blog