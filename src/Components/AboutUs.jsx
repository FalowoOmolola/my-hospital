import React from 'react';
import aboutImg from '../assets/aboutImg.png';

export default function AboutUs() {
    return (
        <div className="flex flex-col md:flex-row justify-between fade-in w-full p-4 md:p-8 gap-6 md:gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
                <div
                    className="rounded-[50px]"
                    style={{
                        border: "20px solid #edf1f4",
                        boxShadow: "-8px -8px 10px 0px #f7f6f9, 10px 10px 10px 5px #e3e8eb",
                    }}
                >
                    <div
                        className="rounded-[50px] overflow-hidden"
                        style={{ border: "3px solid #e0e4e7" }}
                    >
                        <img
                            src={aboutImg}
                            alt="About Us"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-1/2 px-2 sm:px-6 md:px-12">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                    About Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-7 text-[#8a8e8d]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>
                <button className="bg-[#14221f] text-white w-40 sm:w-48 md:w-60 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg">
                    Read More
                </button>
            </div>
        </div>
    );
}
