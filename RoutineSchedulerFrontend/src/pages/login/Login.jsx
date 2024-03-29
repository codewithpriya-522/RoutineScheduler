// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlineSchedule } from "react-icons/ai";
const Login = () => {
    return (

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <AiOutlineSchedule className="mx-auto h-10 w-auto text-[#02457A]" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#02457A]">Sign in to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#02457A]">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block px-1 w-full rounded-md border-0 py-1.5 text-[#02457A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-[#02457A]">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-[#02457A] hover:text-[#001B48]">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block px-1 w-full rounded-md border-0 py-1.5 text-[#02457A] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-[#02457A] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#001B48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not an admin?
                    <a href="#" className="font-semibold leading-6 text-[#02457A] hover:text-[#001B48]">Register here</a>
                </p>
            </div>
        </div>
        

    )
}

export default Login