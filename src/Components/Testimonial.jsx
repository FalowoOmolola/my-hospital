import React from 'react'
import { FaUser } from 'react-icons/fa6'
import aboutimg from '../assets/aboutImg.png'
import { MdOutlineStar } from 'react-icons/md'

export default function Testimonial() {
    return (
        <>
            <div>
                <h1 className="text-center text-black text-xl mt-10 md:text-2xl lg:text-3xl mb-4">
                    Testimonial
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between w-full p-4 md:p-8 gap-8">
                
                <div className="flex-1 flex flex-col gap-6">
                    {Array(2).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className="bg-[#edf1f4] border-2 border-[#e3e8eb] rounded-3xl p-4 md:p-6 shadow-[ -8px_-8px_10px_0px_#f7f6f9,10px_10px_10px_5px_#e3e8eb]"
                        >
                            <p className="leading-6 text-[#8a8e8d] text-sm md:text-base lg:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                            </p>
                            <div className="flex flex-row gap-4 mt-4 items-center">
                                <FaUser className="bg-[#0c1e1c] text-white text-lg md:text-xl p-2 rounded-full" />
                                <div className="leading-[25px]">
                                    <h6 className="m-0 text-black">Uday</h6>
                                    <div className="flex text-[#fcdd6c] text-sm">
                                        {Array(5).fill(0).map((_, star) => <MdOutlineStar key={star} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex-1 flex justify-center">
                    <img
                        src={aboutimg}
                        alt="Hero"
                        className="w-full max-w-xs md:max-w-sm lg:max-w-lg object-contain"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    {Array(2).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className="bg-[#edf1f4] border-2 border-[#e3e8eb] rounded-3xl p-4 md:p-6 shadow-[ -8px_-8px_10px_0px_#f7f6f9,10px_10px_10px_5px_#e3e8eb]"
                        >
                            <p className="leading-6 text-[#8a8e8d] text-sm md:text-base lg:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                            </p>
                            <div className="flex flex-row gap-4 mt-4 items-center">
                                <FaUser className="bg-[#0c1e1c] text-white text-lg md:text-xl p-2 rounded-full" />
                                <div className="leading-[25px]">
                                    <h6 className="m-0 text-black">Uday</h6>
                                    <div className="flex text-[#fcdd6c] text-sm">
                                        {Array(5).fill(0).map((_, star) => <MdOutlineStar key={star} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
