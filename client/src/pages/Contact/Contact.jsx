import axios from 'axios';
import React, { useState } from 'react';
import { BsFillEmojiSmileFill, BsPersonBadge } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from 'react-toastify';

const Contact = () => {

    const [data, setFormData] = useState({
        fullName: '',
        email: '',
        issueType: '',
        feedback: '',
        status: 'Pending'
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...data, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:1337/api/contacts', { data });
            toast.success("Feedback received. We will contact you 😉")
            // console.log('Response:', response.data);
        } catch (error) {
            toast.error(error.message)
            console.error('Error:', error);
        }
    };

    return (
        <div>

            <section className="py-32 bg-white sm:py-30 lg:py-36">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                        <div className="flex flex-col justify-between lg:py-5">
                            <div>
                                <h2 className="text-3xl font-bold leading-tight font-primary text-black sm:text-4xl lg:leading-tight lg:text-5xl">It's time to build something exciting!</h2>
                                <p className="max-w-xl mx-auto mt-4 text-base font-secondary leading-relaxed text-black/80">Amet minim mollie non desert ullage est sit alisa dolor do amet sint. Veldt officia consequent dais.</p>

                                {/* <img className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" /> */}

                                {/* <img className="hidden w-full translate-x-24 translate-y-8 md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" /> */}
                            </div>
                        </div>

                        <div className="lg:pl-12">
                            <div className="overflow-hidden bg-white border-2 border-black shadow-[rgba(0,0,0)_1.95px_1.95px_2.6px] rounded-md">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-3xl font-primary font-semibold text-black">Need help? Get in touch.</h3>
                                    <p className="mt-4 font-secondary text-base text-black/80">Amet minim mollie non desert ullage est sit alisa dolor do amet sint.</p>

                                    <div className="mt-4">
                                        <div className="space-y-6">
                                            <div>
                                                <div>
                                                    <label htmlFor="fullName" className="block font-secondary font-medium text-base text-gray-900 dark:text-gray-300">Full name</label>
                                                    <div className="relative flex items-center mt-2">
                                                        <span className="absolute"><BsPersonBadge className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                        <input type="text" id="fullName" name="fullName" value={data.fullName} onChange={handleInputChange} placeholder="John Doe" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div>
                                                    <label htmlFor="email" className="block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Email Address</label>
                                                    <div className="relative flex items-center mt-2">
                                                        <span className="absolute"><MdAlternateEmail className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                        <input type="email" id="email" name="email" value={data.email} onChange={handleInputChange} placeholder="john@example.com" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="issueType" className="block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Your Issue</label>
                                                <div className="relative flex items-center mt-2">
                                                    <span className="absolute"><BsFillEmojiSmileFill className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                    <select name="issueType" id="issueType" value={data.issueType} onChange={handleInputChange} className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                                        <option value="">Please select</option>
                                                        <option value="Refund">Refund</option>
                                                        <option value="Feedback">Feedback</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="feedback" className="text-base font-secondary font-medium text-gray-900">Your Feedback</label>
                                                <div className="mt-2.5 relative">
                                                    <textarea name="feedback" id="feedback" value={data.feedback} onChange={handleInputChange} placeholder="Enter your valuable feedback" className="block w-full px-4 font-secondary py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500" rows="4"></textarea>
                                                </div>
                                            </div>

                                            <div>
                                                <button onClick={handleSubmit} type="submit" className="relative inline-block text-base group">
                                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 font-primary transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                                        <span className="relative">Submit Feedback</span>
                                                    </span>
                                                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                                </button>
                                                {/* <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600">
                                                    Get Free Quote
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact