import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeRequest } from '../../makeRequest';
import PageNotFound from '../PageNotFound/PageNotFound';

const Success = () => {

    // Get the current location object
    const location = useLocation();

    // Parse the query string to get the session_id parameter
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');

    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await makeRequest.post("/confirm", { stripe_checkout_session: sessionId });
                console.log("🚀 ~ file: Success.jsx:20 ~ fetchOrder ~ res:", res)
                // const data = await res.data.json();

                if (res.data.error) {
                    setError(res.data.error.message);
                } else {
                    setOrder(res.data)
                }

            } catch (error) {
                setOrder(null);
                setError('An error occurred. Please try again later.');
            }
        }
        fetchOrder();
    }, [sessionId])

    return (

        <div>
            {error ? (

                <PageNotFound />

            ) : (
                <main className="relative lg:min-h-full">
                    <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-06-hero.jpg"
                            alt="TODO"
                            className="h-full w-full object-center object-cover"
                        />
                    </div>

                    <div>
                        <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
                            <div className="lg:col-start-2">
                                <h1 className="text-sm font-fredoka font-medium text-[#EAAC53]">Order ID #{order?.id}</h1>
                                <p className="mt-2 font-dynaPuff text-4xl font-extrabold tracking-tight text-[#DD6855] sm:text-5xl">
                                    Thanks for ordering
                                </p>
                                <p className="mt-2 font-fredoka text-base text-[#EAAC53]">
                                    We appreciate your order, we're currently processing it. So hang tight and we'll send you confirmation
                                    very soon!
                                </p>

                                <dl className="mt-16 text-sm font-medium">
                                    <dt className="text-gray-900 font-fredoka">Tracking number</dt>
                                    <dd className="mt-2 font-fredoka text-[#DD6855]">{order?.tracking_id}</dd>
                                </dl>

                                <ul className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200">
                                    {order?.products?.map((product, index) => (
                                        <li key={product.id} className="flex py-6 space-x-6">
                                            <img
                                                src={process.env.REACT_APP_UPLOAD_URL + product?.image?.url}
                                                alt={product.title}
                                                className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                                            />
                                            <div className="flex-auto space-y-1">
                                                <h3 className="text-gray-900 font-dynaPuff">
                                                    <Link to={`/product/${product?.id}`}>{product.title}</Link>
                                                </h3>
                                                <p className='font-fredoka'>{product.description?.substring(0, 50)} ...</p>
                                                <p className='font-fredoka'>Quantity: <span className='text-black'>{order.order_metadata[index].quantity}</span></p>
                                            </div>
                                            <p className="flex-none font-fredoka text-lg font-medium text-gray-900">${product.price}</p>
                                        </li>
                                    ))}
                                </ul>

                                <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                                    <div className="flex font-fredoka justify-between">
                                        <dt>Subtotal</dt>
                                        <dd className="text-gray-900">${order?.total}</dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt className='font-fredoka'>Shipping</dt>
                                        <dd className="text-gray-900">
                                            <img className='w-10 h-10' src="/images/free.webp" alt="Free delivery" />
                                        </dd>
                                    </div>


                                    <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                                        <dt className="text-base font-fredoka">Total</dt>
                                        <dd className="text-lg font-fredoka">${order?.total}</dd>
                                    </div>
                                </dl>

                                <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                                    <div>
                                        <dt className="font-medium font-dynaPuff text-gray-900">Shipping Address</dt>
                                        <dd className="mt-2 font-fredoka">
                                            <address className="not-italic">
                                                <span className="block">{order?.shipping_address?.name}</span>
                                                <span className="block">{order?.shipping_address?.address?.line1}</span>
                                                <span className="block">
                                                    {order?.shipping_address?.address?.city}, {' '}
                                                    {order?.shipping_address?.address?.state}, {order?.shipping_address?.address?.country} {order?.shipping_address?.address?.postal_code}</span>
                                            </address>
                                        </dd>
                                    </div>
                                </dl>

                                <div className="mt-16 border-t border-gray-200 py-6 text-right">
                                    <a href="/" className="text-sm font-fredoka font-medium text-[#DD6855] hover:text-[#DD6855]/80">
                                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
        // <div className='m mt-28'>
        //     <h1>Order successful! Thank you for your purchase!</h1>
        //     <p>Order ID: {order?.id}</p>
        // </div>
    )
}

export default Success