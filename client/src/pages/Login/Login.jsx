import axios from 'axios';
import React, { useState } from 'react';
import { MdAlternateEmail, MdLock } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { storeUser } from '../../services/routeProtector';

const initialUser = { identifier: "", password: "" };

const Login = () => {

    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }))
    }

    const handleLogin = async () => {
        try {

            if (user.identifier && user.password) {
                const { data } = await axios.post('http://localhost:1337/api/auth/local/', user);
                if (data.jwt) {
                    storeUser(data);
                    toast.success("Login Successful")
                    setUser(initialUser);
                    navigate('/profile');
                }
            }

        } catch (error) {
            toast.error("Incorrect credentials")
        }
    }


    return (
        <div className='bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 pb-20 pt-32 w-full mx-auto dark:bg-gray-900'>

            <div className="w-full max-w-sm p-4 m-auto border-2 border-black shadow-[rgba(0,0,0)_1.95px_1.95px_2.6px] rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="space-y-6">
                    <h5 className="text-xl font-medium font-primary text-gray-900 dark:text-white">Sign in</h5>
                    <div>
                        <label htmlFor="identifier" className="block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Your email</label>
                        <div className="relative flex items-center mt-2">
                            <span className="absolute"><MdAlternateEmail className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                            <input type="email" value={user.identifier} onChange={handleChange} name="identifier" id="identifier" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="your@mail.com" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Your password</label>
                        <div className="relative flex items-center mt-2">
                            <span className="absolute"><MdLock className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                            <input type="password" value={user.password} onChange={handleChange} name="password" id="password" placeholder="••••••••" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                        </div>
                    </div>
                    <div className="flex items-start">
                        {/* <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div> */}
                        <a href="/" className="ml-auto font-secondary text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>

                    {/* <button type="submit" onClick={handleLogin} className="w-full font-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button> */}

                    <button onClick={handleLogin} type="submit" className="relative inline-block text-base group w-full">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 font-primary transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 h-48 -ml-2 transition-all w-[104%] duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Login to your account</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>

                    <div className="text-sm font-secondary font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login