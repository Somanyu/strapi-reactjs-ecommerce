import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdAlternateEmail, MdLock } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const initialUser = { username: "", email: "", password: "" };

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short! 🤏')
        .max(50, 'Too Long! 🦒')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email ❌')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Too Short! 🤏')
        .max(50, 'Too Long! 🦒')
        .required('Password is required'),
    // terms: Yup.boolean()
    //     .oneOf([true], 'You must accept the Terms and Conditions'),
});


const Register = () => {

    // const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    // const handleChange = ({ target }) => {
    //     const { name, value } = target;
    //     setUser((currentUser) => ({
    //         ...currentUser,
    //         [name]: value
    //     }))
    // }


    // const handleRegister = async () => {
    //     try {
    //         if (user.username && user.email && user.password) {
    //             const res = await axios.post('http://localhost:1337/api/auth/local/register', user);
    //             if (!!res) {
    //                 toast.success("Registration Successful", {
    //                     hideProgressBar: true,
    //                 })
    //                 setUser(initialUser);
    //                 navigate("/login")
    //             }
    //         }

    //     } catch (error) {
    //         toast.error(error.message, {
    //             hideProgressBar: true,
    //         })
    //     }
    // }

    return (
        <div className=''>
            <section className="bg-gray-50 pb-20 pt-20 w-full mx-auto dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-primary font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="/">
                                <Formik
                                    initialValues={{ username: "", email: "", password: "" }}
                                    validationSchema={SignUpSchema}
                                    onSubmit={async (values) => {
                                        try {
                                            const response = await axios.post('http://localhost:1337/api/auth/local/register', values);
                                            // console.log("🚀 ~ file: Register.jsx:80 ~ onSubmit={ ~ response:", response)
                                            if (response.status === 200) {
                                                toast.success("Success! You can login now.")
                                                navigate("/login")
                                            } else {
                                                toast.error("Email or Username already exists!")
                                            }
                                        } catch (error) {
                                            toast.error("Email or Username already exists!")
                                        }
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>


                                            <div className='mt-2'>
                                                <div className="flex gap-2">
                                                    <label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Username</label>
                                                    {errors.username && touched.username ? (
                                                        <p className='text-red-500'>{errors.username}</p>
                                                    ) : null}
                                                </div>
                                                <div className="relative flex items-center mt-2">
                                                    <span className="absolute"><CgProfile className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                    <Field type="text" name="username" id="username" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />

                                                    {/* <input type="text" value={user.username} onChange={handleChange} name="username" id="username" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" required /> */}
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <div className="flex gap-2">
                                                    <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Your email</label>
                                                    {errors.email && touched.email ? (
                                                        <p className="text-red-400">{errors.email}</p>
                                                    ) : null}
                                                </div>
                                                <div className="relative flex items-center mt-2">
                                                    <span className="absolute"><MdAlternateEmail className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                    <Field type="email" name="email" id="email" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="your@mail.com" />


                                                    {/* <input type="email" value={user.email} onChange={handleChange} name="email" id="email" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="your@mail.com" required /> */}
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <div className="flex gap-2">
                                                    <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium font-secondary text-base text-gray-900 dark:text-gray-300">Your password</label>
                                                    {errors.password && touched.password ? (
                                                        <p className="text-red-400">{errors.password}</p>
                                                    ) : null}
                                                </div>
                                                <div className="relative flex items-center mt-2">
                                                    <span className="absolute"><MdLock className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500" /></span>
                                                    <Field type="password" name="password" id="password" placeholder="••••••••" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />

                                                    {/* <input type="password" value={user.password} onChange={handleChange} name="password" id="password" placeholder="••••••••" className="block w-full font-secondary py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required /> */}
                                                </div>
                                            </div>
                                            <div className="flex mt-4 items-start font-secondary">
                                                <div className="flex items-center h-5">
                                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" checked required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/">Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                            <button type="submit" className="w-full mt-6 font-primary text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                                            <p className="text-sm mt-3 font-secondary font-light text-gray-500 dark:text-gray-400">
                                                Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</Link>
                                            </p>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register