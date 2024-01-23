import { Menu, Transition } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { BsCheckCircleFill, BsClock, BsFillXCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { userData } from '../../services/routeProtector';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Orders = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  const { jwt } = userData();

  useEffect(() => {
    const getOrderData = async () => {
      try {
        const {
          data: { data } } = await axios.get(`http://localhost:1337/api/orders?sort=updatedAt:desc`, {
            headers: {
              Authorization: `bearer ${jwt}`,
            },
          });
        setOrders(data);
      } catch (error) {
        console.log({ error });
      }
    };
    getOrderData();
  }, [jwt]);


  return (
    <div id='orders' className="bg-white">
      <div className="py-16 sm:py-5">
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-extrabold tracking-tight font-primary text-[#2BAA55] sm:text-3xl">Order history</h1>
            <p className="mt-2 text-sm font-secondary text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orders?.length === 0 ? <>
                <Link to="/" className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <img src="/images/tutti-payment-processed-for-goods-using-a-debit-card-and-phone-1.png" alt="Empty cart" className="mx-auto h-52 w-50 text-gray-400" />
                  <span className="mt-2 block text-lg font-primary font-medium text-gray-900">Explore products. Start shopping</span>
                </Link>
              </> : orders?.map((order) => (
                <div key={order.id} className="bg-white border-t border-b border-gray-200 shadow-sm sm:rounded-lg sm:border">
                  <h3 className="sr-only">Order placed on <time dateTime={order?.createdAt}>    {new Date(order?.createdAt).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}</time></h3>
                  <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6">
                    <dl className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                      <div className="">
                        <dt className="font-medium font-primary text-[#2BAA55]">Order number</dt>
                        <dd className="mt-1 font-secondary text-gray-500">{order.id}</dd>
                      </div>
                      <div className="hidden sm:block">
                        <dt className="font-medium font-primary text-[#2BAA55]">Date placed</dt>
                        <dd className="mt-1 font-secondary text-gray-500">
                          <time dateTime={order?.createdAt}>    {new Date(order?.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          })}</time>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium font-primary text-[#2BAA55]">Total amount</dt>
                        <dd className="mt-1 font-medium font-secondary text-gray-900">${order?.total}</dd>
                      </div>
                    </dl>

                    <Menu as="div" className="relative flex justify-end lg:hidden">
                      <div className="flex items-center">
                        <Menu.Button className="-m-2 p-2 flex items-center text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Options for order {order.id}</span>
                          <BsThreeDotsVertical className="w-6 h-6" aria-hidden="true" />
                        </Menu.Button>
                      </div>

                      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="origin-bottom-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {order?.status === 'Paid' ?
                              <>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a href={`/success?session_id=${order?.stripe_checkout_session}`} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 cursor-pointer py-2 text-sm font-primary')}>View Order</a>
                                  )}
                                </Menu.Item>
                              </> :
                              <>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button className={classNames(active ? 'bg-red-400 text-gray-300' : 'text-red-600', 'block px-4 py-2 text-sm font-primary')}>Order Cancelled</button>
                                  )}
                                </Menu.Item>

                              </>}
                            {order?.status === 'Paid' &&
                              <Menu.Item>
                                {({ active }) => (
                                  <a href={order?.hosted_invoice_url} target="_blank" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 font-primary text-sm')} rel="noreferrer">Invoice</a>
                                )}
                              </Menu.Item>
                            }
                          </div>
                        </Menu.Items>
                      </Transition>

                    </Menu>

                    <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      {order?.status === 'Unpaid' ? (
                        <>
                          <button className="flex font-primary items-center justify-center bg-red-500 py-2 px-2.5 rounded-md shadow-sm text-sm font-medium text-gray-100 hover:text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled>
                            <span>Order cancelled</span>
                            <span className="sr-only">{order.id}</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <a href={`/success?session_id=${order?.stripe_checkout_session}`} className="flex font-primary items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span>View Order</span>
                            <span className="sr-only">{order.id}</span>
                          </a>
                        </>
                      )}
                      {/* <a href={`/success?session_id=${order.stripe_checkout_session}`} className="flex font-primary items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>View Order</span>
                        <span className="sr-only">{order.number}</span>
                      </a> */}
                      {order?.status === 'Paid' &&
                        <a href={order?.hosted_invoice_url} target="_blank" className="flex items-center font-primary justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" rel="noreferrer">
                          <span>View Invoice</span>
                          <span className="sr-only">for order {order.number}</span>
                        </a>
                      }
                    </div>
                  </div>

                  <h4 className="sr-only">Items</h4>
                  <ul className="divide-y divide-gray-200">
                    {/* {order?.order_metadata?.map((product, index) => (
                      <li>
                        <p>{product?.title}</p>
                      </li>
                    ))} */}
                    {order?.order_metadata?.map((product, index) => (
                      <li key={index} className="p-4 sm:p-6">
                        <div className="flex items-center sm:items-start">
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden sm:w-40 sm:h-40">
                            <img className="w-full h-full object-center object-cover" src={process.env.REACT_APP_UPLOAD_URL + product?.img} alt={product?.title} />
                          </div>
                          <div className="flex-1 ml-6 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              <div className="0">
                                <h5 className='font-primary text-xl'>{product.title}</h5>
                                <p className='font-secondary text-base'>Quantity: <span className='text-black'>{product.quantity}</span></p>
                              </div>
                              <p className="mt-2 text-xl sm:mt-0 font-primary">${product.price}</p>
                            </div>
                            <p className="hidden text-gray-500 font-secondary sm:block sm:mt-2">{product.desc?.substring(0, 250)} ...</p>
                            {/* <p className='font-secondary'>Quantity: <span className='text-black'>{product.quantity}</span></p> */}
                          </div>
                        </div>

                        <div className="mt-6 sm:flex sm:justify-between">
                          <div className="flex items-center font-secondary">
                            {order?.status === 'Paid' ? (
                              <>
                                {
                                  order?.deliveryStatus === 'Delivered' ? (
                                    <>
                                      <BsCheckCircleFill className="w-5 h-5 text-green-500" aria-hidden="true" />
                                      <p className="ml-2 text-sm font-medium text-gray-500">
                                        Delivered on <time dateTime={order?.createdAt}>{new Date(order?.createdAt).toLocaleString()}</time>
                                      </p>
                                    </>
                                  ) : order?.deliveryStatus === 'Return' ? (
                                    <>
                                      <BsFillXCircleFill className="w-5 h-5 text-red-500" aria-hidden="true" />
                                      <p className="ml-2 text-sm font-medium text-gray-500">
                                        Returned
                                      </p>
                                    </>
                                  ) : order?.deliveryStatus === 'Pending' ? (
                                    <>
                                      <BsClock className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                                      <p className="ml-2 text-sm font-medium text-gray-500">
                                        Pending
                                      </p>
                                    </>
                                  ) : order?.status === 'Unpaid' ? (
                                    <>
                                      <BsFillXCircleFill className="w-5 h-5 text-red-500" aria-hidden="true" />
                                      <p className="ml-2 text-sm font-medium text-gray-500">
                                        Cancelled
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <BsClock className="w-5 h-5 text-red-500" aria-hidden="true" />
                                      <p className="ml-2 text-sm font-medium text-gray-500">
                                        Error
                                      </p>
                                    </>
                                  )
                                }
                              </>
                            ) : order?.status === 'Unpaid' ? (
                              <>
                                <BsFillXCircleFill className="w-5 h-5 text-red-500" aria-hidden="true" />
                                <p className="ml-2 text-sm font-medium text-gray-500">
                                  Cancelled
                                </p>
                              </>
                            ) : (
                              <>
                                <BsFillXCircleFill className="w-5 h-5 text-red-500" aria-hidden="true" />
                                <p className="ml-2 text-sm font-medium text-gray-500">
                                  Something went wrong
                                </p>

                              </>
                            )}
                          </div>
                          <div className="mt-6 border-t border-gray-200 pt-4 flex items-center space-x-4 divide-x divide-gray-200 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0">
                            <div className="flex-1 flex justify-center">
                              <Link className="text-indigo-600 font-secondary whitespace-nowrap hover:text-indigo-500" to={`/product/${product.id}`}>View product</Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders