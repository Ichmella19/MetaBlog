import React from "react";
import Image1 from "../assets/Images/image1.png";
import Image2 from "../assets/Images/image2.png";
import Rectangle1 from "../assets/Images/Rectangle1.png";
import Image4 from "../assets/Images/Image4.png";
import Image3 from "../assets/Images/Image3.png";
import Image6 from "../assets/Images/Image6.png";
import Image7 from "../assets/Images/Image7.png";
import Rectangle2 from "../assets/Images/Rectangle2.png";
import Rectangle3 from "../assets/Images/Rectangle3.png";
import Rectangle4 from "../assets/Images/Rectangle4.png";
import Rectangle5 from "../assets/Images/Rectangle5.png";
import Rectangle6 from "../assets/Images/Rectangle6.png";
import Rectangle7 from "../assets/Images/Rectangle7.png";
import Rectangle9 from "../assets/Images/Rectangle9.png";
import Rectangle10 from "../assets/Images/Rectangle10.png";

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Jason Francisco",
    date: "August 20, 2022",
    imageUrl: Rectangle1,
    avatarUrl: Image4,
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Sarah Johnson",
    date: "September 5, 2022",
    imageUrl: Rectangle2,
    avatarUrl: Image2,
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Michael Chen",
    date: "October 12, 2022",
    imageUrl: Rectangle3,
    avatarUrl: Image7,
  },
  {
    id: 4,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Emma Rodriguez",
    date: "November 3, 2022",
    imageUrl: Rectangle4,
    avatarUrl: Image3,
  },
  {
    id: 5,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "David Wilson",
    date: "December 15, 2022",
    imageUrl: Rectangle5,
    avatarUrl: Image6,
  },
  {
    id: 6,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Olivia Parker",
    date: "January 7, 2023",
    imageUrl: Rectangle6,
    avatarUrl: Image7,
  },
  {
    id: 7,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "James Taylor",
    date: "February 18, 2023",
    imageUrl: Rectangle7,
    avatarUrl: Image2,
  },
  {
    id: 8,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Sophia Lee",
    date: "March 22, 2023",
    imageUrl: Rectangle9,
    avatarUrl: Image7,
  },
  {
    id: 9,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    author: "Robert Kim",
    date: "April 5, 2023",
    imageUrl: Rectangle10,
    avatarUrl: Image3,
  },
];

const Home = ({ theme }) => {
  return (
  <main
  className={`w-full h-full mt-10 min-h-screen overflow-hidden font-worksans px-4 md:px-6 lg:px-[100px] ${
    theme === "light" ? "bg-white text-black" : "bg-black text-white"
  }`}
>
  {/* HERO */}
  <section className="flex flex-col lg:flex-row py-8 md:py-12 lg:py-[100px] relative w-full mb-[150px]">
    <div className="relative w-full">
      <img src={Image1} alt="" className="w-full h-auto object-cover" />
    </div>
    <div
      className={`absolute top-[60%] left-[5%] shadow-lg flex flex-col p-4 sm:p-6 md:p-8 gap-y-4 rounded-[12px] justify-center items-start w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] ${
        theme === "light" ? "bg-white text-black" : "bg-[#1e1e1e] text-white"
      }`}
    >
      <button className="bg-[#4B6BFB] px-3 py-2 rounded-[6px] text-white text-[14px]">
        Technology
      </button>
      <p className="text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-snug sm:leading-snug">
        The Impact of Technology on the Workplace: How Technology is Changing
      </p>
      <div className="flex flex-wrap gap-x-4 items-center">
        <img src={Image2} alt="" className="rounded-full w-8 h-8" />
        <p className="text-[#97989F] text-[14px] sm:text-[16px]">Jason Francisco</p>
        <p className="text-[#97989F] text-[14px] sm:text-[16px]">August 20, 2022</p>
      </div>
    </div>
  </section>

  {/* ADVERTISEMENT */}
  <section
    className={`mx-auto w-full max-w-[750px] flex flex-col justify-center items-center rounded-[12px] py-3 mt-[80%] md:mt-0 ${
      theme === "light"
        ? "bg-[#E8E8EA] text-[#696A75]"
        : "bg-[#2a2a2a] text-[#d1d1d1]"
    }`}
  >
    <p className="text-[14px]">Advertisement</p>
    <p className="text-[18px] sm:text-[20px] font-semibold">You can place ads</p>
    <p className="text-[16px] sm:text-[18px]">750x100</p>
  </section>

  {/* POSTS */}
  <section className="py-8 md:py-10">
    <p className="text-start font-bold text-[22px] sm:text-[24px] mb-6">Latest Post</p>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className={`border-[1px] flex flex-col p-4 sm:p-6 text-start rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
              theme === "light"
                ? "bg-white border-black"
                : "bg-[#1f1f1f] border-gray-700"
            }`}
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover mb-4 rounded-[12px]"
            />
            <button className="self-start bg-[#4B6BFB0D] hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm mb-3 transition-colors">
              <p className="text-[14px] text-[#4B6BFB]">Technology</p>
            </button>
            <h3 className="font-semibold text-[18px] sm:text-[20px] md:text-[24px] mb-4 text-inherit min-h-[72px]">
              {post.title}
            </h3>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={post.avatarUrl}
                alt={post.author}
                className="rounded-full w-10 h-10 object-cover flex-shrink-0"
              />
              <div className="flex gap-x-5 flex-wrap">
                <p className="text-gray-400 font-medium truncate">{post.author}</p>
                <p className="text-gray-500 text-sm truncate">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ADVERTISEMENT DUPLICATE */}
  <section
    className={`mx-auto w-full max-w-[750px] flex flex-col justify-center items-center rounded-[12px] py-3 ${
      theme === "light"
        ? "bg-[#E8E8EA] text-[#696A75]"
        : "bg-[#2a2a2a] text-[#d1d1d1]"
    }`}
  >
    <p className="text-[14px]">Advertisement</p>
    <p className="text-[18px] sm:text-[20px] font-semibold">You can place ads</p>
    <p className="text-[16px] sm:text-[18px]">750x100</p>
  </section>
</main>

  );
};

export default Home;
