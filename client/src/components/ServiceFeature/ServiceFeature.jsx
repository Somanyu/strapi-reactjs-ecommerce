import React from 'react'
import { BsCalendar2Week, BsCash, BsStars, BsTruck } from "react-icons/bs"

const ServiceFeature = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg font-primary mb-6 text-3xl text-center font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <BsStars className="absolute -top-2 left-3 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" />
                        </span>
                        Some of our good qualities
                    </h2>
                    <p className="text-base text-center font-secondary text-gray-700 md:text-lg">
                        Sed ut perspiciatis nation omnis site natus error sit voluptatem
                        accusantium dolorem rem aerial, ease ipsa quae.
                    </p>
                </div>
                <div className="grid grid-cols-3 lg:w-5/6 lg:mx-auto mb-10 sm:grid-cols-3 lg:grid-cols-3">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#F9B658]/70 sm:w-22 sm:h-22">
                            <BsTruck className="w-10 h-10 text-[#E96952] sm:w-9 sm:h-9" />
                        </div>
                        <h6 className="mb-2 font-primary font-semibold leading-5">Free delivery</h6>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#F9B658]/70 sm:w-22 sm:h-22">
                            <BsCalendar2Week className="w-10 h-10 text-[#E96952] sm:w-9 sm:h-9" />
                        </div>
                        <h6 className="mb-2 font-primary font-semibold leading-5">7-day delivery</h6>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#F9B658]/70 sm:w-22 sm:h-22">
                            <BsCash className="w-10 h-10 text-[#E96952] sm:w-9 sm:h-9" />
                        </div>
                        <h6 className="mb-2 font-primary font-semibold leading-5">Refund</h6>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceFeature