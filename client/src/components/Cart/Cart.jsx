import { loadStripe } from "@stripe/stripe-js";
import { GoTrash } from 'react-icons/go';
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../makeRequest';
import { removeFromCart, resetCart } from '../../redux/cartReducer';
import { userData } from '../../services/routeProtector';


const Cart = ({ onClose }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(state => state.cart.products)
    const { email, userId } = userData();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        return total.toFixed(2);
    }

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

    const total_price = totalPrice();

    const handlePayment = async () => {
        try {
            const { jwt } = userData();
            if (!jwt) {
                navigate("/login");
                return;
            }
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", { products, email, total_price, userId });

            // Dispatch the resetCart action here
            dispatch(resetCart());

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="fixed right-[8rem] -top-5 z-50 mt-24 w-screen max-w-md border rounded shadow-lg bg-slate-100 px-4 py-8 sm:px-6 lg:px-8" aria-modal="true" role="dialog" tabIndex="-1">
                <button onClick={onClose} className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                    <span className="sr-only">Close cart</span>
                    <RxCross1 />
                </button>

                {products.length === 0
                    ? (
                        <>
                            <img className="h-auto max-w-full" src="/images/empty-shopping-bag.png" alt="No product" />
                            <h4 className='text-xl font-semibold dark:text-white font-dynaPuff text-center'>Empty Cart</h4>
                            <p className="my-4 text-lg text-gray-500 font-fredoka text-center">Explore Exciting Products and Fill it Up!</p>
                        </>
                    )
                    : (
                        <div className="mt-4 space-y-6">
                            <ul className="space-y-4">
                                {products?.map(item => (

                                    <li key={item.id} className="flex items-center gap-4">
                                        <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.title} className="h-24 w-24 rounded object-cover" />
                                        <div>
                                            <h4 className="text-base text-gray-900 font-semibold">
                                                {item.title}
                                                <span className="bg-blue-100 ml-1 text-blue-800 text-xs font-medium mr-2 px-2 py-0.2 rounded dark:bg-blue-900 dark:text-blue-300">x {item.quantity}</span>
                                            </h4>
                                            <dl className="mt-0.5 space-y-px text-[11px] text-gray-600">
                                                {item.desc?.substring(0, 50)} ...
                                            </dl>
                                        </div>
                                        <div className="flex flex-1 items-center justify-end gap-2">
                                            <form>
                                                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                                                <input type="text" readOnly value={`₹ ${item.price}`} id="Line1Qty" className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                            </form>

                                            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-gray-600 transition hover:text-red-600">
                                                <span className="sr-only">Remove item</span>
                                                <GoTrash />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-4 text-center grid">
                                {/* <a href="/" className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400">
                            View my cart (2)
                        </a> */}

                                <button onClick={handlePayment} className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                                    Checkout (₹ {totalPrice()})
                                </button>

                                <button onClick={() => dispatch(resetCart())} className="inline-block text-sm text-gray-500 hover:text-red-500 underline underline-offset-4 transition">
                                    Reset cart
                                </button>
                            </div>
                        </div>)}
            </div>
        </>
    )
}

export default Cart