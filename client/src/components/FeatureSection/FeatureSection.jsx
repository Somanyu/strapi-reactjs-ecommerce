import { BsFillPaletteFill, BsPatchCheckFill } from "react-icons/bs";
import { IoWater } from "react-icons/io5";

const FeatureSection = () => {
    return (
        <div>
            <section className="bg-[#0091D4] dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-2 text-4xl font-primary tracking-tight font-extrabold text-white dark:text-white">Designed for creative minds like you</h2>
                        <p className="text-[#F6D1D1] font-secondary sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-200/40 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <IoWater className="w-5 h-5 text-blue-600/50 lg:w-6 lg:h-6 dark:text-blue-300" />
                            </div>
                            <h3 className="mb-2 text-[#F6D1D1] font-primary text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-[#F6D1D1]/80 font-secondary dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-200/40 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <BsPatchCheckFill className="w-5 h-5 text-blue-600/50 lg:w-6 lg:h-6 dark:text-blue-300" />
                            </div>
                            <h3 className="mb-2 text-[#F6D1D1] font-primary text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-[#F6D1D1]/80 font-secondary dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-200/40 lg:h-12 lg:w-12 dark:bg-blue-900">
                                <BsFillPaletteFill className="w-5 h-5 text-blue-600/50 lg:w-6 lg:h-6 dark:text-blue-300" />
                            </div>
                            <h3 className="mb-2 text-[#F6D1D1] font-primary text-xl font-bold dark:text-white">Marketing</h3>
                            <p className="text-[#F6D1D1]/80 font-secondary dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeatureSection