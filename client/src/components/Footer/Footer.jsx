import { RiFacebookBoxFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Footer = () => {

  const { data, loading, error } = useFetch(`/categories`)

  const currentYear = new Date().getFullYear();

  return (

    <div className="bg-[#272136]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-medium font-dynaPuff tracking-wide text-[#E2A246]">Category</p>
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
                        <Link to={`/products/${item.id}`} className="text-[#E2A246]/60 font-fredoka transition-colors duration-300 hover:text-purple-200">{item.attributes.title}</Link>
                      </li>
                    ))
                }

              </ul>
            </div>


            <div>
              <p className="font-medium font-dynaPuff tracking-wide text-[#E2A246]">Business</p>
              <ul className="mt-2 font-fredoka text-[#E2A246]/60 space-y-2">
                <li>
                  <a href="/about" className="transition-colors duration-300 hover:text-purple-200">About</a>
                </li>
                <li>
                  <a href="/policy" className="transition-colors duration-300 hover:text-purple-200">Policy</a>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors duration-300 hover:text-purple-200">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium font-dynaPuff text-[#E2A246] tracking-wide">Subscribe for updates</span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input placeholder="Your email" required type="text" className="flex-grow font-fredoka w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus:shadow-outline" />
              <button type="submit" className="inline-flex font-dynaPuff items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#DA6048] hover:bg-[#E2A246]/80 focus:shadow-outline focus:outline-none">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 font-fredoka">
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