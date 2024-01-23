import React from 'react';
import { PiConfettiDuotone } from "react-icons/pi";
import useFetch from '../../hooks/useFetch';
import './Categories.scss';

const Categories = () => {

    const { data } = useFetch('/masonry-grid?populate=*')

    return (
        <div className='my-20'>

            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight font-primary text-[#1186F1] sm:text-4xl lg:text-5xl">
                            <span className="relative inline-block">
                                <PiConfettiDuotone className="absolute -top-5 left-3 z-0 hidden w-32 -mt-8 -ml-20 text-red-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" />
                            </span>
                            Get full access to Celebration
                        </h2>
                        <p className="mt-4 font-secondary text-2xl font-medium">130+ Hand Crafted Stickers</p>
                    </div>
                </div>
            </section>

            <div className="categories container m-auto">
                <div className="col">
                    <div className="row rounded-lg">
                        {/* <img className='hover:scale-125 transition-all duration-500' src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> */}
                        <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[0].attributes.url} alt="" />
                    </div>
                    <div className="row rounded-lg">
                        <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[1].attributes.url} alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="row rounded-lg">
                        <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[2].attributes.url} alt="" />
                    </div>
                </div>
                <div className="col col-l">
                    <div className="row">
                        <div className="col">
                            <div className="row rounded-lg">
                                <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[3].attributes.url} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="row rounded-lg">
                                <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[4].attributes.url} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row rounded-lg">
                        <img className='hover:scale-125 transition-all duration-500' src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.image.data[5].attributes.url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories