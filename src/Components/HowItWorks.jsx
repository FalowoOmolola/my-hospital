import React from 'react'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";

export default function HowItWorks() {
  return (
    <div className="px-2 py-4 sm:px-18 sm:py-6 fade-in">
      <div className="flex lg:flex-row justify-between gap-6 mb-6">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl lg:text-3xl font-semibold text-[#161819]">How it Works</h1>
        </div>
        <div className="w-full lg:w-1/2 text-[#b6babb] text-sm lg:text-base leading-relaxed">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..."
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {[
          { icon: <FaUserDoctor />, title: "Choose your Doctor" },
          { icon: <FaRegCalendarCheck />, title: "Book an Appointment" },
          { icon: <FaUserDoctor />, title: "Consult with Doctor" },
          { icon: <TbMoneybag />, title: "Pay your Medical Bills" }
        ].map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start text-center shadow-md bg-[#edf1f4] rounded-xl px-4 py-6 w-[180px] h-[280px]"
          >
            <div
              className="bg-[#0c1e1c] text-white text-xl p-3 rounded-full border-[6px] border-[#1c3330] mb-12 mt-12"
            >
              {step.icon}
            </div>
            <h5 className="text-sm font-medium text-black ">
              {step.title.split(" ").slice(0, 2).join(" ")} <br /> {step.title.split(" ").slice(2).join(" ")}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
