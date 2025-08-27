import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-0">
        <div className="flex justify-between h-16">
          <a href="#home" className="flex items-center">
            <span className="text-xl text-gray-900"> 
              <h1 className="text-[#2b3d3c] font-bold">TIRUMALA</h1>
              <p className="text-black">Ortho and General care</p>
            </span>
          </a>
          
          <div className="hidden md:flex py-4 space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#2f1cb3]">Home</a>
            <a href="#about" className="text-gray-700 hover:text-[#2f1cb3]">About</a>
            <a href="#services" className="text-gray-700 hover:text-[#2f1cb3]">Services</a>
            <a href="#testimonial" className="text-gray-700 hover:text-[#2f1cb3]">Testimonial</a>
            <a href="#contact" className="text-gray-700 hover:text-[#2f1cb3]">Contact</a>
          </div>
          
          <button 
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonial" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonial</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
