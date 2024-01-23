import React from 'react';
import ReactMarkdown from 'react-markdown';
import useFetch from '../../hooks/useFetch';

const Policy = () => {

    const { data, loading, error } = useFetch('/policy');

    return (
        <div>
            <section className="md:py-10 py-20 bg-red-500">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="font-primary text-2xl font-bold text-gray-100 md:text-3xl">
                            Our Policy & Terms and Conditions
                        </h2>

                        <p className="hidden text-gray-200 sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
                            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
                            consequuntur exercitationem incidunt tempora nisi?
                        </p>

                    </div>

                </div>
            </section>

            <div className='relative my-20 w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28'>
                {/* <div className='text-left bg-gray-300 px-28 py-10 font-sans w-5/6 mx-auto'> */}
                {/* <ReactMarkdown className="prose lg:prose-lg">{loading ? <>Loading...</> : error ? <>Error...</> : data?.attributes.paragraph}</ReactMarkdown> */}
                <ReactMarkdown className="prose lg:prose-lg">{data?.attributes.paragraph}</ReactMarkdown>

            </div>
        </div>
    )
}

export default Policy