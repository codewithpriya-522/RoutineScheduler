// eslint-disable-next-line no-unused-vars
import React from 'react'

import { AiOutlineSchedule } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Regitration = () => {
    const navigate = useNavigate()
    return (

        <div className="m-0 p-10 bg-gray-50 dark:bg-gray-50">
            <div className=" flex bg-gray-50 dark:bg-gray-50 flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-[#02457A] dark:text-[#02457A]">
                    <AiOutlineSchedule className="mx-auto h-10 w-auto text-[#02457A]" />
                    Routine Scheduler
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#02457A] dark:border-[#02457A]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#02457A] md:text-2xl dark:text-[#02457A]">
                            Create an student account
                        </h1>
                        <h1 className='text-red-500 capitalize text-normal'>**only for students**</h1>
                        <form className="space-y-4 md:space-y-6 " action="#">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#02457A] dark:text-[#02457A]">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-[#02457A] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#02457A] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#02457A] dark:text-[#02457A]">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-[#02457A] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#02457A] dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-[#02457A] dark:text-[#02457A]">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-[#02457A] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#02457A] dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-[#02457A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#001B48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <button onClick={() => navigate('/login')} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Regitration