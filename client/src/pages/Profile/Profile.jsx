import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Orders from '../../components/Orders/Orders';
import { userData } from '../../services/routeProtector';

const Profile = () => {

  const { userId, jwt } = userData();
  const [user, setUser] = useState({});
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        setUser(data);
        setIsUserUpdated(false);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileData();
  }, [jwt, isUserUpdated])


  return (
    <>
      <div className='my-28 w-96 m-auto'>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pt-5 pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.username}`} alt="Bonnie" />
            <h5 className="mb-1 text-2xl font-medium font-primary text-gray-900 dark:text-white">{user.username}</h5>
            <span className="text-base text-gray-500 font-secondary dark:text-gray-400">{user.email}</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <Link to="/logout" className="mt-6 relative inline-block text-base group">
                <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-red-800 transition-colors duration-300 ease-out border-2 border-red-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-red-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-primary">Logout</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </Link>
              <a href="tel:1234555" className="mt-6 relative inline-block text-base group">
                <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-3 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative font-primary">Contact us</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
              {/* <Link to="/logout" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</Link> */}
              {/* <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Orders userId={userId} />
      </div>
    </>
  )
}

export default Profile