import { RiFacebookBoxFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Footer = () => {

  const { data, loading, error } = useFetch(`/categories`)

  const currentYear = new Date().getFullYear();

  return (

    <div className="bg-[#FFD306]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium font-primary tracking-wide text-black">Category</p>
              <ul className="mt-2 space-y-2">
                {error ?
                  <>
                    <li>
                      No Categories
                    </li>
                  </>
                  : loading ?
                    <>
                      <li>
                        loading...
                      </li>
                    </>
                    : data?.map(item =>
                    (
                      <li key={item.id}>
                        <Link to={`/products/${item.id}`} className="text-[#000000] font-secondary transition-colors duration-300 hover:text-purple-200">{item.attributes.title}</Link>
                      </li>
                    ))
                }

              </ul>
            </div>


            <div>
              <p className="font-medium font-primary tracking-wide text-black">Business</p>
              <ul className="mt-2 font-secondary text-[#000000] space-y-2">
                <li>
                  <a href="/about" className="transition-colors duration-300 hover:text-gray-700">About</a>
                </li>
                <li>
                  <a href="/policy" className="transition-colors duration-300 hover:text-gray-700">Policy</a>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors duration-300 hover:text-gray-700">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium font-primary text-black tracking-wide">Subscribe for updates</span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input placeholder="Your email" required type="text" className="flex-grow font-secondary w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-outline" />
              {/* <button type="submit" className="inline-flex font-primary items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#DA6048] hover:bg-[#E2A246]/80 focus:shadow-outline focus:outline-none">
                Subscribe
              </button> */}
              <Link to={'/'} className="relative inline-flex items-center justify-center text-base group">
                <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-primary">Subscribe</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </Link>
            </form>
            <p className="mt-4 text-sm text-gray-500 font-secondary">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright {currentYear} Sticktacular. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">
              <RiTwitterXFill className="text-2xl" />
            </a>
            <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">
              <RiInstagramFill className="text-2xl" />
            </a>
            <a href="/" className="text-gray-500 hover:text-white transition-colors duration-300">
              <RiFacebookBoxFill className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer