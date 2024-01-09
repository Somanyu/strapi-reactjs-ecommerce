import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';

const FeaturedProducts = ({ type, categories }) => {

    const filterField = type === 'featured' ? 'isFeatured' : 'isTrendy';
    const categoryField = categories === 'Sticker' ? 'Sticker' : 'Bookmark';

    const { data, loading, error } = useFetch(`/products?pagination[pageSize]=2&populate=*&[filters][inStock][$eq]=true&[filters][categories][title][$eq]=${categoryField}&[filters][${filterField}][$eq]=true`)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-[#2E64A1] rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold font-dynaPuff text-[#F6D1D1] sm:text-3xl">Shop {capitalizeFirstLetter(type)} {categories}</h2>
                                    <p className="mt-4 text-[#F6D1D1]/70 font-fredoka">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        rerum quam amet provident nulla error!
                                    </p>
                                </header>
                                <Link to={categoryField === 'Sticker' ? '/products/1' : '/products/2'} className="mt-6 relative inline-block text-base group">
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative font-dynaPuff">Shop now</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </Link>

                                {/* <a href="/" className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring">
                                    Shop All
                                </a> */}
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                {error
                                    ? "Something went wrong"
                                    : loading
                                        ? "loading.."
                                        : data?.map(item => (
                                            <Card item={item} key={item.id} />
                                        ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts