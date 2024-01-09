import axios from 'axios';
import React, { useState } from 'react';
import { HiOutlineCreditCard, HiOutlineGlobe, HiOutlineUser } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';
import { addToCart } from '../../redux/cartReducer';
import { userData } from '../../services/routeProtector';
import PageNotFound from '../PageNotFound/PageNotFound';
import './Product.css';

const Product = () => {

  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("image")
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, jwt } = userData();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleWishlist = async (product) => {
    if (!jwt) {
      navigate('/login')
    } else {
      try {
        const wishlistResponse = await axios.get(`http://localhost:1337/api/wishlists`, {
          headers: {
            Authorization: `bearer ${jwt}`,
          },
        });

        if (wishlistResponse.status !== 200) {
          toast.error('Failed to fetch wishlist data.')
        }

        const wishlistData = await wishlistResponse.data;
        const productExists = wishlistData.data.some((item) => item.product.id === product.id);

        if (productExists) {
          toast.error('Product already exists in wishlist.')
        } else {
          const response = await axios.post('http://localhost:1337/api/wishlists', { data: { email: email, product: product } })
          if (response.status === 200) {
            toast.success("Added to wishlist 😍")
          }
        }
      } catch (error) {
        toast.error(error.message)
        console.error('Error:', error);
      }
    }
  }

  return (
    <>
      {loading
        ? 'loading...'
        : error
          ? <PageNotFound />
          :
          <section className="mt-20 lg:mt-10 py-12 sm:py-16">
            <div className="container mx-auto px-4">

              <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-6 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                  <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-5">
                      <div className="max-w-xl aspect-square overflow-hidden rounded-lg">
                        <img className="w-[24rem] h-[24rem] mx-auto object-cover rounded-lg" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                      </div>
                    </div>

                    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                      <div className="flex flex-row items-start lg:flex-col">
                        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-4 border-transparent focus:border-[#4BA48D] text-center">
                          <img className="h-full w-full object-cover" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("image")} />
                        </button>
                        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-4 border-transparent focus:border-[#4BA48D] text-center">
                          <img className="h-full w-full object-cover" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("image2")} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                  <div className="mb-1 flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{data?.attributes?.subcategories?.data[0].attributes.title}</span>
                  </div>
                  <div className='flex'>
                    <h1 className="font-bold text-3xl text-gray-900 font-dynaPuff sm:text-3xl">{data?.attributes?.title}</h1>
                    <div className="ml-2 -mt-[0.5rem] bg-red-500/80 rounded-full">
                      <input onClick={() => handleWishlist({ id: data?.id, title: data?.attributes?.title, desc: data?.attributes?.description, price: data?.attributes?.price, img: data?.attributes?.image?.data?.attributes?.url })} type="checkbox" className="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">
                        <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
                            <path id="heart" d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" fill="#ffffff" />
                            <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                            <g id="grp7" opacity="0" transform="translate(7 6)">
                              <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                              <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                            </g>

                            <g id="grp6" opacity="0" transform="translate(0 28)">
                              <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                              <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                            </g>

                            <g id="grp3" opacity="0" transform="translate(52 28)">
                              <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                              <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                            </g>

                            <g id="grp2" opacity="0" transform="translate(44 6)">
                              <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                              <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                            </g>

                            <g id="grp5" opacity="0" transform="translate(14 50)">
                              <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                              <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                            </g>

                            <g id="grp4" opacity="0" transform="translate(35 50)">
                              <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                              <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                            </g>

                            <g id="grp1" opacity="0" transform="translate(24)">
                              <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                              <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                            </g>
                          </g>
                        </svg>
                      </label>
                    </div>
                    {/* <button onClick={() => handleWishlist({ id: data?.id, title: data?.attributes?.title, desc: data?.attributes?.description, price: data?.attributes?.price, img: data?.attributes?.image?.data?.attributes?.url })}>Add to wishlist</button> */}
                  </div>


                  <div className="flex items-center my-3">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                  </div>


                  <div className="flex items-end mt-8">
                    <h1 className="text-4xl font-fredoka font-semibold">${data?.attributes?.price}</h1>
                    <h1 className="text-3xl mx-2 font-fredoka line-through text-gray-500">${data?.attributes?.price + 20}</h1>
                  </div>
                  <span className="text-base font-fredoka">per piece</span>


                  <h2 className="mb-2 mt-8 font-dynaPuff text-lg font-semibold text-gray-900 dark:text-white">Features</h2>
                  <ul className="max-w-md space-y-1 font-fredoka text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Dimension: {data?.attributes?.dimension}</li>
                    <li>At least one lowercase character</li>
                    <li>Inclusion of at least one special character</li>
                  </ul>


                  <div className="mt-10 flex flex-col items-center justify-around space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">

                    <div>
                      <label htmlFor="Quantity" className="sr-only">Quantity</label>

                      <div className="flex items-center gap-1">
                        <button type="button" onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} className="w-10 h-10 leading-10 text-lg text-gray-800 transition hover:opacity-75">-</button>
                        <input type="number" id="Quantity" value={quantity} readOnly className="h-10 w-16 font-fredoka rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                        <button type="button" onClick={() => setQuantity(prev => prev + 1)} className="w-10 h-10 leading-10 text-gray-800 text-lg transition hover:opacity-75">+</button>
                      </div>
                    </div>

                    <button className="mt-6 relative inline-block text-base group">
                      <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>

                        {data?.attributes.inStock ? (
                          <span onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.description,
                            price: data.attributes.price,
                            img: data.attributes.image.data.attributes.url,
                            quantity,
                          }))}
                            className="relative font-dynaPuff">
                            Add to cart
                          </span>
                        ) : (
                          <span className="relative font-dynaPuff">Out of stock</span>
                        )}
                      </span>
                      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                  </div>

                  <ul className="mt-8 space-y-2">
                    <li className="flex font-fredoka items-center text-left text-sm font-medium text-gray-600">
                      <HiOutlineGlobe className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                      Free shipping worldwide
                    </li>

                    <li className="flex font-fredoka items-center text-left text-sm font-medium text-gray-600">
                      <HiOutlineCreditCard className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                      100% Secure payments
                    </li>
                    <li className="flex font-fredoka items-center text-left text-sm font-medium text-gray-600">
                      <HiOutlineUser className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                      Made by professionals
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <div className="border-b border-gray-300">
                    <nav className="flex gap-4">
                      <a href="/" title="" className="border-b-2 font-dynaPuff border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                      {/* <a href="/" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                        Reviews
                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                      </a> */}
                    </nav>
                  </div>

                  <div className="mt-8 font-fredoka flow-root sm:mt-8"><ReactMarkdown className="prose lg:prose-lg">{data?.attributes?.description}</ReactMarkdown></div>
                </div>
              </div>
            </div>
          </section>
      }
    </>

  )
}

export default Product