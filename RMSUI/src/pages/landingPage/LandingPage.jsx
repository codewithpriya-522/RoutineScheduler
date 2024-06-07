// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    const navigate = useNavigate()
    return (
        <div>
            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <a href="#" className="flex items-center space-x-2">
                            <AiOutlineSchedule className="w-5 h-5" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Routine Scheduler</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <div className="hidden mt-2 mr-4 sm:inline-block">
                                <span />
                            </div>
                            <button
                                onClick={() => navigate('/login')} className="text-white flex space-x-4 bg-[#02457A] hover:bg-[#001B48] focus:ring-4 focus:ring-none font-medium rounded-lg text-normal px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-[#02457A] focus:outline-none dark:focus:ring-none"><span className='py-1 px-2'><RiLoginBoxLine className='w-4 h-4' /></span> Login</button>
                            {/* <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isMenuOpen ? 'true' : 'false'}>
                                <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    {isMenuOpen ? (
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    )}
                                </svg>
                            </button> */}
                        </div>
                        {/* <div className={isMenuOpen ? "items-center justify-between w-full lg:flex lg:w-auto lg:order-1" : "hidden w-full lg:flex lg:w-auto lg:order-1"} id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
            </header>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Lorem Ipsum<br />is simply dummy text  &amp; is simply dummy text </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => navigate('/login')} className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Login here <RiLoginBoxLine className='w-4 h-4' />
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <AiOutlineSchedule className='w-96 h-96' />
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                            <p className="mb-8 font-light lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">sxdcfvgbhnjmkl</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">sdxfcgvjbhnml</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">sxdfcgbjhnm,.</span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="https://demo.themesberg.com/landwind/images/feature-1.png" alt="dashboard feature image" />
                    </div>
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="data:image/jpeg;base64,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" alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">ms,dzcx xdfcgvhjkl;</h2>
                            <p className="mb-8 font-light lg:text-xl">scfzvnjjjjjj,zxdfcgvbh,l;.cvgbhjnk;.cvbhnjkm,l.</p>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">xcfbghyjuiop</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">asdfghjuikl</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">dfxghjyukilo;p</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">zgfhjyupl</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">zxbhjklxdcv bn</span>
                                </li>
                            </ul>
                            <p className="font-light lg:text-xl">qwertyuikolplkjhgfdsazxcvbnmmmm</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white dark:bg-gray-800">
                <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">heading</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">heading1</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">heading</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">heading1
                                    </a></li><a href="#" className="hover:underline">
                                </a><li className="mb-4"><a href="#" className="hover:underline">
                                </a><a href="#" className="hover:underline">heading1</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-center">
                        <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <AiOutlineSchedule className='h-6 w-6' />
                            Routine Scheduler
                        </a>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025  Routine Scheduler™. All Rights Reserved. Built with <a className="text-purple-600 hover:underline dark:text-purple-500"> Routine Scheduler</a> .
                        </span>
                        <ul className="flex justify-center mt-5 space-x-5">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default LandingPage