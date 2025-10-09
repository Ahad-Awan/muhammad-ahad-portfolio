"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: "PROJECTS", href: "#projects" },
    { name: "SERVICES", href: "#services" },
    { name: "SKILLS", href: "#skills" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // ✅ Logo click → scroll to top only
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1314]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center items-center h-18 sm:h-20 md:h-24 lg:h-30 space-x-1 sm:space-x-2 lg:space-x-4">
          {/* 🌟 Logo */}
          <div className="flex-shrink-0">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleLogoClick}
              className={`relative w-10 h-10 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 
                rounded-full flex items-center justify-center cursor-pointer
                bg-gradient-to-br from-cyan-500 to-purple-500 p-[1px] sm:p-[2px] 
                shadow-[0_0_8px_rgba(56,189,248,0.4)] sm:shadow-[0_0_20px_rgba(56,189,248,0.5)] md:shadow-[0_0_25px_rgba(56,189,248,0.6)]
                transition-transform duration-700 ease-in-out 
                ${isHovered ? "rotate-[360deg] scale-110" : "rotate-0"}`}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center shadow-inner shadow-cyan-400/40">
                <Image
                  src="/ahadLogo.png"
                  alt="Ahad Logo"
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 🔗 Nav Links */}
          <div className="flex space-x-1 sm:space-x-2 bg-[#1A2027] p-2 sm:p-2 md:p-3 lg:py-3 rounded-full border border-gray-700">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="bg-[#030404] text-gray-300 px-2 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-1.5 rounded-full border border-gray-700 
                transition-all duration-300 text-[7px] sm:text-[10px] md:text-sm lg:text-base font-medium 
                hover:bg-white hover:text-black hover:scale-105 hover:font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
