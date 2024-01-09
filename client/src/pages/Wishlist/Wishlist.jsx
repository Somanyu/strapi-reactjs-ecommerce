import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartReducer';
import { userData } from '../../services/routeProtector';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const { jwt } = userData();

  const dispatch = useDispatch();

  useEffect(() => {
    const getOrderData = async () => {
      try {
        const {
          data: { data } } = await axios.get(`http://localhost:1337/api/wishlists`, {
            headers: {
              Authorization: `bearer ${jwt}`,
            },
          });
        setWishlist(data);
      } catch (error) {
        console.log({ error });
      }
    };
    getOrderData();
  }, [jwt]);


  return (
    <div className='mt-[6rem]'>
      <img className="w-full h-[200px] object-cover" src="/images/banner.jpg" alt="banner" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-xl">
            <h1 id="your-orders-heading" className="text-3xl font-dynaPuff font-extrabold tracking-tight text-gray-900">
              Your Wishlist
            </h1>
            <p className="mt-2 font-fredoka text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>

          <div className="mt-12 space-y-16 sm:mt-16">
            {wishlist?.length === 0 ? <>
              <Link to="/" className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <img src="/images/tutti-payment-processed-for-goods-using-a-debit-card-and-phone-1.png" alt="Empty cart" className="mx-auto h-52 w-50 text-gray-400" />
                <span className="mt-2 block text-lg font-dynaPuff font-medium text-gray-900">Explore products. Start shopping</span>
              </Link>
            </> : wishlist?.map((product, index) => (
              <section key={index} aria-labelledby={`${index}-heading`}>
                <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                  <div className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img src={process.env.REACT_APP_UPLOAD_URL + product?.product?.img}
                        alt={product?.product?.title}
                        className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                      />
                      <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                        <h3 className="text-xl font-dynaPuff font-medium text-gray-900">
                          <Link to={`/product/${product.product?.id}`}>{product.product?.title}</Link>
                        </h3>
                        <p className="hidden text-gray-500 font-fredoka sm:block sm:mt-2">{product.product?.desc?.substring(0, 70)} ...</p>
                        {/* <p className="text-sm text-gray-500 truncate">
                          <span>{product.product?.color}</span>{' '}
                          <span className="mx-1 text-gray-400" aria-hidden="true">
                            &middot;
                          </span>{' '}
                          <span>{product.product?.size}</span>
                        </p> */}
                        <p className="mt-1 font-fredoka font-medium text-gray-900">$ {product.product?.price}</p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                      <button onClick={() => dispatch(addToCart({
                        id: product?.product?.id,
                        title: product?.product?.title,
                        desc: product?.product?.desc,
                        price: product?.product?.price,
                        img: product?.product?.img,
                        quantity: 1,
                      }))} type="button" className="w-full flex font-dynaPuff items-center justify-center bg-[#1F7FF1] py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-[#4EADFA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                        Add to cart
                      </button>
                      <button onClick={() => {
                        axios.delete(`http://localhost:1337/api/wishlists/${product.id}`, {
                          headers: {
                            Authorization: `bearer ${jwt}`,
                          },
                        })
                          .then(() => {
                            window.location.reload();
                            toast.success('Product removed from wishlist');
                          })
                      }} type="button" className="w-full font-dynaPuff flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-dynaPuff font-bold text-gray-900 sm:text-3xl">Wishlist Collection</h2>
          <p className="mt-4 font-fredoka max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            presenting cumae iure dicta incident est ipsam, officia dolor fugit
            natus?
          </p>
        </header>
      </div>
      <div className="lg:col-span-3 lg:py-8">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          Product
          {wishlist?.map((p) => (
            <>
              <p>{p.product.title}</p>
            </>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

export default Wishlist