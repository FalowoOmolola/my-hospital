import React from 'react';

export default function Hero() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6 lg:px-15 py-5 lg:pb-10 gap-6 sm:gap-10">
            <div className="flex flex-col gap-3 w-full sm:w-1/2 max-w-xs sm:max-w-sm lg:max-w-xl">
                <p className="bg-[#14221f] text-white py-1 px-3 rounded-full text-[17px] sm:text-sm lg:text-base w-fit ml-20 sm:mx-0">
                    Medical Center
                </p>

                <h1 className="text-[#505457] font-semibold text-[30px] sm:text-lg lg:text-5xl xl:text-[40px] leading-snug sm:leading-tight text-center sm:text-left">
                    Fast Forward to Better Health
                </h1>

                <p className="text-[#b6babb] text-[15px] sm:text-sm lg:text-lg xl:text-xl leading-relaxed text-center sm:text-left">
                    There is nothing more important than our good health because
                    that is our principal asset for our good future.
                </p>

                <div className="flex flex-row sm:flex-row gap-2 sm:justify-start justify-center items-center text-[12px] sm:text-sm lg:text-base">
                    <button className="bg-[#14221f] w-30 sm:w-32 lg:w-40 py-1.5 lg:py-2 rounded text-white">
                        Appointment
                    </button>
                    <button className="border border-[#b6babb] w-30 sm:w-32 lg:w-40 py-1.5 lg:py-2 rounded text-[#636869]">
                        <strong>123456789</strong>
                    </button>
                </div>
            </div>

            <div className="w-full sm:w-1/2 flex justify-center">
                <img
                    src="/heroImg.png" alt="Hero"
                    className="w-[100%] sm:w-[100%] lg:w-full max-w-[500px] sm:max-w-[300px] lg:max-w-[480px] xl:max-w-[550px] object-contain"
                />
            </div>
        </div>
    );
}
