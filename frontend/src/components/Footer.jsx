import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white pt-[40px] pb-[20px] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[80px] flex flex-col justify-between">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between pb-6 flex-grow">
        
        {/* Left Side */}
        <div className="flex flex-col max-w-[400px]">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="Logo" className="w-[120px] h-auto" />
          </div>
          <p className="text-sm leading-relaxed text-white">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-[128px] mt-10 md:mt-0">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-3">Our Technologies</h2>
            <ul className="space-y-1 text-sm text-white">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-3">Our Services</h2>
            <ul className="space-y-1 text-sm text-white">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-3 mt-6">
        <div className="w-[630px] border-b border-white"></div>
        <div className="flex items-center gap-2 text-xs">
          <p>Privacy Policy</p>
          <span className="inline">|</span>
          <p>Terms & Conditions</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
