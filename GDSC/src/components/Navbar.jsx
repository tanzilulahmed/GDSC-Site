import React from 'react';
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const navLinks = ["Home", "Team", "Explore Us", "Blogs"];
  return (
    <div className="sticky top-0 z-[999] bg-blue-900/40 backdrop-blur-md py-4 sm:py-5">
      <div className="container font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img 
            src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_KzUurne.png" 
            alt="Logo" 
            className="h-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-16 xl:max-h-20 px-6" // Adjust height as needed
          />
        </div>
        <div className="links hidden md:flex items-center gap-14">
          {navLinks.map((item, index) => (
            <a
              key={index}
              className={`text-md font-light capitalize whitespace-nowrap cursor-pointer ${index === 4 && "ml-[10vw]"}`}
            >
              {item}
            </a>
          ))}
        </div>
        <LuMenu className="block md:hidden text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
