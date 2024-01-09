import React from 'react';
import { TfiFaceSmile, TfiHeart, TfiPackage } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="mb-2">
                <div className="bg-[#FDF3F2]">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block font-fredoka px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">About us</p>
                            </div>
                            <h2 className="max-w-lg font-dynaPuff mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                        <defs>
                                            <pattern id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e" x="0" y="0" width=".135" height=".30" >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)" width="52" height="24" />
                                    </svg>
                                    <span className="relative">The</span>
                                </span>{' '}
                                quick, brown fox jumps over a lazy dog
                            </h2>
                            <p className="text-base font-fredoka text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                        <div className="flex items-center sm:justify-center">
                            <Link to="/products/1" className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 font-dynaPuff rounded shadow-md bg-[#E77190] hover:bg-[#E77190]/80 focus:shadow-outline focus:outline-none">
                                Shop now
                            </Link>
                            <a href="#learnMore" aria-label="" className="inline-flex font-dynaPuff items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-[#7F68A7]">Learn more</a>
                        </div>
                    </div>
                </div>
                <div className="relative px-4 sm:px-0">
                    <div className="absolute inset-0 bg-[#FDF3F2] h-1/2" />
                    <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <TfiFaceSmile className="w-6 h-6 text-purple-400" />
                            </div>
                            <p className="font-bold font-dynaPuff tracking-wide text-gray-800">Make it better</p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <TfiHeart className="w-6 h-6 text-purple-400" />
                            </div>
                            <p className="font-bold font-dynaPuff tracking-wide text-gray-800">Do it faster</p>
                        </div>
                        <div className="inline-block p-8 text-center">
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                                <TfiPackage className="w-6 h-6 text-purple-400" />
                            </div>
                            <p className="font-bold font-dynaPuff tracking-wide text-gray-800">Working harder</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='learnMore' className="mx-auto w-5/6">
                <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
                    <div className="container">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="flex items-center -mx-3 sm:-mx-4">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4">
                                            <img
                                                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4">
                                            <img
                                                src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                alt=""
                                                className="w-full rounded-2xl"
                                            />
                                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                                    <defs>
                                                        <pattern id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e" x="0" y="0" width=".135" height=".30" >
                                                            <circle cx="1" cy="1" r=".7" />
                                                        </pattern>
                                                    </defs>
                                                    <rect fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)" width="52" height="24" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 lg:mt-0">
                                    <span className="block font-fredoka mb-2 text-lg font-semibold text-primary">
                                        Who are we
                                    </span>
                                    <h2 className="mb-8 font-dynaPuff text-3xl font-bold text-dark sm:text-4xl">Make your customers happy by giving services.</h2>
                                    <p className="mb-8 font-fredoka text-base text-body-color">
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem Ipsum is that it has a more-or-less.
                                    </p>
                                    <a
                                        href="/#"
                                        className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



        </div>
    )
}

export default About