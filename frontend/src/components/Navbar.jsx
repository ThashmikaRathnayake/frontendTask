import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {name: "HOME", path: "#"}, 
    {name: "ABOUT", path: "#"}, 
    {name: "SERVICES", path: "#"}, 
    {name: "CONTACT", path: "#"}, 
    {name: "CAREERS", path: "#"}
  ];

  return (
    <nav className={`px-[20px] py-[26px] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[80px] flex justify-between items-center relative ${isOpen ? 'bg-white text-black' : 'bg-[#4F46E5] text-white'}`}>
      
      {/* Logo */}
      {!isOpen && (
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-[152px] h-[33.37px] sm:w-[226px] sm:h-[49.62px]" />
        </div>
      )}

      {/* Desktop Menu */}
      {!isOpen && (
        <ul className="hidden md:flex gap-[28px] font-medium font-[Inter] text-[14px]">
          {links.map((link) => (
            <li key={link.name} className="hover:text-gray-300 cursor-pointer">
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}

      {/* Hamburger Button */}
      {!isOpen && (
        <button
          className="md:hidden text-3xl focus:outline-none text-white"
          onClick={() => setIsOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col px-[20px] py-[16px] sm:px-[40px]">

          <div className="flex items-center justify-between mb-[36px]">
            <a href="#" className="text-lg font-[Inter] cursor-pointer hover:text-gray-800">
              HOME
            </a>
            <button
              className="ml-4 text-3xl focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-[36px]">
            {links.slice(1).map((link) => (
              <li key={link.name} className="text-lg cursor-pointer hover:text-gray-800">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
