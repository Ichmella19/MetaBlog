import React from "react";
import { Mail } from "lucide-react";
import Logo1 from "../assets/Images/Logo1.png";
import MetaBlog from "../assets/Images/MetaBlog.png";
import Logo2 from "../assets/Images/Logo2.png";
import MetaBlog1 from "../assets/Images/MetaBlog1.png";
const Footer = ({ theme })  => {
  return (
    <footer className={`"bg-[#F9FAFB] text-[#4B5563] px-4 md:px-8 lg:px-[100px] pt-[80px] pb-[40px] font-worksans" ${
        theme === "light" ? "bg-white text-[#3B3C4A]" : "bg-black text-[#97989F]"
      }`}>
      <div className="flex flex-col lg:flex-row justify-between gap-12  pb-10">
        {/* About */}
        <div className="lg:w-1/4">
          <h3 className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>About</h3>
          <p className="text-[16px] mb-4 text-[#696A75] font-worksans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam
          </p>
          <p className="text-[16px] text-[#3B3C4A] font-worksans"><span className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>Email :</span> info@jstemplate.net</p>
          <p className="text-[16px] text-[#3B3C4A] font-worksans"><span className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>Phone :</span> 880 123 456 789</p>
        </div>

        {/* Quick Links */}
        <div className="lg:w-1/5 ">
          <h3 className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>Quick Link</h3>
          <ul className="space-y-2 font-worksans">
            <li className="text-[16px] text-[#3B3C4A]">Home</li>
            <li className="text-[16px] text-[#3B3C4A]">About</li>
            <li className="text-[16px] text-[#3B3C4A]">Blog</li>
            <li className="text-[16px] text-[#3B3C4A]">Archived</li>
            <li className="text-[16px] text-[#3B3C4A]">Author</li>
            <li className="text-[16px] text-[#3B3C4A]">Contact</li>
          </ul>
        </div>

        {/* Category */}
        <div className="lg:w-1/5">
          <h3 className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>Category</h3>
          <ul className="space-y-2 font-worksans">
            <li className="text-[16px] text-[#3B3C4A]">Lifestyle</li>
            <li className="text-[16px] text-[#3B3C4A]">Technology</li>
            <li className="text-[16px] text-[#3B3C4A]">Travel</li>
            <li className="text-[16px] text-[#3B3C4A]">Business</li>
            <li className="text-[16px] text-[#3B3C4A]">Economy</li>
            <li className="text-[16px] text-[#3B3C4A]">Sports</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:w-1/4">
          <h3 className={`"text-[#181A2A] font-semibold text-[18px] mb-4" ${
        theme === "light" ? " text-[#3B3C4A]" : "text-white"
      }`}>Weekly Newsletter</h3>
          <p className="text-[16px] text-[#3B3C4A] mb-4">Get blog articles and offers via email</p>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
            <Mail className="w-5 h-5 text-gray-400" />
          </div>
          <button className="mt-4 w-full bg-[#4B6BFB] text-white text-sm py-2 rounded-md hover:bg-[#3a56c2] transition duration-200">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-6 gap-3">
        <div className="flex gap-x-2 items-center justify-center">
      <img src={theme === "light" ? Logo1 : Logo2} alt="Logo" />

      <div className="flex flex-col">
        <img
          src={theme === "light" ? MetaBlog : MetaBlog1}
          alt="MetaBlog"
          className="w-20 h-5"
        />

        <p
          className={`font-semibold text-[14px] ${
            theme === "light" ? "text-[#3B3C4A]" : "text-white"
          }`}
        >
          © JS Template 2023. All Rights Reserved.
        </p>
      </div>
    </div>
        
        <div className="flex gap-6 font-worksans">
          <p className="text-[16px] text-[#3B3C4A]">Terms of Use</p>
          <p className="text-[16px] text-[#3B3C4A]">Privacy Policy</p>
          <p className="text-[16px] text-[#3B3C4A]">Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
