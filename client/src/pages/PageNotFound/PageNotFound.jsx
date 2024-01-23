import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <img className='w-auto h-80 mx-auto sm:h-80' src="/images/404.gif" alt="404" />
                    <h1 className="mt-6 text-2xl font-bold tracking-tight font-primary text-gray-900 sm:text-4xl">You are all alone here!</h1>
                    <p className="mt-4 font-secondary text-gray-500">Go back to explore some products.</p>
                    <Link to='/' className="mt-6 relative inline-block text-base group">
                        <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative font-primary">Go home</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound