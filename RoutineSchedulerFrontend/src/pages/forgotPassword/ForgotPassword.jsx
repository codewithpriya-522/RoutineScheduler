// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlineSchedule } from "react-icons/ai";
const ForgotPassword = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className='flex space-x-2 mb-3'>
                    <AiOutlineSchedule className="mx-auto h-10 w-auto text-[#02457A]" />

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#02457A]">Routine Scheduler</h2>
                </div>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">

                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#02457A]">
                        Forgot your password?
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400"> Type in your email and we will send you a code to reset your password!</p>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#02457A] dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-[#02457A] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-[#02457A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#001B48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none">Reset password</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ForgotPassword