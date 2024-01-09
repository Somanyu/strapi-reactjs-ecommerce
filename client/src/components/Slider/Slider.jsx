import { Carousel } from 'flowbite-react';
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Slider = () => {

  const { data, loading, error } = useFetch(`/sliders?populate=*`)

  const customTheme = {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-red-500 group-hover:bg-red-500/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-yellow-300 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-red-500 dark:text-gray-800 sm:h-6 sm:w-6"
    },
  }


  return (

    <div className="m-auto p-3 h-[35rem] md:h-[27rem] ">
      <Carousel leftControl=" " rightControl=" " theme={customTheme} indicators={true} slide={true} slideInterval={3000}>

        {error ?
          <>
            <h1>Error</h1>
          </>
          : loading ?
            <>
              <h1>Loading</h1>
            </>
            : data?.map(item => (
              <div key={item.id} className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                <div className="container px-6 py-16 mx-auto">
                  <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                      <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold font-dynaPuff text-gray-800 dark:text-white lg:text-5xl">{item.attributes.heading}</h1>
                        <p className="mt-3 text-gray-600 font-fredoka dark:text-gray-400">{item.attributes.paragraph}</p>
                        <Link to={item.attributes.buttonLink} className="mt-6 relative inline-block text-base group">
                          <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative font-dynaPuff">{item.attributes.buttonText}</span>
                          </span>
                          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                      <img className="w-full h-full lg:max-w-3xl" src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.image?.data?.attributes.url} alt="Catalogue.svg" />
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </Carousel>
    </div>
  )
}

export default Slider