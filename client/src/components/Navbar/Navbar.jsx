import { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GoHeart, GoPerson } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cart from '../Cart/Cart';

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const toggleCart = () => {
    setOpen(!open);
  };

  const products = useSelector(state => state.cart.products)

  const { data, loading, error } = useFetch(`/categories`)

  return (
    <>

      <nav className="backdrop-blur-md bg-slate-100/30 dark:bg-gray-900 fixed mb-52 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" className="mr-3 ml-6 h-24" alt="Sticktacular Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </Link>
          <div className="flex md:order-2 mr-6">
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}

            <div className="mr-3">
              <button>
                <Link to="/profile"><GoPerson className='text-2xl text-black mr-1' /></Link>
              </button>
              <button><Link to="/wishlist"><GoHeart className='text-2xl text-black' /></Link></button>
              <button onClick={() => setOpen(!open)} type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <BsBag className='text-xl text-black' />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[-1px] -right-[-2px] dark:border-gray-900">{products.length ? products.length : 0}</div>
              </button>
            </div>

            <button onClick={toggleHidden} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>
          <div className={`items-center justify-between ${isHidden ? 'hidden' : ''} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex font-dynaPuff flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {error ?
                <>
                  <li>
                    <a href="/products/1" className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500">Stickers</a>
                  </li>
                  <li>
                    <a href="/products/2" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Bookmark</a>
                  </li>
                </>
                : loading ?
                  <>
                    <li>
                      <a href="/products/1" className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:text-gray-900 md:p-0 md:dark:text-blue-500">Stickers</a>
                    </li>
                    <li>
                      <a href="/products/2" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Bookmark</a>
                    </li>
                  </>
                  : data?.map(item => (
                    <div key={item.id}>
                      <li>
                        <a href={`/products/${item.id}`} className="block py-2 pl-3 pr-4 hover:text-blue-500 rounded md:bg-transparent md:p-0 md:dark:text-blue-500">{item.attributes.title}</a>
                      </li>
                    </div>
                  ))
              }

              <li>
                <Link to="/about" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {open && <Cart onClose={toggleCart} />}

    </>
  )
}

export default Navbar