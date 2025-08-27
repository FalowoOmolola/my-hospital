import React from 'react';

export default function Footer() {
  return (
    <div className="bg-[#1a3835] text-white pt-2 fade-in">

      <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8 gap-8">
        
        <div className="flex flex-col gap-4 w-full md:w-1/3 items-center md:items-start">
          <h1 className="text-4xl md:text-[45px] md:pl-[79px] pt-4 md:pt-[30px]">Logo</h1>
        </div>

        <div className="w-full md:w-2/3 flex justify-center">
          <div className=" w-full flex flex-row sm:flex-row flex-wrap gap-8 md:gap-[50px] pb-8 md:pb-[140px] pt-6 md:pt-[50px]">

            <div>
              <h4>Links</h4>
              <ul className=" space-y-1 text-xs sm:text-lg ">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="-[2px]">Departments</h4>
              <ul className=" space-y-1 text-xs sm:text-lg ">
                <li>Ortho</li>
                <li>Physiotheraphy</li>
              </ul>
            </div>

            <div className="pl-2 space-y-1 ">
              <h4 className=" pl-0">Contact Info</h4>
              <div className="space-y-0.5 text-xs sm:text-lg ">
                <p>Phone number</p>
                <p>Address</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <hr className="border-gray-500" />

      <div>
        <p className="flex justify-center items-center text-center p-2 text-sm md:text-base">
          copyright @ hospital name | Powered by Techhyve Connect
        </p>
      </div>
    </div>
  );
}
