import React, { useEffect, useState } from 'react';
import { BatchService } from '../../services/batchService';
import BatchDataDTO from '../../models/BatchDataDTO';
import Navbar from '../components/nav'
const Dashboard = () => {
    const [batches, setBatches] = useState([]);
    const [name, setName] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    useEffect(() => {
        fetchBatches();
    }, []);

    const fetchBatches = async () => {
        try {
            const response = await BatchService.getAllBatches();
            setBatches(response.data);
        } catch (error) {
            console.error('Error fetching batches', error);
        }
    };

    const handleCreateBatch = async () => {
        const batchDataDTO = new BatchDataDTO(null, name, departmentId);
        try {
            await BatchService.createBatch(batchDataDTO);
            fetchBatches();
        } catch (error) {
            console.error('Error creating batch', error);
        }
    };
    // const users = [
    //     {
    //         id: 1,
    //         name: "Tatiana Pavlova",
    //         shortName: "Tatiana",
    //         isUpdate: true,
    //         image_url:
    //             "https://images.unsplash.com/photo-1626071466175-79ab723e9fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
    //     },
    //     {
    //         id: 2,
    //         name: "Aiony Haust",
    //         shortName: "Aiony",
    //         isUpdate: true,
    //         image_url:
    //             "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    //     },
    //     {
    //         id: 3,
    //         name: "Joel Mott",
    //         shortName: "Joel",
    //         isUpdate: true,
    //         image_url:
    //             "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    //     },
    //     {
    //         id: 4,
    //         name: "Caique Silva",
    //         shortName: "Caique",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1504363081893-c8226db66926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 5,
    //         name: "Jemima Wood",
    //         shortName: "Jemima",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1644456070980-a6be4db8910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 6,
    //         name: "Leio McLaren",
    //         shortName: "Leio",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //     },
    //     {
    //         id: 7,
    //         name: "Alex Suprun",
    //         shortName: "Alex",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //     },
    //     {
    //         id: 8,
    //         name: "Charles Deluvio",
    //         shortName: "Charles",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 9,
    //         name: "Luis Villasmil",
    //         shortName: "Luis",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    //     },
    //     {
    //         id: 10,
    //         name: "Jabari Timothy",
    //         shortName: "Jabari",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1656473040206-53753fbbc767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 11,
    //         name: "Ben Parker",
    //         shortName: "Ben",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 12,
    //         name: "Ayo Ogunseinde",
    //         shortName: "Ayo",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     },
    //     {
    //         id: 13,
    //         name: "Vince Fleming",
    //         shortName: "Vince",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 14,
    //         name: "Huston Wilson",
    //         shortName: "Huston",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    //     {
    //         id: 15,
    //         name: "Leon Ell'",
    //         shortName: "Leon",
    //         isUpdate: false,
    //         image_url:
    //             "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    //     },
    // ];

    // const storiesContainer = document.querySelector(".stories");
    // users.map((user) => {
    //     storiesContainer.innerHTML += `
    //           <div class="flex flex-col items-center">
    //               <div class="w-14 h-14 ${user.isUpdate && 'bg-gradient'} rounded-full mb-2">
    //               <img
    //                   src="${user.image_url}"
    //                   alt="${user.name}"
    //                   class="w-full h-full object-cover rounded-full"
    //               />
    //               </div>
    //               <p class="text-xs text-zinc-500 font-semibold">${user.shortName}</p>
    //           </div>
    //   `;
    // });

    return (
        <>
            {/* <div className="flex flex-row"> */}
                {/* <nav className="md:w-1/3 left-side px-8 py-9 flex-col justify-between hidden md:flex md:py-8 md:px-7 xl:w-2/12">
                    <div>
                        <div className="flex items-center mb-20">
                            <svg
                                width={48}
                                height={48}
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2.5"
                            >
                                <mask
                                    id="mask0_0_125"
                                    style={{ maskType: "alpha" }}
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={0}
                                    width={48}
                                    height={48}
                                >
                                    <rect width={48} height={48} rx={10} fill="#4F46BA" />
                                </mask>
                                <g mask="url(#mask0_0_125)">
                                    <rect width={48} height={48} rx={10} fill="#4F46BA" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M108.434 -33.1587C120.319 -29.2511 124.061 -12.7131 124.396 -0.160654C124.69 10.8456 114.519 18.6792 110.089 28.7813C106.541 36.8718 106.511 46.0432 101.078 53.0108C94.4594 61.4989 86.612 69.7643 76.1759 72.2713C64.6677 75.0359 51.359 74.3711 41.9872 67.2061C32.7788 60.1659 33.8443 46.3294 28.6591 35.943C22.5166 23.6392 7.99586 14.6677 8.88599 0.901685C9.79939 -13.2242 19.5031 -28.9184 33.1033 -32.7878C47.0862 -36.766 58.0304 -17.1379 72.544 -17.2093C85.9304 -17.2752 95.7363 -37.3337 108.434 -33.1587Z"
                                        fill="#FDBC64"
                                    />
                                </g>
                            </svg>
                            <div>
                                <p className="text-base font-bold text-gray-500">RMS</p>
                                <p className="text-xs font-bold text-slate-400">
                                    Simple &amp; Time Saving
                                </p>
                            </div>
                        </div>
                        <ul>
                            <li className="mb-10">
                                <a className="flex items-center">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.07874 16.1354H14.8937"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.40002 13.713C2.40002 8.082 3.01402 8.475 6.31902 5.41C7.76502 4.246 10.015 2 11.958 2C13.9 2 16.195 4.235 17.654 5.41C20.959 8.475 21.572 8.082 21.572 13.713C21.572 22 19.613 22 11.986 22C4.35903 22 2.40002 22 2.40002 13.713Z"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-base font-semibold ml-3  hover:text-zinc-900">Dashboard</span>
                                </a>
                            </li>
                            <li className="mb-10">
                                <a className="flex items-center">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.4">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.74982 12.7756C2.74982 5.8196 5.06882 3.5016 12.0238 3.5016C18.9798 3.5016 21.2988 5.8196 21.2988 12.7756C21.2988 19.7316 18.9798 22.0496 12.0238 22.0496C5.06882 22.0496 2.74982 19.7316 2.74982 12.7756Z"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3.02521 9.32399H21.0332"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.4285 13.261H16.4375"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.0291 13.261H12.0381"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.62142 13.261H7.63042"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.4285 17.113H16.4375"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.0291 17.113H12.0381"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.62142 17.113H7.63042"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.033 2.05009V5.31209"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.02472 2.05009V5.31209"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <span className="text-base font-semibold text-zinc-500 ml-3 hover:text-zinc-900">Schedules</span>
                                </a>
                            </li>
                            <li className="mb-16">
                                <a className="flex items-center">
                                    <img width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" src="src\assets\icons\user.svg" alt="UserIcon" />
                                    <span className="text-base font-semibold text-zinc-500 ml-3  hover:text-zinc-900">Teachers</span>
                                </a>
                            </li>
                        </ul>
                        <hr className="mb-5" />
                        <div className="flex justify-between mb-8">
                            <p className="flex items-center">
                                <span className="text-base font-semibold">Post</span>
                                <svg
                                    width={10}
                                    height={7}
                                    viewBox="0 0 10 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-3"
                                >
                                    <path d="M0 -4.15258e-07L9.5 0L5 7L0 -4.15258e-07Z" fill="black" />
                                </svg>
                            </p>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.625 11.3203H15.7969V12.6875H12.625V16.2812H11.1719V12.6875H8V11.3203H11.1719V8H12.625V11.3203Z"
                                    fill="#A0A0A0"
                                />
                                <circle cx={12} cy={12} r="11.5" stroke="#A0A0A0" />
                            </svg>
                        </div>
                        <ul>
                            <li className="mb-5">
                                <a className="flex items-center">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.4">
                                            <path
                                                d="M8.44025 12.0001L10.8142 14.3731L15.5602 9.6271"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.74982 12.0001C2.74982 18.9371 5.06282 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.0631 18.9368 2.7501 11.9998 2.7501C5.06282 2.7501 2.74982 5.0631 2.74982 12.0001Z"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <span className="text-base font-semibold text-zinc-500 ml-3">
                                        Published
                                    </span>
                                </a>
                            </li>
                            <li className="mb-5 flex justify-between items-center">
                                <a className="flex items-center">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.4">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.75012 12.0001C2.75012 18.9371 5.06312 21.2501 12.0001 21.2501C18.9371 21.2501 21.2501 18.9371 21.2501 12.0001C21.2501 5.0631 18.9371 2.7501 12.0001 2.7501C5.06312 2.7501 2.75012 5.0631 2.75012 12.0001Z"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.3902 14.0181L11.9992 11.9951V7.6341"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <span className="text-base font-semibold text-zinc-500 ml-3">
                                        Today's Scheduled
                                    </span>
                                </a>
                                <button className="border-1 text-zinc-500 rounded-full border-2 px-2">
                                    +2
                                </button>
                            </li>
                            <li className="mb-12">
                                <a className="flex items-center">
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.4">
                                            <path
                                                d="M8.54242 9.2177H15.3974"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.9702 2.5C5.58324 2.5 4.50424 3.432 4.50424 10.929C4.50424 19.322 4.34724 21.5 5.94324 21.5C7.53824 21.5 10.1432 17.816 11.9702 17.816C13.7972 17.816 16.4022 21.5 17.9972 21.5C19.5932 21.5 19.4362 19.322 19.4362 10.929C19.4362 3.432 18.3572 2.5 11.9702 2.5Z"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <span className="text-base font-semibold text-zinc-500 ml-3">
                                        Bookmarks
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <hr className="mb-6" />
                        <div className="flex justify-between mb-8">
                            <p className="flex items-center">
                                <span className="text-base font-semibold">Favorite Users</span>
                                <svg
                                    width={7}
                                    height={10}
                                    viewBox="0 0 7 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-3"
                                >
                                    <path d="M0 9.5V0L7 4.5L0 9.5Z" fill="black" />
                                </svg>
                            </p>
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.625 11.3203H15.7969V12.6875H12.625V16.2812H11.1719V12.6875H8V11.3203H11.1719V8H12.625V11.3203Z"
                                    fill="#A0A0A0"
                                />
                                <circle cx={12} cy={12} r="11.5" stroke="#A0A0A0" />
                            </svg>
                        </div>
                    </div>
                    <button className="flex items-center">
                        <svg
                            width={14}
                            height={14}
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.30461 5.61321H14V7.92453H8.30461V14H5.69539V7.92453H0V5.61321H5.69539V0H8.30461V5.61321Z"
                                fill="#696969"
                            />
                        </svg>
                        <span className="ml-3 text-base font-semibold">Invite new member</span>
                    </button>
                </nav> */}
                {/* <Navbar /> */}
                {/* Nav closure  */}

                <section className="w-full p-4 bg-gray-50md:p-12 md:min-content">
                    {/* <div className="w-full flex justify-between items-start mb-8 space-x-3 overflow-x-scroll stories md:w-auto">
                        <div className="flex flex-col items-center">
                            <div className="w-14 h-14 block border-2 rounded-full mb-2 border-transparent relative">
                                <img
                                    src="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
                                    alt="Omid Armin"
                                    className="w-full h-full object-cover rounded-full"
                                />
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute bottom-0 right-1"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
                                        fill="#4F46BA"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
                                        fill="#FDBC64"
                                    />
                                </svg>
                            </div>
                            <p className="text-xs text-zinc-500 font-semibold">Add to</p>
                        </div>
                    </div> */}
                    {/* story containner */}

                    <h2 className="text-base font-bold">Academic Information</h2>
                    <div className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-row md:space-x-4 md:space-y-0 md:mb-14">
                        <div className="p-5 bg-[#4F46BA] rounded-xl w-full views">
                            <p className="text-base font-bold text-white opacity-30">Teachers</p>
                            <p className="text-base font-semibold text-white">7,482,120</p>
                        </div>
                        <div className="p-5 bg-[#4F46BA] rounded-xl w-full follows">
                            <p className="text-base font-bold text-white opacity-30">Students</p>
                            <p className="text-base font-semibold text-white">54,364</p>
                        </div>
                        <div className="p-5 bg-[#4F46BA] rounded-xl w-full likes">
                            <p className="text-base font-bold text-white opacity-30">Batchs</p>
                            <p className="text-base font-semibold text-white">125,685</p>
                        </div>
                        {/* <div className="p-5 bg-[#4F46BA] rounded-xl w-full follows">
                            <p className="text-base font-bold text-white opacity-30">Depertment</p>
                            <p className="text-base font-semibold text-white">54,364</p>
                        </div> */}
                    </div>
                    <div className="flex mb-8 flex-col items-center md:mb-14 xl:flex-row xl:items-start xl:space-x-4">
                        <div className="w-full xl:w-1/3">
                            <h2 className="text-base font-bold mb-4">Analytics</h2>
                            <div className="p-4 bg-white rounded-xl drop-shadow-md mb-4 xl:mb-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-bold mb-8 text-[#1B2767]">
                                        Attendance Count
                                    </h3>
                                    <div className="flex items-center mb-4">
                                        <p className="text-sm mr-4">2024</p>
                                        <svg
                                            width={10}
                                            height={6}
                                            viewBox="0 0 5 3"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.80894 0.0712662H0.0736542L2.4413 2.28107L4.80894 0.0712662Z"
                                                fill="#C4C4C4"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <svg
                                    viewBox="0 0 413 86"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g opacity="0.4">
                                        <path
                                            d="M32.9428 83.617C32.3961 83.617 31.9195 83.4704 31.5128 83.177C31.1061 82.877 30.8195 82.4604 30.6528 81.927L31.6928 81.497C31.8995 82.197 32.3161 82.547 32.9428 82.547C33.2895 82.547 33.5661 82.4304 33.7728 82.197C33.9795 81.957 34.0828 81.6437 34.0828 81.257V76.297H35.1928V81.217C35.1928 81.7237 35.0961 82.157 34.9028 82.517C34.7095 82.877 34.4428 83.1504 34.1028 83.337C33.7628 83.5237 33.3761 83.617 32.9428 83.617ZM38.1306 83.617C37.764 83.617 37.4373 83.547 37.1506 83.407C36.864 83.2604 36.6406 83.057 36.4806 82.797C36.3206 82.5304 36.2406 82.2304 36.2406 81.897C36.2406 81.3704 36.4373 80.9537 36.8306 80.647C37.2306 80.3404 37.734 80.187 38.3406 80.187C38.6406 80.187 38.9106 80.217 39.1506 80.277C39.3906 80.3304 39.5806 80.3904 39.7206 80.457V80.197C39.7206 79.8837 39.604 79.6304 39.3706 79.437C39.1373 79.237 38.8373 79.137 38.4706 79.137C38.2106 79.137 37.964 79.1937 37.7306 79.307C37.504 79.4204 37.3206 79.577 37.1806 79.777L36.4106 79.187C36.6373 78.8737 36.9306 78.6304 37.2906 78.457C37.6506 78.2837 38.0506 78.197 38.4906 78.197C39.2306 78.197 39.8006 78.3804 40.2006 78.747C40.6006 79.107 40.8006 79.617 40.8006 80.277V83.457H39.7206V82.847H39.6706C39.524 83.067 39.3173 83.2504 39.0506 83.397C38.784 83.5437 38.4773 83.617 38.1306 83.617ZM38.3206 82.707C38.5873 82.707 38.8273 82.6437 39.0406 82.517C39.254 82.3904 39.4206 82.2204 39.5406 82.007C39.6606 81.7937 39.7206 81.5637 39.7206 81.317C39.5673 81.2304 39.3873 81.1604 39.1806 81.107C38.9806 81.0537 38.7706 81.027 38.5506 81.027C38.1373 81.027 37.834 81.1104 37.6406 81.277C37.4473 81.437 37.3506 81.647 37.3506 81.907C37.3506 82.1404 37.4406 82.3337 37.6206 82.487C37.8006 82.6337 38.034 82.707 38.3206 82.707ZM41.9994 78.357H43.0494V79.027H43.0994C43.246 78.787 43.4627 78.5904 43.7494 78.437C44.0427 78.277 44.3527 78.197 44.6794 78.197C45.2994 78.197 45.7694 78.3804 46.0894 78.747C46.416 79.107 46.5794 79.6004 46.5794 80.227V83.457H45.4794V80.377C45.4794 79.977 45.3794 79.6837 45.1794 79.497C44.986 79.3104 44.716 79.217 44.3694 79.217C44.1227 79.217 43.9027 79.287 43.7094 79.427C43.516 79.5604 43.366 79.7404 43.2594 79.967C43.1527 80.1937 43.0994 80.437 43.0994 80.697V83.457H41.9994V78.357Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M63.2028 76.297H67.5528V77.367H64.3228V79.427H67.2328V80.487H64.3228V83.457H63.2028V76.297ZM70.5872 83.617C70.0872 83.617 69.6372 83.5004 69.2372 83.267C68.8439 83.0337 68.5339 82.7137 68.3072 82.307C68.0872 81.8937 67.9772 81.4304 67.9772 80.917C67.9772 80.4304 68.0839 79.9804 68.2972 79.567C68.5172 79.147 68.8205 78.8137 69.2072 78.567C69.5939 78.3204 70.0339 78.197 70.5272 78.197C71.0405 78.197 71.4839 78.3104 71.8572 78.537C72.2372 78.7637 72.5239 79.0737 72.7172 79.467C72.9172 79.8604 73.0172 80.3037 73.0172 80.797C73.0172 80.8904 73.0072 81.007 72.9872 81.147H69.0772C69.1172 81.6204 69.2839 81.987 69.5772 82.247C69.8772 82.5004 70.2239 82.627 70.6172 82.627C70.9305 82.627 71.2005 82.557 71.4272 82.417C71.6605 82.2704 71.8472 82.0737 71.9872 81.827L72.9172 82.267C72.6772 82.687 72.3639 83.017 71.9772 83.257C71.5905 83.497 71.1272 83.617 70.5872 83.617ZM71.8972 80.307C71.8839 80.127 71.8272 79.9504 71.7272 79.777C71.6272 79.597 71.4739 79.447 71.2672 79.327C71.0672 79.207 70.8205 79.147 70.5272 79.147C70.1739 79.147 69.8739 79.2537 69.6272 79.467C69.3872 79.6737 69.2205 79.9537 69.1272 80.307H71.8972ZM76.7389 83.617C76.3789 83.617 76.0556 83.537 75.7689 83.377C75.4822 83.217 75.2656 83.0237 75.1189 82.797H75.0689V83.457H74.0189V76.297H75.1189V78.307L75.0689 79.027H75.1189C75.2656 78.7937 75.4822 78.597 75.7689 78.437C76.0556 78.277 76.3789 78.197 76.7389 78.197C77.1989 78.197 77.6156 78.3137 77.9889 78.547C78.3622 78.7804 78.6556 79.1037 78.8689 79.517C79.0889 79.9237 79.1989 80.387 79.1989 80.907C79.1989 81.427 79.0889 81.8937 78.8689 82.307C78.6556 82.7137 78.3622 83.0337 77.9889 83.267C77.6156 83.5004 77.1989 83.617 76.7389 83.617ZM76.5789 82.607C76.8456 82.607 77.0956 82.537 77.3289 82.397C77.5622 82.257 77.7489 82.057 77.8889 81.797C78.0289 81.537 78.0989 81.2404 78.0989 80.907C78.0989 80.5737 78.0289 80.2804 77.8889 80.027C77.7489 79.767 77.5622 79.567 77.3289 79.427C77.0956 79.287 76.8456 79.217 76.5789 79.217C76.3122 79.217 76.0622 79.287 75.8289 79.427C75.6022 79.567 75.4189 79.767 75.2789 80.027C75.1389 80.2804 75.0689 80.5737 75.0689 80.907C75.0689 81.2404 75.1389 81.537 75.2789 81.797C75.4189 82.057 75.6022 82.257 75.8289 82.397C76.0622 82.537 76.3122 82.607 76.5789 82.607Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M96.2028 76.297H97.7228L99.7828 81.727H99.8428L101.903 76.297H103.423V83.457H102.313V79.447L102.373 78.157H102.313L100.263 83.457H99.3628L97.3128 78.157H97.2528L97.3128 79.447V83.457H96.2028V76.297ZM106.334 83.617C105.967 83.617 105.64 83.547 105.354 83.407C105.067 83.2604 104.844 83.057 104.684 82.797C104.524 82.5304 104.444 82.2304 104.444 81.897C104.444 81.3704 104.64 80.9537 105.034 80.647C105.434 80.3404 105.937 80.187 106.544 80.187C106.844 80.187 107.114 80.217 107.354 80.277C107.594 80.3304 107.784 80.3904 107.924 80.457V80.197C107.924 79.8837 107.807 79.6304 107.574 79.437C107.34 79.237 107.04 79.137 106.674 79.137C106.414 79.137 106.167 79.1937 105.934 79.307C105.707 79.4204 105.524 79.577 105.384 79.777L104.614 79.187C104.84 78.8737 105.134 78.6304 105.494 78.457C105.854 78.2837 106.254 78.197 106.694 78.197C107.434 78.197 108.004 78.3804 108.404 78.747C108.804 79.107 109.004 79.617 109.004 80.277V83.457H107.924V82.847H107.874C107.727 83.067 107.52 83.2504 107.254 83.397C106.987 83.5437 106.68 83.617 106.334 83.617ZM106.524 82.707C106.79 82.707 107.03 82.6437 107.244 82.517C107.457 82.3904 107.624 82.2204 107.744 82.007C107.864 81.7937 107.924 81.5637 107.924 81.317C107.77 81.2304 107.59 81.1604 107.384 81.107C107.184 81.0537 106.974 81.027 106.754 81.027C106.34 81.027 106.037 81.1104 105.844 81.277C105.65 81.437 105.554 81.647 105.554 81.907C105.554 82.1404 105.644 82.3337 105.824 82.487C106.004 82.6337 106.237 82.707 106.524 82.707ZM110.203 78.357H111.253V79.107H111.303C111.416 78.847 111.613 78.6337 111.893 78.467C112.173 78.2937 112.469 78.207 112.783 78.207C113.029 78.207 113.236 78.2404 113.403 78.307V79.447C113.109 79.3404 112.846 79.287 112.613 79.287C112.359 79.287 112.133 79.3537 111.933 79.487C111.739 79.6204 111.586 79.8004 111.473 80.027C111.359 80.247 111.303 80.4904 111.303 80.757V83.457H110.203V78.357Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M132.223 76.297H133.503L136.193 83.457H134.953L134.313 81.627H131.423L130.773 83.457H129.533L132.223 76.297ZM133.933 80.587L133.173 78.457L132.893 77.627H132.833L132.553 78.457L131.793 80.587H133.933ZM136.995 78.357H138.045V79.027H138.095C138.241 78.7937 138.458 78.597 138.745 78.437C139.031 78.277 139.355 78.197 139.715 78.197C140.175 78.197 140.591 78.3137 140.965 78.547C141.338 78.7804 141.631 79.1037 141.845 79.517C142.065 79.9237 142.175 80.387 142.175 80.907C142.175 81.427 142.065 81.8937 141.845 82.307C141.631 82.7137 141.338 83.0337 140.965 83.267C140.591 83.5004 140.175 83.617 139.715 83.617C139.355 83.617 139.031 83.537 138.745 83.377C138.458 83.217 138.241 83.0237 138.095 82.797H138.045L138.095 83.507V85.617H136.995V78.357ZM139.555 82.607C139.821 82.607 140.071 82.537 140.305 82.397C140.538 82.257 140.725 82.057 140.865 81.797C141.005 81.537 141.075 81.2404 141.075 80.907C141.075 80.5737 141.005 80.2804 140.865 80.027C140.725 79.767 140.538 79.567 140.305 79.427C140.071 79.287 139.821 79.217 139.555 79.217C139.288 79.217 139.038 79.287 138.805 79.427C138.578 79.567 138.395 79.767 138.255 80.027C138.115 80.2804 138.045 80.5737 138.045 80.907C138.045 81.2404 138.115 81.537 138.255 81.797C138.395 82.057 138.578 82.257 138.805 82.397C139.038 82.537 139.288 82.607 139.555 82.607ZM143.128 78.357H144.178V79.107H144.228C144.342 78.847 144.538 78.6337 144.818 78.467C145.098 78.2937 145.395 78.207 145.708 78.207C145.955 78.207 146.162 78.2404 146.328 78.307V79.447C146.035 79.3404 145.772 79.287 145.538 79.287C145.285 79.287 145.058 79.3537 144.858 79.487C144.665 79.6204 144.512 79.8004 144.398 80.027C144.285 80.247 144.228 80.4904 144.228 80.757V83.457H143.128V78.357Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M163.203 76.297H164.723L166.783 81.727H166.843L168.903 76.297H170.423V83.457H169.313V79.447L169.373 78.157H169.313L167.263 83.457H166.363L164.313 78.157H164.253L164.313 79.447V83.457H163.203V76.297ZM173.334 83.617C172.967 83.617 172.64 83.547 172.354 83.407C172.067 83.2604 171.844 83.057 171.684 82.797C171.524 82.5304 171.444 82.2304 171.444 81.897C171.444 81.3704 171.64 80.9537 172.034 80.647C172.434 80.3404 172.937 80.187 173.544 80.187C173.844 80.187 174.114 80.217 174.354 80.277C174.594 80.3304 174.784 80.3904 174.924 80.457V80.197C174.924 79.8837 174.807 79.6304 174.574 79.437C174.34 79.237 174.04 79.137 173.674 79.137C173.414 79.137 173.167 79.1937 172.934 79.307C172.707 79.4204 172.524 79.577 172.384 79.777L171.614 79.187C171.84 78.8737 172.134 78.6304 172.494 78.457C172.854 78.2837 173.254 78.197 173.694 78.197C174.434 78.197 175.004 78.3804 175.404 78.747C175.804 79.107 176.004 79.617 176.004 80.277V83.457H174.924V82.847H174.874C174.727 83.067 174.52 83.2504 174.254 83.397C173.987 83.5437 173.68 83.617 173.334 83.617ZM173.524 82.707C173.79 82.707 174.03 82.6437 174.244 82.517C174.457 82.3904 174.624 82.2204 174.744 82.007C174.864 81.7937 174.924 81.5637 174.924 81.317C174.77 81.2304 174.59 81.1604 174.384 81.107C174.184 81.0537 173.974 81.027 173.754 81.027C173.34 81.027 173.037 81.1104 172.844 81.277C172.65 81.437 172.554 81.647 172.554 81.907C172.554 82.1404 172.644 82.3337 172.824 82.487C173.004 82.6337 173.237 82.707 173.524 82.707ZM178.665 83.177L176.545 78.357H177.775L179.215 81.827H179.255L180.655 78.357H181.865L178.715 85.617H177.555L178.665 83.177Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M199.943 83.617C199.396 83.617 198.919 83.4704 198.513 83.177C198.106 82.877 197.819 82.4604 197.653 81.927L198.693 81.497C198.899 82.197 199.316 82.547 199.943 82.547C200.289 82.547 200.566 82.4304 200.773 82.197C200.979 81.957 201.083 81.6437 201.083 81.257V76.297H202.193V81.217C202.193 81.7237 202.096 82.157 201.903 82.517C201.709 82.877 201.443 83.1504 201.103 83.337C200.763 83.5237 200.376 83.617 199.943 83.617ZM205.293 83.617C204.673 83.617 204.2 83.4337 203.873 83.067C203.553 82.6937 203.393 82.177 203.393 81.517V78.357H204.493V81.367C204.493 81.7804 204.59 82.0904 204.783 82.297C204.983 82.5037 205.243 82.607 205.563 82.607C205.823 82.607 206.053 82.5404 206.253 82.407C206.453 82.267 206.606 82.0837 206.713 81.857C206.82 81.6304 206.873 81.387 206.873 81.127V78.357H207.973V83.457H206.933V82.797H206.873C206.733 83.037 206.516 83.2337 206.223 83.387C205.93 83.5404 205.62 83.617 205.293 83.617ZM209.253 78.357H210.303V79.027H210.353C210.5 78.787 210.717 78.5904 211.003 78.437C211.297 78.277 211.607 78.197 211.933 78.197C212.553 78.197 213.023 78.3804 213.343 78.747C213.67 79.107 213.833 79.6004 213.833 80.227V83.457H212.733V80.377C212.733 79.977 212.633 79.6837 212.433 79.497C212.24 79.3104 211.97 79.217 211.623 79.217C211.377 79.217 211.157 79.287 210.963 79.427C210.77 79.5604 210.62 79.7404 210.513 79.967C210.407 80.1937 210.353 80.437 210.353 80.697V83.457H209.253V78.357Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M232.943 83.617C232.396 83.617 231.919 83.4704 231.513 83.177C231.106 82.877 230.819 82.4604 230.653 81.927L231.693 81.497C231.899 82.197 232.316 82.547 232.943 82.547C233.289 82.547 233.566 82.4304 233.773 82.197C233.979 81.957 234.083 81.6437 234.083 81.257V76.297H235.193V81.217C235.193 81.7237 235.096 82.157 234.903 82.517C234.709 82.877 234.443 83.1504 234.103 83.337C233.763 83.5237 233.376 83.617 232.943 83.617ZM238.293 83.617C237.673 83.617 237.2 83.4337 236.873 83.067C236.553 82.6937 236.393 82.177 236.393 81.517V78.357H237.493V81.367C237.493 81.7804 237.59 82.0904 237.783 82.297C237.983 82.5037 238.243 82.607 238.563 82.607C238.823 82.607 239.053 82.5404 239.253 82.407C239.453 82.267 239.606 82.0837 239.713 81.857C239.82 81.6304 239.873 81.387 239.873 81.127V78.357H240.973V83.457H239.933V82.797H239.873C239.733 83.037 239.516 83.2337 239.223 83.387C238.93 83.5404 238.62 83.617 238.293 83.617ZM242.253 76.297H243.353V83.457H242.253V76.297Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M262.223 76.297H263.503L266.193 83.457H264.953L264.313 81.627H261.423L260.773 83.457H259.533L262.223 76.297ZM263.933 80.587L263.173 78.457L262.893 77.627H262.833L262.553 78.457L261.793 80.587H263.933ZM268.592 83.617C267.972 83.617 267.498 83.4337 267.172 83.067C266.852 82.6937 266.692 82.177 266.692 81.517V78.357H267.792V81.367C267.792 81.7804 267.888 82.0904 268.082 82.297C268.282 82.5037 268.542 82.607 268.862 82.607C269.122 82.607 269.352 82.5404 269.552 82.407C269.752 82.267 269.905 82.0837 270.012 81.857C270.118 81.6304 270.172 81.387 270.172 81.127V78.357H271.272V83.457H270.232V82.797H270.172C270.032 83.037 269.815 83.2337 269.522 83.387C269.228 83.5404 268.918 83.617 268.592 83.617ZM274.803 85.777C274.177 85.777 273.657 85.6337 273.243 85.347C272.837 85.0604 272.563 84.7204 272.423 84.327L273.453 83.897C273.56 84.1637 273.73 84.377 273.963 84.537C274.203 84.7037 274.483 84.787 274.803 84.787C275.27 84.787 275.633 84.647 275.893 84.367C276.16 84.0937 276.293 83.707 276.293 83.207V82.737H276.233C276.067 82.977 275.843 83.167 275.563 83.307C275.29 83.4404 274.973 83.507 274.613 83.507C274.187 83.507 273.79 83.397 273.423 83.177C273.057 82.957 272.763 82.647 272.543 82.247C272.33 81.8404 272.223 81.377 272.223 80.857C272.223 80.337 272.33 79.877 272.543 79.477C272.763 79.0704 273.057 78.757 273.423 78.537C273.79 78.3104 274.187 78.197 274.613 78.197C274.967 78.197 275.283 78.267 275.563 78.407C275.843 78.547 276.067 78.737 276.233 78.977H276.293V78.357H277.343V83.177C277.343 83.7304 277.237 84.2004 277.023 84.587C276.81 84.9804 276.51 85.277 276.123 85.477C275.743 85.677 275.303 85.777 274.803 85.777ZM274.813 82.507C275.08 82.507 275.327 82.4437 275.553 82.317C275.78 82.1837 275.96 81.9937 276.093 81.747C276.227 81.4937 276.293 81.197 276.293 80.857C276.293 80.337 276.15 79.9337 275.863 79.647C275.583 79.3537 275.233 79.207 274.813 79.207C274.54 79.207 274.29 79.2737 274.063 79.407C273.837 79.5337 273.657 79.7204 273.523 79.967C273.39 80.2137 273.323 80.5104 273.323 80.857C273.323 81.2037 273.39 81.5004 273.523 81.747C273.657 81.9937 273.837 82.1837 274.063 82.317C274.29 82.4437 274.54 82.507 274.813 82.507Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M296.273 83.617C295.679 83.617 295.146 83.4437 294.673 83.097C294.199 82.7504 293.873 82.2637 293.693 81.637L294.753 81.207C294.859 81.6004 295.046 81.9237 295.313 82.177C295.586 82.4237 295.913 82.547 296.293 82.547C296.646 82.547 296.946 82.457 297.193 82.277C297.439 82.0904 297.563 81.837 297.563 81.517C297.563 81.2237 297.453 80.9837 297.233 80.797C297.019 80.6037 296.643 80.4104 296.103 80.217L295.653 80.057C295.173 79.8904 294.769 79.6504 294.443 79.337C294.116 79.0237 293.953 78.6104 293.953 78.097C293.953 77.7437 294.049 77.417 294.243 77.117C294.436 76.817 294.703 76.5804 295.043 76.407C295.389 76.227 295.779 76.137 296.213 76.137C296.839 76.137 297.339 76.2904 297.713 76.597C298.086 76.897 298.336 77.237 298.463 77.617L297.453 78.047C297.379 77.8204 297.239 77.6204 297.033 77.447C296.826 77.2737 296.559 77.187 296.233 77.187C295.906 77.187 295.629 77.2704 295.403 77.437C295.183 77.6037 295.073 77.817 295.073 78.077C295.073 78.3237 295.173 78.527 295.373 78.687C295.573 78.847 295.886 79.0004 296.313 79.147L296.763 79.297C297.376 79.5104 297.849 79.7904 298.183 80.137C298.523 80.477 298.693 80.9337 298.693 81.507C298.693 81.9737 298.573 82.367 298.333 82.687C298.093 83.0004 297.786 83.2337 297.413 83.387C297.046 83.5404 296.666 83.617 296.273 83.617ZM302.124 83.617C301.624 83.617 301.174 83.5004 300.774 83.267C300.381 83.0337 300.071 82.7137 299.844 82.307C299.624 81.8937 299.514 81.4304 299.514 80.917C299.514 80.4304 299.621 79.9804 299.834 79.567C300.054 79.147 300.358 78.8137 300.744 78.567C301.131 78.3204 301.571 78.197 302.064 78.197C302.578 78.197 303.021 78.3104 303.394 78.537C303.774 78.7637 304.061 79.0737 304.254 79.467C304.454 79.8604 304.554 80.3037 304.554 80.797C304.554 80.8904 304.544 81.007 304.524 81.147H300.614C300.654 81.6204 300.821 81.987 301.114 82.247C301.414 82.5004 301.761 82.627 302.154 82.627C302.468 82.627 302.738 82.557 302.964 82.417C303.198 82.2704 303.384 82.0737 303.524 81.827L304.454 82.267C304.214 82.687 303.901 83.017 303.514 83.257C303.128 83.497 302.664 83.617 302.124 83.617ZM303.434 80.307C303.421 80.127 303.364 79.9504 303.264 79.777C303.164 79.597 303.011 79.447 302.804 79.327C302.604 79.207 302.358 79.147 302.064 79.147C301.711 79.147 301.411 79.2537 301.164 79.467C300.924 79.6737 300.758 79.9537 300.664 80.307H303.434ZM305.516 78.357H306.566V79.027H306.616C306.763 78.7937 306.979 78.597 307.266 78.437C307.553 78.277 307.876 78.197 308.236 78.197C308.696 78.197 309.113 78.3137 309.486 78.547C309.859 78.7804 310.153 79.1037 310.366 79.517C310.586 79.9237 310.696 80.387 310.696 80.907C310.696 81.427 310.586 81.8937 310.366 82.307C310.153 82.7137 309.859 83.0337 309.486 83.267C309.113 83.5004 308.696 83.617 308.236 83.617C307.876 83.617 307.553 83.537 307.266 83.377C306.979 83.217 306.763 83.0237 306.616 82.797H306.566L306.616 83.507V85.617H305.516V78.357ZM308.076 82.607C308.343 82.607 308.593 82.537 308.826 82.397C309.059 82.257 309.246 82.057 309.386 81.797C309.526 81.537 309.596 81.2404 309.596 80.907C309.596 80.5737 309.526 80.2804 309.386 80.027C309.246 79.767 309.059 79.567 308.826 79.427C308.593 79.287 308.343 79.217 308.076 79.217C307.809 79.217 307.559 79.287 307.326 79.427C307.099 79.567 306.916 79.767 306.776 80.027C306.636 80.2804 306.566 80.5737 306.566 80.907C306.566 81.2404 306.636 81.537 306.776 81.797C306.916 82.057 307.099 82.257 307.326 82.397C307.559 82.537 307.809 82.607 308.076 82.607Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M330.553 83.617C329.859 83.617 329.229 83.4537 328.663 83.127C328.096 82.7937 327.649 82.3404 327.323 81.767C327.003 81.1937 326.843 80.5637 326.843 79.877C326.843 79.1904 327.003 78.5637 327.323 77.997C327.649 77.4237 328.096 76.9704 328.663 76.637C329.229 76.3037 329.859 76.137 330.553 76.137C331.246 76.137 331.873 76.3037 332.433 76.637C332.999 76.9704 333.446 77.4237 333.773 77.997C334.099 78.5637 334.263 79.1904 334.263 79.877C334.263 80.5637 334.099 81.1937 333.773 81.767C333.453 82.3404 333.009 82.7937 332.443 83.127C331.876 83.4537 331.246 83.617 330.553 83.617ZM330.553 82.547C331.026 82.547 331.459 82.4337 331.853 82.207C332.246 81.9804 332.556 81.667 332.783 81.267C333.009 80.8604 333.123 80.397 333.123 79.877C333.123 79.357 333.009 78.897 332.783 78.497C332.556 78.0904 332.246 77.7737 331.853 77.547C331.459 77.3204 331.026 77.207 330.553 77.207C330.079 77.207 329.646 77.3204 329.253 77.547C328.859 77.7737 328.546 78.0904 328.313 78.497C328.086 78.897 327.973 79.357 327.973 79.877C327.973 80.397 328.086 80.8604 328.313 81.267C328.546 81.667 328.859 81.9804 329.253 82.207C329.646 82.4337 330.079 82.547 330.553 82.547ZM337.723 83.617C337.216 83.617 336.759 83.5004 336.353 83.267C335.953 83.0337 335.639 82.7137 335.413 82.307C335.193 81.8937 335.083 81.427 335.083 80.907C335.083 80.387 335.193 79.9237 335.413 79.517C335.639 79.1037 335.953 78.7804 336.353 78.547C336.759 78.3137 337.216 78.197 337.723 78.197C338.283 78.197 338.759 78.3237 339.153 78.577C339.546 78.8304 339.826 79.1737 339.993 79.607L338.983 80.027C338.756 79.487 338.326 79.217 337.693 79.217C337.419 79.217 337.166 79.287 336.933 79.427C336.706 79.567 336.523 79.767 336.383 80.027C336.249 80.2804 336.183 80.5737 336.183 80.907C336.183 81.2404 336.249 81.537 336.383 81.797C336.523 82.057 336.706 82.257 336.933 82.397C337.166 82.537 337.419 82.607 337.693 82.607C338.013 82.607 338.286 82.537 338.513 82.397C338.746 82.2504 338.923 82.0437 339.043 81.777L340.033 82.207C339.839 82.6404 339.546 82.9837 339.153 83.237C338.759 83.4904 338.283 83.617 337.723 83.617ZM343.009 83.537C342.783 83.537 342.569 83.5004 342.369 83.427C342.169 83.3537 342.006 83.257 341.879 83.137C341.593 82.8504 341.449 82.4604 341.449 81.967V79.327H340.559V78.357H341.449V76.917H342.549V78.357H343.789V79.327H342.549V81.727C342.549 82.0004 342.603 82.1937 342.709 82.307C342.809 82.4404 342.983 82.507 343.229 82.507C343.343 82.507 343.443 82.4937 343.529 82.467C343.616 82.4337 343.709 82.3837 343.809 82.317V83.387C343.589 83.487 343.323 83.537 343.009 83.537Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M360.203 76.297H361.533L364.733 81.507H364.793L364.733 80.127V76.297H365.843V83.457H364.673L361.313 77.977H361.253L361.313 79.357V83.457H360.203V76.297ZM369.688 83.617C369.175 83.617 368.715 83.5004 368.308 83.267C367.902 83.027 367.585 82.7004 367.358 82.287C367.132 81.8737 367.018 81.4137 367.018 80.907C367.018 80.4004 367.132 79.9404 367.358 79.527C367.585 79.1137 367.902 78.7904 368.308 78.557C368.715 78.317 369.175 78.197 369.688 78.197C370.202 78.197 370.662 78.317 371.068 78.557C371.475 78.797 371.792 79.1237 372.018 79.537C372.245 79.9504 372.358 80.407 372.358 80.907C372.358 81.4137 372.245 81.8737 372.018 82.287C371.792 82.7004 371.475 83.027 371.068 83.267C370.662 83.5004 370.202 83.617 369.688 83.617ZM369.688 82.607C369.968 82.607 370.228 82.5404 370.468 82.407C370.708 82.267 370.898 82.0704 371.038 81.817C371.185 81.557 371.258 81.2537 371.258 80.907C371.258 80.5604 371.185 80.2604 371.038 80.007C370.898 79.7537 370.708 79.5604 370.468 79.427C370.228 79.287 369.968 79.217 369.688 79.217C369.408 79.217 369.148 79.287 368.908 79.427C368.668 79.5604 368.475 79.7537 368.328 80.007C368.188 80.2604 368.118 80.5604 368.118 80.907C368.118 81.2537 368.188 81.557 368.328 81.817C368.475 82.0704 368.668 82.267 368.908 82.407C369.148 82.5404 369.408 82.607 369.688 82.607ZM372.656 78.357H373.886L375.296 82.037H375.336L376.776 78.357H377.976L375.856 83.457H374.756L372.656 78.357Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M394.203 76.297H396.493C397.233 76.297 397.879 76.447 398.433 76.747C398.986 77.047 399.409 77.4704 399.703 78.017C400.003 78.557 400.153 79.177 400.153 79.877C400.153 80.577 400.003 81.2004 399.703 81.747C399.409 82.287 398.986 82.707 398.433 83.007C397.879 83.307 397.233 83.457 396.493 83.457H394.203V76.297ZM396.473 82.387C397.273 82.387 397.896 82.167 398.343 81.727C398.796 81.2804 399.023 80.6637 399.023 79.877C399.023 79.097 398.796 78.4837 398.343 78.037C397.896 77.5904 397.273 77.367 396.473 77.367H395.323V82.387H396.473ZM403.433 83.617C402.933 83.617 402.483 83.5004 402.083 83.267C401.69 83.0337 401.38 82.7137 401.153 82.307C400.933 81.8937 400.823 81.4304 400.823 80.917C400.823 80.4304 400.93 79.9804 401.143 79.567C401.363 79.147 401.666 78.8137 402.053 78.567C402.44 78.3204 402.88 78.197 403.373 78.197C403.886 78.197 404.33 78.3104 404.703 78.537C405.083 78.7637 405.37 79.0737 405.563 79.467C405.763 79.8604 405.863 80.3037 405.863 80.797C405.863 80.8904 405.853 81.007 405.833 81.147H401.923C401.963 81.6204 402.13 81.987 402.423 82.247C402.723 82.5004 403.07 82.627 403.463 82.627C403.776 82.627 404.046 82.557 404.273 82.417C404.506 82.2704 404.693 82.0737 404.833 81.827L405.763 82.267C405.523 82.687 405.21 83.017 404.823 83.257C404.436 83.497 403.973 83.617 403.433 83.617ZM404.743 80.307C404.73 80.127 404.673 79.9504 404.573 79.777C404.473 79.597 404.32 79.447 404.113 79.327C403.913 79.207 403.666 79.147 403.373 79.147C403.02 79.147 402.72 79.2537 402.473 79.467C402.233 79.6737 402.066 79.9537 401.973 80.307H404.743ZM409.273 83.617C408.767 83.617 408.31 83.5004 407.903 83.267C407.503 83.0337 407.19 82.7137 406.963 82.307C406.743 81.8937 406.633 81.427 406.633 80.907C406.633 80.387 406.743 79.9237 406.963 79.517C407.19 79.1037 407.503 78.7804 407.903 78.547C408.31 78.3137 408.767 78.197 409.273 78.197C409.833 78.197 410.31 78.3237 410.703 78.577C411.097 78.8304 411.377 79.1737 411.543 79.607L410.533 80.027C410.307 79.487 409.877 79.217 409.243 79.217C408.97 79.217 408.717 79.287 408.483 79.427C408.257 79.567 408.073 79.767 407.933 80.027C407.8 80.2804 407.733 80.5737 407.733 80.907C407.733 81.2404 407.8 81.537 407.933 81.797C408.073 82.057 408.257 82.257 408.483 82.397C408.717 82.537 408.97 82.607 409.243 82.607C409.563 82.607 409.837 82.537 410.063 82.397C410.297 82.2504 410.473 82.0437 410.593 81.777L411.583 82.207C411.39 82.6404 411.097 82.9837 410.703 83.237C410.31 83.4904 409.833 83.617 409.273 83.617Z"
                                            fill="black"
                                        />
                                    </g>
                                    <g opacity="0.4">
                                        <path
                                            d="M4.31576 7.59557H1.11576V6.73557L4.22576 2.11557H5.41576V6.57557H6.28576V7.59557H5.41576V8.95557H4.31576V7.59557ZM4.31576 6.57557V3.74557H4.25576L2.34576 6.57557H4.31576ZM10.079 9.11557C9.51904 9.11557 9.02571 8.9589 8.59904 8.64557C8.17238 8.32557 7.84238 7.89557 7.60904 7.35557C7.38238 6.8089 7.26904 6.20223 7.26904 5.53557C7.26904 4.86223 7.38238 4.25557 7.60904 3.71557C7.84238 3.1689 8.17238 2.7389 8.59904 2.42557C9.02571 2.11223 9.51904 1.95557 10.079 1.95557C10.639 1.95557 11.129 2.11223 11.549 2.42557C11.9757 2.7389 12.3024 3.1689 12.529 3.71557C12.7624 4.25557 12.879 4.86223 12.879 5.53557C12.879 6.20223 12.7624 6.8089 12.529 7.35557C12.3024 7.89557 11.9757 8.32557 11.549 8.64557C11.1224 8.9589 10.6324 9.11557 10.079 9.11557ZM10.079 8.07557C10.419 8.07557 10.7157 7.96557 10.969 7.74557C11.229 7.5189 11.4257 7.21557 11.559 6.83557C11.699 6.4489 11.769 6.01557 11.769 5.53557C11.769 5.05557 11.699 4.62223 11.559 4.23557C11.4257 3.8489 11.229 3.54557 10.969 3.32557C10.7157 3.10557 10.419 2.99557 10.079 2.99557C9.73238 2.99557 9.43238 3.10557 9.17904 3.32557C8.92571 3.54557 8.72904 3.8489 8.58904 4.23557C8.45571 4.62223 8.38904 5.05557 8.38904 5.53557C8.38904 6.01557 8.45571 6.4489 8.58904 6.83557C8.72904 7.21557 8.92571 7.5189 9.17904 7.74557C9.43238 7.96557 9.73238 8.07557 10.079 8.07557ZM16.7001 9.11557C16.1401 9.11557 15.6468 8.9589 15.2201 8.64557C14.7935 8.32557 14.4635 7.89557 14.2301 7.35557C14.0035 6.8089 13.8901 6.20223 13.8901 5.53557C13.8901 4.86223 14.0035 4.25557 14.2301 3.71557C14.4635 3.1689 14.7935 2.7389 15.2201 2.42557C15.6468 2.11223 16.1401 1.95557 16.7001 1.95557C17.2601 1.95557 17.7501 2.11223 18.1701 2.42557C18.5968 2.7389 18.9235 3.1689 19.1501 3.71557C19.3835 4.25557 19.5001 4.86223 19.5001 5.53557C19.5001 6.20223 19.3835 6.8089 19.1501 7.35557C18.9235 7.89557 18.5968 8.32557 18.1701 8.64557C17.7435 8.9589 17.2535 9.11557 16.7001 9.11557ZM16.7001 8.07557C17.0401 8.07557 17.3368 7.96557 17.5901 7.74557C17.8501 7.5189 18.0468 7.21557 18.1801 6.83557C18.3201 6.4489 18.3901 6.01557 18.3901 5.53557C18.3901 5.05557 18.3201 4.62223 18.1801 4.23557C18.0468 3.8489 17.8501 3.54557 17.5901 3.32557C17.3368 3.10557 17.0401 2.99557 16.7001 2.99557C16.3535 2.99557 16.0535 3.10557 15.8001 3.32557C15.5468 3.54557 15.3501 3.8489 15.2101 4.23557C15.0768 4.62223 15.0101 5.05557 15.0101 5.53557C15.0101 6.01557 15.0768 6.4489 15.2101 6.83557C15.3501 7.21557 15.5468 7.5189 15.8001 7.74557C16.0535 7.96557 16.3535 8.07557 16.7001 8.07557ZM20.6512 1.79557H21.7512V5.96557H21.7812L23.8712 3.85557H25.2512V3.91557L23.2712 5.88557L25.3112 8.89557V8.95557H24.0012L22.5012 6.64557L21.7512 7.37557V8.95557H20.6512V1.79557Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M3.97193 28.5861C3.4586 28.5861 2.98193 28.4395 2.54193 28.1461C2.10193 27.8461 1.7986 27.4095 1.63193 26.8361L2.65193 26.4161C2.74527 26.7695 2.90527 27.0428 3.13193 27.2361C3.36527 27.4295 3.64527 27.5261 3.97193 27.5261C4.30527 27.5261 4.59193 27.4261 4.83193 27.2261C5.07193 27.0195 5.19193 26.7595 5.19193 26.4461C5.19193 26.1261 5.06527 25.8661 4.81193 25.6661C4.5586 25.4595 4.24193 25.3561 3.86193 25.3561H3.27193V24.3461H3.80193C4.1286 24.3461 4.40193 24.2595 4.62193 24.0861C4.8486 23.9061 4.96193 23.6628 4.96193 23.3561C4.96193 23.0828 4.86193 22.8661 4.66193 22.7061C4.46193 22.5395 4.2086 22.4561 3.90193 22.4561C3.60193 22.4561 3.36193 22.5361 3.18193 22.6961C3.0086 22.8561 2.88193 23.0528 2.80193 23.2861L1.79193 22.8661C1.92527 22.4861 2.17193 22.1528 2.53193 21.8661C2.89193 21.5728 3.35193 21.4261 3.91193 21.4261C4.32527 21.4261 4.69527 21.5061 5.02193 21.6661C5.35527 21.8261 5.61527 22.0495 5.80193 22.3361C5.9886 22.6161 6.08193 22.9328 6.08193 23.2861C6.08193 23.6461 5.99527 23.9528 5.82193 24.2061C5.6486 24.4528 5.43527 24.6428 5.18193 24.7761V24.8361C5.51527 24.9761 5.7886 25.1895 6.00193 25.4761C6.21527 25.7628 6.32193 26.1061 6.32193 26.5061C6.32193 26.9061 6.2186 27.2628 6.01193 27.5761C5.81193 27.8895 5.53193 28.1361 5.17193 28.3161C4.8186 28.4961 4.4186 28.5861 3.97193 28.5861ZM10.079 28.5861C9.51904 28.5861 9.02571 28.4295 8.59904 28.1161C8.17238 27.7961 7.84238 27.3661 7.60904 26.8261C7.38238 26.2795 7.26904 25.6728 7.26904 25.0061C7.26904 24.3328 7.38238 23.7261 7.60904 23.1861C7.84238 22.6395 8.17238 22.2095 8.59904 21.8961C9.02571 21.5828 9.51904 21.4261 10.079 21.4261C10.639 21.4261 11.129 21.5828 11.549 21.8961C11.9757 22.2095 12.3024 22.6395 12.529 23.1861C12.7624 23.7261 12.879 24.3328 12.879 25.0061C12.879 25.6728 12.7624 26.2795 12.529 26.8261C12.3024 27.3661 11.9757 27.7961 11.549 28.1161C11.1224 28.4295 10.6324 28.5861 10.079 28.5861ZM10.079 27.5461C10.419 27.5461 10.7157 27.4361 10.969 27.2161C11.229 26.9895 11.4257 26.6861 11.559 26.3061C11.699 25.9195 11.769 25.4861 11.769 25.0061C11.769 24.5261 11.699 24.0928 11.559 23.7061C11.4257 23.3195 11.229 23.0161 10.969 22.7961C10.7157 22.5761 10.419 22.4661 10.079 22.4661C9.73238 22.4661 9.43238 22.5761 9.17904 22.7961C8.92571 23.0161 8.72904 23.3195 8.58904 23.7061C8.45571 24.0928 8.38904 24.5261 8.38904 25.0061C8.38904 25.4861 8.45571 25.9195 8.58904 26.3061C8.72904 26.6861 8.92571 26.9895 9.17904 27.2161C9.43238 27.4361 9.73238 27.5461 10.079 27.5461ZM16.7001 28.5861C16.1401 28.5861 15.6468 28.4295 15.2201 28.1161C14.7935 27.7961 14.4635 27.3661 14.2301 26.8261C14.0035 26.2795 13.8901 25.6728 13.8901 25.0061C13.8901 24.3328 14.0035 23.7261 14.2301 23.1861C14.4635 22.6395 14.7935 22.2095 15.2201 21.8961C15.6468 21.5828 16.1401 21.4261 16.7001 21.4261C17.2601 21.4261 17.7501 21.5828 18.1701 21.8961C18.5968 22.2095 18.9235 22.6395 19.1501 23.1861C19.3835 23.7261 19.5001 24.3328 19.5001 25.0061C19.5001 25.6728 19.3835 26.2795 19.1501 26.8261C18.9235 27.3661 18.5968 27.7961 18.1701 28.1161C17.7435 28.4295 17.2535 28.5861 16.7001 28.5861ZM16.7001 27.5461C17.0401 27.5461 17.3368 27.4361 17.5901 27.2161C17.8501 26.9895 18.0468 26.6861 18.1801 26.3061C18.3201 25.9195 18.3901 25.4861 18.3901 25.0061C18.3901 24.5261 18.3201 24.0928 18.1801 23.7061C18.0468 23.3195 17.8501 23.0161 17.5901 22.7961C17.3368 22.5761 17.0401 22.4661 16.7001 22.4661C16.3535 22.4661 16.0535 22.5761 15.8001 22.7961C15.5468 23.0161 15.3501 23.3195 15.2101 23.7061C15.0768 24.0928 15.0101 24.5261 15.0101 25.0061C15.0101 25.4861 15.0768 25.9195 15.2101 26.3061C15.3501 26.6861 15.5468 26.9895 15.8001 27.2161C16.0535 27.4361 16.3535 27.5461 16.7001 27.5461ZM20.6512 21.2661H21.7512V25.4361H21.7812L23.8712 23.3261H25.2512V23.3861L23.2712 25.3561L25.3112 28.3661V28.4261H24.0012L22.5012 26.1161L21.7512 26.8461V28.4261H20.6512V21.2661Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81936 46.8567C2.03269 46.6434 2.45269 46.2234 3.07936 45.5967C3.70602 44.9634 4.12269 44.5334 4.32936 44.3067C4.60936 44.0067 4.79936 43.7634 4.89936 43.5767C5.00602 43.3901 5.05936 43.1667 5.05936 42.9067C5.05936 42.6467 4.95936 42.4201 4.75936 42.2267C4.55936 42.0334 4.28936 41.9367 3.94936 41.9367C3.63602 41.9367 3.37936 42.0301 3.17936 42.2167C2.98602 42.3967 2.85936 42.6067 2.79936 42.8467L1.79936 42.4367C1.86602 42.1967 1.98936 41.9601 2.16936 41.7267C2.35602 41.4934 2.60269 41.2967 2.90936 41.1367C3.21602 40.9767 3.56936 40.8967 3.96936 40.8967C4.40269 40.8967 4.78602 40.9867 5.11936 41.1667C5.45936 41.3401 5.71936 41.5801 5.89936 41.8867C6.08602 42.1867 6.17936 42.5201 6.17936 42.8867C6.17936 43.2801 6.07602 43.6601 5.86936 44.0267C5.66936 44.3867 5.41269 44.7234 5.09936 45.0367C4.96602 45.1634 4.62936 45.4967 4.08936 46.0367C3.54269 46.5834 3.26936 46.8567 3.26936 46.8567L3.28936 46.8967H6.26936V47.8967H1.81936V46.8567ZM10.079 48.0567C9.51904 48.0567 9.02571 47.9001 8.59904 47.5867C8.17238 47.2667 7.84238 46.8367 7.60904 46.2967C7.38238 45.7501 7.26904 45.1434 7.26904 44.4767C7.26904 43.8034 7.38238 43.1967 7.60904 42.6567C7.84238 42.1101 8.17238 41.6801 8.59904 41.3667C9.02571 41.0534 9.51904 40.8967 10.079 40.8967C10.639 40.8967 11.129 41.0534 11.549 41.3667C11.9757 41.6801 12.3024 42.1101 12.529 42.6567C12.7624 43.1967 12.879 43.8034 12.879 44.4767C12.879 45.1434 12.7624 45.7501 12.529 46.2967C12.3024 46.8367 11.9757 47.2667 11.549 47.5867C11.1224 47.9001 10.6324 48.0567 10.079 48.0567ZM10.079 47.0167C10.419 47.0167 10.7157 46.9067 10.969 46.6867C11.229 46.4601 11.4257 46.1567 11.559 45.7767C11.699 45.3901 11.769 44.9567 11.769 44.4767C11.769 43.9967 11.699 43.5634 11.559 43.1767C11.4257 42.7901 11.229 42.4867 10.969 42.2667C10.7157 42.0467 10.419 41.9367 10.079 41.9367C9.73238 41.9367 9.43238 42.0467 9.17904 42.2667C8.92571 42.4867 8.72904 42.7901 8.58904 43.1767C8.45571 43.5634 8.38904 43.9967 8.38904 44.4767C8.38904 44.9567 8.45571 45.3901 8.58904 45.7767C8.72904 46.1567 8.92571 46.4601 9.17904 46.6867C9.43238 46.9067 9.73238 47.0167 10.079 47.0167ZM16.7001 48.0567C16.1401 48.0567 15.6468 47.9001 15.2201 47.5867C14.7935 47.2667 14.4635 46.8367 14.2301 46.2967C14.0035 45.7501 13.8901 45.1434 13.8901 44.4767C13.8901 43.8034 14.0035 43.1967 14.2301 42.6567C14.4635 42.1101 14.7935 41.6801 15.2201 41.3667C15.6468 41.0534 16.1401 40.8967 16.7001 40.8967C17.2601 40.8967 17.7501 41.0534 18.1701 41.3667C18.5968 41.6801 18.9235 42.1101 19.1501 42.6567C19.3835 43.1967 19.5001 43.8034 19.5001 44.4767C19.5001 45.1434 19.3835 45.7501 19.1501 46.2967C18.9235 46.8367 18.5968 47.2667 18.1701 47.5867C17.7435 47.9001 17.2535 48.0567 16.7001 48.0567ZM16.7001 47.0167C17.0401 47.0167 17.3368 46.9067 17.5901 46.6867C17.8501 46.4601 18.0468 46.1567 18.1801 45.7767C18.3201 45.3901 18.3901 44.9567 18.3901 44.4767C18.3901 43.9967 18.3201 43.5634 18.1801 43.1767C18.0468 42.7901 17.8501 42.4867 17.5901 42.2667C17.3368 42.0467 17.0401 41.9367 16.7001 41.9367C16.3535 41.9367 16.0535 42.0467 15.8001 42.2667C15.5468 42.4867 15.3501 42.7901 15.2101 43.1767C15.0768 43.5634 15.0101 43.9967 15.0101 44.4767C15.0101 44.9567 15.0768 45.3901 15.2101 45.7767C15.3501 46.1567 15.5468 46.4601 15.8001 46.6867C16.0535 46.9067 16.3535 47.0167 16.7001 47.0167ZM20.6512 40.7367H21.7512V44.9067H21.7812L23.8712 42.7967H25.2512V42.8567L23.2712 44.8267L25.3112 47.8367V47.8967H24.0012L22.5012 45.5867L21.7512 46.3167V47.8967H20.6512V40.7367Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M4.78795 62.0173L3.66795 62.8273L3.10795 61.9773L5.11795 60.5273H5.88795V67.3673H4.78795V62.0173ZM10.079 67.5273C9.51904 67.5273 9.02571 67.3706 8.59904 67.0573C8.17238 66.7373 7.84238 66.3073 7.60904 65.7673C7.38238 65.2206 7.26904 64.614 7.26904 63.9473C7.26904 63.274 7.38238 62.6673 7.60904 62.1273C7.84238 61.5806 8.17238 61.1506 8.59904 60.8373C9.02571 60.524 9.51904 60.3673 10.079 60.3673C10.639 60.3673 11.129 60.524 11.549 60.8373C11.9757 61.1506 12.3024 61.5806 12.529 62.1273C12.7624 62.6673 12.879 63.274 12.879 63.9473C12.879 64.614 12.7624 65.2206 12.529 65.7673C12.3024 66.3073 11.9757 66.7373 11.549 67.0573C11.1224 67.3706 10.6324 67.5273 10.079 67.5273ZM10.079 66.4873C10.419 66.4873 10.7157 66.3773 10.969 66.1573C11.229 65.9306 11.4257 65.6273 11.559 65.2473C11.699 64.8606 11.769 64.4273 11.769 63.9473C11.769 63.4673 11.699 63.034 11.559 62.6473C11.4257 62.2606 11.229 61.9573 10.969 61.7373C10.7157 61.5173 10.419 61.4073 10.079 61.4073C9.73238 61.4073 9.43238 61.5173 9.17904 61.7373C8.92571 61.9573 8.72904 62.2606 8.58904 62.6473C8.45571 63.034 8.38904 63.4673 8.38904 63.9473C8.38904 64.4273 8.45571 64.8606 8.58904 65.2473C8.72904 65.6273 8.92571 65.9306 9.17904 66.1573C9.43238 66.3773 9.73238 66.4873 10.079 66.4873ZM16.7001 67.5273C16.1401 67.5273 15.6468 67.3706 15.2201 67.0573C14.7935 66.7373 14.4635 66.3073 14.2301 65.7673C14.0035 65.2206 13.8901 64.614 13.8901 63.9473C13.8901 63.274 14.0035 62.6673 14.2301 62.1273C14.4635 61.5806 14.7935 61.1506 15.2201 60.8373C15.6468 60.524 16.1401 60.3673 16.7001 60.3673C17.2601 60.3673 17.7501 60.524 18.1701 60.8373C18.5968 61.1506 18.9235 61.5806 19.1501 62.1273C19.3835 62.6673 19.5001 63.274 19.5001 63.9473C19.5001 64.614 19.3835 65.2206 19.1501 65.7673C18.9235 66.3073 18.5968 66.7373 18.1701 67.0573C17.7435 67.3706 17.2535 67.5273 16.7001 67.5273ZM16.7001 66.4873C17.0401 66.4873 17.3368 66.3773 17.5901 66.1573C17.8501 65.9306 18.0468 65.6273 18.1801 65.2473C18.3201 64.8606 18.3901 64.4273 18.3901 63.9473C18.3901 63.4673 18.3201 63.034 18.1801 62.6473C18.0468 62.2606 17.8501 61.9573 17.5901 61.7373C17.3368 61.5173 17.0401 61.4073 16.7001 61.4073C16.3535 61.4073 16.0535 61.5173 15.8001 61.7373C15.5468 61.9573 15.3501 62.2606 15.2101 62.6473C15.0768 63.034 15.0101 63.4673 15.0101 63.9473C15.0101 64.4273 15.0768 64.8606 15.2101 65.2473C15.3501 65.6273 15.5468 65.9306 15.8001 66.1573C16.0535 66.3773 16.3535 66.4873 16.7001 66.4873ZM20.6512 60.2073H21.7512V64.3773H21.7812L23.8712 62.2673H25.2512V62.3273L23.2712 64.2973L25.3112 67.3073V67.3673H24.0012L22.5012 65.0573L21.7512 65.7873V67.3673H20.6512V60.2073Z"
                                            fill="black"
                                        />
                                    </g>
                                    <path
                                        d="M33 65.6714H411.214"
                                        stroke="#DCE3EB"
                                        strokeWidth="0.631372"
                                        strokeLinecap="round"
                                        strokeDasharray="1.89 2.53"
                                    />
                                    <path
                                        d="M33 46.0986H411.214"
                                        stroke="#DCE3EB"
                                        strokeWidth="0.631372"
                                        strokeLinecap="round"
                                        strokeDasharray="1.89 2.53"
                                    />
                                    <path
                                        d="M33 26.5259H411.214"
                                        stroke="#DCE3EB"
                                        strokeWidth="0.631372"
                                        strokeLinecap="round"
                                        strokeDasharray="1.89 2.53"
                                    />
                                    <path
                                        d="M33 6.95361H411.214"
                                        stroke="#DCE3EB"
                                        strokeWidth="0.631372"
                                        strokeLinecap="round"
                                        strokeDasharray="1.89 2.53"
                                    />
                                    <path
                                        d="M47.7191 53.8452L35.4546 56.4469V65.9866H412.588V22.6244L389.811 36.5003L374.042 23.4917L354.769 36.934L339.877 31.7305L321.042 36.5003L308.778 23.9253L298.703 8.53174L280.744 21.974H263.662L251.397 29.7792H236.505L224.678 12.6511L214.166 41.487H202.777L185.257 32.1641H171.678L153.281 47.7745H137.513L130.942 60.7831L122.182 41.487H109.48L104.223 45.6064H92.3969L78.3803 51.4603L71.8101 33.6818H56.4794L47.7191 53.8452Z"
                                        fill="url(#paint0_linear_109_117)"
                                    />
                                    <path
                                        d="M35.4546 56.0078L47.7191 53.4299L56.4794 33.4513H71.8101L78.3803 51.0668L92.3969 45.2666H104.223L109.48 41.1849H122.182L130.942 60.3042L137.513 47.4148H153.281L171.678 31.9475H185.257L202.777 41.1849H214.166L224.678 12.6134L236.505 29.5845H251.397L263.662 21.8508H280.744L298.703 8.53174L308.778 23.7842L321.042 36.244L339.877 31.5179L354.769 36.6736L374.042 23.3546L389.811 36.244L412.588 22.4953"
                                        stroke="url(#paint1_linear_109_117)"
                                        strokeWidth="1.26274"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_109_117"
                                            x1="44.2149"
                                            y1="55.146"
                                            x2="412.586"
                                            y2="54.2611"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#4CDFE8" stopOpacity="0.05" />
                                            <stop offset={1} stopColor="#7947F7" stopOpacity="0.05" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_109_117"
                                            x1="33.2645"
                                            y1="46.7704"
                                            x2="418.282"
                                            y2="46.7704"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#4CDFE8" />
                                            <stop offset={1} stopColor="#7947F7" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex flex-col space-y-4 mb-8 md:flex-row md:space-y-0 md:space-x-4 md:mb-14">
                                <div className="w-full p-4 bg-[#F2E9FF] rounded-xl drop-shadow-md h-1/2 md:w-2/4">
                                    <div className="flex justify-between mb-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1632277535515-73391d9a037b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                                            alt=""
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <svg
                                            width={35}
                                            height={43}
                                            viewBox="0 0 35 43"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width={35} height={43} rx="17.5" fill="#51459E" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.276 17.3125H14.9115C14.4089 17.3125 14 18.0135 14 18.875V25.125C14 25.9865 14.4089 26.6875 14.9115 26.6875H15.276C15.7786 26.6875 16.1875 25.9865 16.1875 25.125V18.875C16.1875 18.0135 15.7786 17.3125 15.276 17.3125Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M20.276 17.3125H19.9115C19.4089 17.3125 19 18.0135 19 18.875V25.125C19 25.9865 19.4089 26.6875 19.9115 26.6875H20.276C20.7786 26.6875 21.1875 25.9865 21.1875 25.125V18.875C21.1875 18.0135 20.7786 17.3125 20.276 17.3125Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#393939] font-bold mb-1">
                                        Strange Cloud Formation
                                    </h3>
                                    <p className="text-sm text-[#7B7B7B]">By Mike Taylor</p>
                                </div>
                                <div className="w-full p-4 bg-white rounded-xl drop-shadow-md md:w-1/4">
                                    <div className="w-full h-20 mb-3">
                                        <svg
                                            width={35}
                                            height={43}
                                            viewBox="0 0 35 43"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto"
                                        >
                                            <rect width={35} height={43} rx="17.5" fill="#84E8F4" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.7498 22.7756C7.7498 15.8196 10.0688 13.5016 17.0238 13.5016C23.9798 13.5016 26.2988 15.8196 26.2988 22.7756C26.2988 29.7316 23.9798 32.0496 17.0238 32.0496C10.0688 32.0496 7.7498 29.7316 7.7498 22.7756Z"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.0252 19.324H26.0332"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.4285 23.261H21.4375"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.0291 23.261H17.0381"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.6214 23.261H12.6304"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.4285 27.113H21.4375"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.0291 27.113H17.0381"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.6214 27.113H12.6304"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M21.033 12.0501V15.3121"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.0247 12.0501V15.3121"
                                                stroke="#D2FAFF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#393939] font-semibold text-center">
                                        Scheduled Post
                                    </h3>
                                </div>
                                <div className="w-full p-4 bg-white rounded-xl drop-shadow-md md:w-1/4">
                                    <div className="w-full h-20 mb-3">
                                        <svg
                                            width={35}
                                            height={43}
                                            viewBox="0 0 35 43"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mx-auto"
                                        >
                                            <rect width={35} height={43} rx="17.5" fill="#84E8F4" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.276 17H17.9115C17.4089 17 17 17.7009 17 18.5625V24.8125C17 25.674 17.4089 26.3749 17.9115 26.3749H18.276C18.7786 26.3749 19.1875 25.674 19.1875 24.8125V18.5625C19.1875 17.7009 18.7786 17 18.276 17Z"
                                                fill="#D2FAFF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.7812 21.8698L22.7812 21.5052C22.7812 21.0026 22.0803 20.5937 21.2187 20.5937L14.9688 20.5937C14.1072 20.5937 13.4063 21.0026 13.4063 21.5052L13.4063 21.8698C13.4063 22.3723 14.1072 22.7812 14.9688 22.7812L21.2187 22.7812C22.0803 22.7812 22.7812 22.3723 22.7812 21.8698Z"
                                                fill="#D2FAFF"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#393939] font-semibold text-center">
                                        Add New Post
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3">
                            <h2 className="text-base font-bold mb-4 text-[#242121]">
                                Distributions
                            </h2>
                            <div className="w-full p-4 bg-white rounded-xl drop-shadow-md">
                                <h3 className="text-sm font-bold mb-2 text-[#1B2767] text-center">
                                    Last 30 Days Performance
                                </h3>
                                <svg
                                    className="mx-auto"
                                    width={196}
                                    height={196}
                                    viewBox="0 0 196 196"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_i_0_245)">
                                        <circle cx="97.5005" cy="86.9414" r="56.0128" fill="#E9EFF6" />
                                    </g>
                                    <g filter="url(#filter1_d_0_245)">
                                        <circle cx="98.0197" cy="86.4227" r="47.7146" fill="white" />
                                    </g>
                                    <path
                                        d="M82.0708 74.0802L79.1888 77.8202C80.2595 78.1282 81.1102 78.6709 81.7408 79.4482C82.3862 80.2255 82.7088 81.1495 82.7088 82.2202C82.7088 83.8042 82.1735 85.0435 81.1028 85.9382C80.0615 86.8329 78.7635 87.2802 77.2088 87.2802C75.9915 87.2802 74.9135 87.0015 73.9748 86.4442C73.0362 85.8722 72.3542 85.0655 71.9288 84.0242L74.5248 82.5282C74.8915 83.7162 75.7862 84.3102 77.2088 84.3102C77.9862 84.3102 78.5875 84.1269 79.0128 83.7602C79.4528 83.3789 79.6728 82.8655 79.6728 82.2202C79.6728 81.5895 79.4528 81.0835 79.0128 80.7022C78.5875 80.3209 77.9862 80.1302 77.2088 80.1302H76.5488L75.3828 78.3702L78.4188 74.4102H72.3908V71.5722H82.0708V74.0802ZM91.2211 87.2802C89.2998 87.2802 87.7891 86.5542 86.6891 85.1022C85.6038 83.6209 85.0611 81.6775 85.0611 79.2722C85.0611 76.8669 85.6038 74.9309 86.6891 73.4642C87.7891 71.9975 89.2998 71.2642 91.2211 71.2642C93.1718 71.2642 94.6824 71.9975 95.7531 73.4642C96.8384 74.9309 97.3811 76.8669 97.3811 79.2722C97.3811 81.6775 96.8384 83.6209 95.7531 85.1022C94.6824 86.5542 93.1718 87.2802 91.2211 87.2802ZM94.3671 79.2722C94.3671 77.6295 94.0958 76.3755 93.5531 75.5102C93.0251 74.6449 92.2478 74.2122 91.2211 74.2122C90.1944 74.2122 89.4171 74.6449 88.8891 75.5102C88.3611 76.3755 88.0971 77.6295 88.0971 79.2722C88.0971 80.9149 88.3611 82.1689 88.8891 83.0342C89.4171 83.8849 90.1944 84.3102 91.2211 84.3102C92.2478 84.3102 93.0251 83.8775 93.5531 83.0122C94.0958 82.1469 94.3671 80.9002 94.3671 79.2722ZM105.959 87.2802C104.037 87.2802 102.527 86.5542 101.427 85.1022C100.341 83.6209 99.7985 81.6775 99.7985 79.2722C99.7985 76.8669 100.341 74.9309 101.427 73.4642C102.527 71.9975 104.037 71.2642 105.959 71.2642C107.909 71.2642 109.42 71.9975 110.491 73.4642C111.576 74.9309 112.119 76.8669 112.119 79.2722C112.119 81.6775 111.576 83.6209 110.491 85.1022C109.42 86.5542 107.909 87.2802 105.959 87.2802ZM109.105 79.2722C109.105 77.6295 108.833 76.3755 108.291 75.5102C107.763 74.6449 106.985 74.2122 105.959 74.2122C104.932 74.2122 104.155 74.6449 103.627 75.5102C103.099 76.3755 102.835 77.6295 102.835 79.2722C102.835 80.9149 103.099 82.1689 103.627 83.0342C104.155 83.8849 104.932 84.3102 105.959 84.3102C106.985 84.3102 107.763 83.8775 108.291 83.0122C108.833 82.1469 109.105 80.9002 109.105 79.2722ZM120.652 81.4062L125.206 86.9722H121.906L117.902 81.9782V86.9722H115.064V71.5722H117.902V80.8122L121.686 75.9722H125.074L120.652 81.4062Z"
                                        fill="#1C1E2F"
                                    />
                                    <path
                                        d="M81.2958 95.521H84.3858V96.313H83.2518V99.721H82.4238V96.313H81.2958V95.521ZM86.8231 99.349C86.5191 99.653 86.1431 99.805 85.6951 99.805C85.2471 99.805 84.8711 99.653 84.5671 99.349C84.2631 99.045 84.1111 98.669 84.1111 98.221C84.1111 97.777 84.2631 97.403 84.5671 97.099C84.8751 96.791 85.2511 96.637 85.6951 96.637C86.1391 96.637 86.5151 96.791 86.8231 97.099C87.1311 97.407 87.2851 97.781 87.2851 98.221C87.2851 98.665 87.1311 99.041 86.8231 99.349ZM85.1131 98.815C85.2691 98.971 85.4631 99.049 85.6951 99.049C85.9271 99.049 86.1211 98.971 86.2771 98.815C86.4331 98.659 86.5111 98.461 86.5111 98.221C86.5111 97.981 86.4331 97.783 86.2771 97.627C86.1211 97.471 85.9271 97.393 85.6951 97.393C85.4631 97.393 85.2691 97.471 85.1131 97.627C84.9611 97.787 84.8851 97.985 84.8851 98.221C84.8851 98.457 84.9611 98.655 85.1131 98.815ZM89.4812 96.721V97.465H88.8032V98.713C88.8032 98.817 88.8292 98.893 88.8812 98.941C88.9332 98.989 89.0092 99.017 89.1092 99.025C89.2092 99.029 89.3332 99.027 89.4812 99.019V99.721C88.9572 99.781 88.5832 99.733 88.3592 99.577C88.1392 99.417 88.0292 99.129 88.0292 98.713V97.465H87.5072V96.721H88.0292V96.115L88.8032 95.881V96.721H89.4812ZM92.2131 97.075V96.721H92.9871V99.721H92.2131V99.367C91.9811 99.659 91.6551 99.805 91.2351 99.805C90.8351 99.805 90.4911 99.653 90.2031 99.349C89.9191 99.041 89.7771 98.665 89.7771 98.221C89.7771 97.781 89.9191 97.407 90.2031 97.099C90.4911 96.791 90.8351 96.637 91.2351 96.637C91.6551 96.637 91.9811 96.783 92.2131 97.075ZM90.7851 98.833C90.9411 98.989 91.1391 99.067 91.3791 99.067C91.6191 99.067 91.8171 98.989 91.9731 98.833C92.1331 98.673 92.2131 98.469 92.2131 98.221C92.2131 97.973 92.1331 97.771 91.9731 97.615C91.8171 97.455 91.6191 97.375 91.3791 97.375C91.1391 97.375 90.9411 97.455 90.7851 97.615C90.6291 97.771 90.5511 97.973 90.5511 98.221C90.5511 98.469 90.6291 98.673 90.7851 98.833ZM94.463 99.721H93.689V95.341H94.463V99.721ZM97.5354 97.987V98.929H99.3054V99.721H96.7074V95.521H99.2754V96.313H97.5354V97.207H99.1254V97.987H97.5354ZM101.095 98.821L101.827 96.721H102.679L101.539 99.721H100.657L99.5171 96.721H100.369L101.095 98.821ZM105.851 98.539H103.589C103.689 98.915 103.971 99.103 104.435 99.103C104.731 99.103 104.955 99.003 105.107 98.803L105.731 99.163C105.435 99.591 104.999 99.805 104.423 99.805C103.927 99.805 103.529 99.655 103.229 99.355C102.929 99.055 102.779 98.677 102.779 98.221C102.779 97.773 102.927 97.397 103.223 97.093C103.515 96.789 103.895 96.637 104.363 96.637C104.807 96.637 105.169 96.789 105.449 97.093C105.737 97.397 105.881 97.773 105.881 98.221C105.881 98.305 105.871 98.411 105.851 98.539ZM103.577 97.939H105.107C105.063 97.743 104.973 97.593 104.837 97.489C104.705 97.385 104.547 97.333 104.363 97.333C104.155 97.333 103.983 97.387 103.847 97.495C103.711 97.599 103.621 97.747 103.577 97.939ZM108.089 96.637C108.421 96.637 108.691 96.747 108.899 96.967C109.115 97.191 109.223 97.495 109.223 97.879V99.721H108.449V97.975C108.449 97.779 108.395 97.627 108.287 97.519C108.183 97.411 108.039 97.357 107.855 97.357C107.651 97.357 107.489 97.421 107.369 97.549C107.253 97.673 107.195 97.857 107.195 98.101V99.721H106.421V96.721H107.195V97.057C107.379 96.777 107.677 96.637 108.089 96.637ZM111.6 96.721V97.465H110.922V98.713C110.922 98.817 110.948 98.893 111 98.941C111.052 98.989 111.128 99.017 111.228 99.025C111.328 99.029 111.452 99.027 111.6 99.019V99.721C111.076 99.781 110.702 99.733 110.478 99.577C110.258 99.417 110.148 99.129 110.148 98.713V97.465H109.626V96.721H110.148V96.115L110.922 95.881V96.721H111.6ZM112.796 97.573C112.796 97.701 112.978 97.811 113.342 97.903C113.47 97.931 113.586 97.965 113.69 98.005C113.794 98.041 113.898 98.095 114.002 98.167C114.11 98.235 114.194 98.327 114.254 98.443C114.314 98.559 114.344 98.693 114.344 98.845C114.344 99.153 114.228 99.391 113.996 99.559C113.764 99.723 113.478 99.805 113.138 99.805C112.522 99.805 112.102 99.567 111.878 99.091L112.55 98.713C112.642 98.973 112.838 99.103 113.138 99.103C113.414 99.103 113.552 99.017 113.552 98.845C113.552 98.717 113.37 98.607 113.006 98.515C112.87 98.479 112.754 98.443 112.658 98.407C112.562 98.371 112.458 98.319 112.346 98.251C112.234 98.179 112.148 98.089 112.088 97.981C112.032 97.869 112.004 97.739 112.004 97.591C112.004 97.295 112.112 97.063 112.328 96.895C112.548 96.723 112.82 96.637 113.144 96.637C113.388 96.637 113.61 96.693 113.81 96.805C114.01 96.913 114.168 97.069 114.284 97.273L113.624 97.633C113.528 97.429 113.368 97.327 113.144 97.327C113.044 97.327 112.96 97.351 112.892 97.399C112.828 97.443 112.796 97.501 112.796 97.573Z"
                                        fill="#475799"
                                    />
                                    <path
                                        d="M57.168 60.3346C52.3938 67.6646 49.6799 76.1442 49.3107 84.8841C48.9415 93.624 50.9307 102.302 55.0697 110.009C59.2087 117.715 65.345 124.166 72.8351 128.685C80.3253 133.204 88.8933 135.624 97.6407 135.692L97.6876 129.654C90.0236 129.594 82.5169 127.474 75.9545 123.515C69.3921 119.555 64.0159 113.904 60.3896 107.152C56.7632 100.4 55.0204 92.7963 55.3439 85.1389C55.6673 77.4816 58.0451 70.0523 62.2279 63.6302L57.168 60.3346Z"
                                        fill="url(#paint0_linear_0_245)"
                                    />
                                    <g filter="url(#filter2_b_0_245)">
                                        <path
                                            d="M110.985 133.1C110.985 140.261 105.18 146.066 98.019 146.066C90.8581 146.066 85.0531 140.261 85.0531 133.1C85.0531 125.939 90.8581 120.134 98.019 120.134C105.18 120.134 110.985 125.939 110.985 133.1Z"
                                            fill="white"
                                            fillOpacity="0.2"
                                        />
                                    </g>
                                    <circle cx="98.0188" cy="133.1" r="4.66773" fill="white" />
                                    <path
                                        d="M155.06 89.0166C155.329 73.8687 149.72 59.2054 139.412 48.1028C129.104 37.0001 114.896 30.3209 99.7699 29.4661L99.6636 31.3477C114.303 32.175 128.054 38.6395 138.031 49.3851C148.008 60.1307 153.436 74.3224 153.176 88.9832L155.06 89.0166Z"
                                        fill="url(#paint1_linear_0_245)"
                                    />
                                    <circle
                                        cx="98.0194"
                                        cy="30.929"
                                        r="4.40841"
                                        fill="white"
                                        stroke="#2458FF"
                                        strokeWidth="1.55591"
                                    />
                                    <circle cx="153.514" cy="86.9417" r="4.1491" fill="white" />
                                    <path
                                        d="M44.081 124.802C44.2884 124.595 45.5504 123.505 46.1555 122.987M38.3759 115.726L40.9691 114.429M34.4862 105.872C34.6936 105.872 36.4743 105.353 37.3387 105.094M32.4116 95.7583L35.2641 95.2396M31.6337 85.3855C31.8411 85.1781 33.6218 85.2991 34.4862 85.3855M32.6709 74.7535L35.2641 75.2721M35.0048 64.6401L37.598 65.418M39.1539 54.786L41.4878 56.0825M44.5996 45.7098L46.9335 47.525M51.8605 38.1896L53.6757 40.0048M59.8994 31.4473L61.4553 33.5218M68.9755 26.0016L70.2721 28.3355M78.5703 22.1118L79.3483 24.705M88.6837 19.778L89.2024 22.3711M98.5378 19C98.5378 19.4149 98.5378 21.0745 98.5378 21.8525M108.911 19.778L108.392 22.3711M119.283 22.1118C119.283 22.5267 118.592 24.1864 118.246 24.9643M128.878 26.2609L127.582 28.8541M137.954 31.9659L136.139 34.2998M145.734 38.7082C145.734 38.9157 144.351 40.1777 143.659 40.7828M152.735 46.7471L150.402 48.5623M158.181 55.8232L155.588 57.1198M162.071 65.6773L159.218 66.4553M164.405 75.7908L161.552 76.3094M165.183 86.1635H162.33M164.145 96.7956L161.293 96.2769M162.071 107.168L158.959 105.872M157.662 116.763L155.069 115.466M152.217 125.58L149.883 124.024"
                                        stroke="#C7CBDC"
                                        strokeWidth="0.518637"
                                    />
                                    <defs>
                                        <filter
                                            id="filter0_i_0_245"
                                            x="41.4877"
                                            y="30.9286"
                                            width="112.026"
                                            height="112.026"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="4.66773" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="arithmetic"
                                                k2={-1}
                                                k3={1}
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="shape"
                                                result="effect1_innerShadow_0_245"
                                            />
                                        </filter>
                                        <filter
                                            id="filter1_d_0_245"
                                            x="0.515965"
                                            y="0.328933"
                                            width="195.007"
                                            height="195.008"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="11.41" />
                                            <feGaussianBlur stdDeviation="24.8946" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0.666667 0 0 0 0 0.768627 0 0 0 0 0.905882 0 0 0 1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_0_245"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_0_245"
                                                result="shape"
                                            />
                                        </filter>
                                        <filter
                                            id="filter2_b_0_245"
                                            x="79.8667"
                                            y="114.948"
                                            width="36.3046"
                                            height="36.3046"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImage" stdDeviation="2.59318" />
                                            <feComposite
                                                in2="SourceAlpha"
                                                operator="in"
                                                result="effect1_backgroundBlur_0_245"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_backgroundBlur_0_245"
                                                result="shape"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_0_245"
                                            x1="91.3165"
                                            y1="64.3008"
                                            x2="40.0587"
                                            y2="104.837"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0.0052011" stopColor="#D320C1" />
                                            <stop offset="0.320198" stopColor="#C624C6" />
                                            <stop offset="0.970779" stopColor="#1461FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_0_245"
                                            x1="154.702"
                                            y1="59.6366"
                                            x2="126.198"
                                            y2="31.5206"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0.0052011" stopColor="#D320C1" />
                                            <stop offset="0.498033" stopColor="#C624C6" />
                                            <stop offset="0.970779" stopColor="#1461FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h3 className="text-sm font-bold mb-4 text-center text-[#242121]">
                                    Distributions
                                </h3>
                                <div className="flex mb-4 justify-around">
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.532" cy="12.5618" r="12.532" fill="#F9896B" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.94794 13.2975C6.23261 11.0642 7.06927 8.28754 9.41394 7.53287C10.6473 7.13487 12.1693 7.46687 13.0339 8.65954C13.8493 7.42287 15.4153 7.13754 16.6473 7.53287C18.9913 8.28754 19.8326 11.0642 19.1179 13.2975C18.0046 16.8375 14.1199 18.6815 13.0339 18.6815C11.9486 18.6815 8.09861 16.8789 6.94794 13.2975Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.5257 10.0427C16.3304 10.1253 16.8337 10.7633 16.8037 11.6573"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Teachers</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.6404" cy="12.5618" r="12.532" fill="#84E8F4" />
                                            <path
                                                d="M9.65273 7.06754V15.4795"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.93332 9.8C6.93332 9.8 8.37932 7.06667 9.65199 7.06667C10.924 7.06667 12.3707 9.8 12.3707 9.8"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.2706 16.9517V8.53967"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.99 14.2189C18.99 14.2189 17.5433 16.9523 16.2713 16.9523C14.9993 16.9523 13.5526 14.2189 13.5526 14.2189"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Students</p>
                                    </div>
                                </div>
                                <div className="flex mb-4 justify-around">
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.532" cy="13.4241" r="12.532" fill="#FFBC65" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.6149 19.5389C9.07221 19.5389 6.90021 19.1542 6.90021 17.6142C6.90021 16.0742 9.05821 14.6735 11.6149 14.6735C14.1575 14.6735 16.3295 16.0609 16.3295 17.6002C16.3295 19.1395 14.1715 19.5389 11.6149 19.5389Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.6149 12.4773C13.2835 12.4773 14.6369 11.124 14.6369 9.45533C14.6369 7.786 13.2835 6.43333 11.6149 6.43333C9.9462 6.43333 8.59287 7.786 8.59287 9.45533C8.58687 11.118 9.93087 12.4713 11.5935 12.4773H11.6149Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.7542 10.4194V13.0927"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M19.1184 11.7559H16.3917"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Department</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.6404" cy="13.4241" r="12.532" fill="#51459E" />
                                            <path
                                                d="M15.6263 13.2753H15.6323"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.9536 13.2753H12.9596"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.281 13.2753H10.287"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.714 17.7132C15.6773 19.7509 12.6597 20.1911 10.1909 19.0493C9.82642 18.9026 7.46743 19.5559 6.95557 19.0446C6.44371 18.5327 7.09761 16.1734 6.95088 15.8089C5.80857 13.3404 6.24942 10.3217 8.28681 8.28473C10.8877 5.68286 15.1132 5.68286 17.714 8.28473C20.3202 10.8906 20.3149 15.112 17.714 17.7132Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Schedules</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/3">
                            <h2 className="text-base font-bold mb-4 text-[#242121]">
                                Distributions
                            </h2>
                            <div className="w-full p-4 bg-white rounded-xl drop-shadow-md">
                                <h3 className="text-sm font-bold mb-2 text-[#1B2767] text-center">
                                    Last 30 Days Performance
                                </h3>
                                <svg
                                    className="mx-auto"
                                    width={196}
                                    height={196}
                                    viewBox="0 0 196 196"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_i_0_245)">
                                        <circle cx="97.5005" cy="86.9414" r="56.0128" fill="#E9EFF6" />
                                    </g>
                                    <g filter="url(#filter1_d_0_245)">
                                        <circle cx="98.0197" cy="86.4227" r="47.7146" fill="white" />
                                    </g>
                                    <path
                                        d="M82.0708 74.0802L79.1888 77.8202C80.2595 78.1282 81.1102 78.6709 81.7408 79.4482C82.3862 80.2255 82.7088 81.1495 82.7088 82.2202C82.7088 83.8042 82.1735 85.0435 81.1028 85.9382C80.0615 86.8329 78.7635 87.2802 77.2088 87.2802C75.9915 87.2802 74.9135 87.0015 73.9748 86.4442C73.0362 85.8722 72.3542 85.0655 71.9288 84.0242L74.5248 82.5282C74.8915 83.7162 75.7862 84.3102 77.2088 84.3102C77.9862 84.3102 78.5875 84.1269 79.0128 83.7602C79.4528 83.3789 79.6728 82.8655 79.6728 82.2202C79.6728 81.5895 79.4528 81.0835 79.0128 80.7022C78.5875 80.3209 77.9862 80.1302 77.2088 80.1302H76.5488L75.3828 78.3702L78.4188 74.4102H72.3908V71.5722H82.0708V74.0802ZM91.2211 87.2802C89.2998 87.2802 87.7891 86.5542 86.6891 85.1022C85.6038 83.6209 85.0611 81.6775 85.0611 79.2722C85.0611 76.8669 85.6038 74.9309 86.6891 73.4642C87.7891 71.9975 89.2998 71.2642 91.2211 71.2642C93.1718 71.2642 94.6824 71.9975 95.7531 73.4642C96.8384 74.9309 97.3811 76.8669 97.3811 79.2722C97.3811 81.6775 96.8384 83.6209 95.7531 85.1022C94.6824 86.5542 93.1718 87.2802 91.2211 87.2802ZM94.3671 79.2722C94.3671 77.6295 94.0958 76.3755 93.5531 75.5102C93.0251 74.6449 92.2478 74.2122 91.2211 74.2122C90.1944 74.2122 89.4171 74.6449 88.8891 75.5102C88.3611 76.3755 88.0971 77.6295 88.0971 79.2722C88.0971 80.9149 88.3611 82.1689 88.8891 83.0342C89.4171 83.8849 90.1944 84.3102 91.2211 84.3102C92.2478 84.3102 93.0251 83.8775 93.5531 83.0122C94.0958 82.1469 94.3671 80.9002 94.3671 79.2722ZM105.959 87.2802C104.037 87.2802 102.527 86.5542 101.427 85.1022C100.341 83.6209 99.7985 81.6775 99.7985 79.2722C99.7985 76.8669 100.341 74.9309 101.427 73.4642C102.527 71.9975 104.037 71.2642 105.959 71.2642C107.909 71.2642 109.42 71.9975 110.491 73.4642C111.576 74.9309 112.119 76.8669 112.119 79.2722C112.119 81.6775 111.576 83.6209 110.491 85.1022C109.42 86.5542 107.909 87.2802 105.959 87.2802ZM109.105 79.2722C109.105 77.6295 108.833 76.3755 108.291 75.5102C107.763 74.6449 106.985 74.2122 105.959 74.2122C104.932 74.2122 104.155 74.6449 103.627 75.5102C103.099 76.3755 102.835 77.6295 102.835 79.2722C102.835 80.9149 103.099 82.1689 103.627 83.0342C104.155 83.8849 104.932 84.3102 105.959 84.3102C106.985 84.3102 107.763 83.8775 108.291 83.0122C108.833 82.1469 109.105 80.9002 109.105 79.2722ZM120.652 81.4062L125.206 86.9722H121.906L117.902 81.9782V86.9722H115.064V71.5722H117.902V80.8122L121.686 75.9722H125.074L120.652 81.4062Z"
                                        fill="#1C1E2F"
                                    />
                                    <path
                                        d="M81.2958 95.521H84.3858V96.313H83.2518V99.721H82.4238V96.313H81.2958V95.521ZM86.8231 99.349C86.5191 99.653 86.1431 99.805 85.6951 99.805C85.2471 99.805 84.8711 99.653 84.5671 99.349C84.2631 99.045 84.1111 98.669 84.1111 98.221C84.1111 97.777 84.2631 97.403 84.5671 97.099C84.8751 96.791 85.2511 96.637 85.6951 96.637C86.1391 96.637 86.5151 96.791 86.8231 97.099C87.1311 97.407 87.2851 97.781 87.2851 98.221C87.2851 98.665 87.1311 99.041 86.8231 99.349ZM85.1131 98.815C85.2691 98.971 85.4631 99.049 85.6951 99.049C85.9271 99.049 86.1211 98.971 86.2771 98.815C86.4331 98.659 86.5111 98.461 86.5111 98.221C86.5111 97.981 86.4331 97.783 86.2771 97.627C86.1211 97.471 85.9271 97.393 85.6951 97.393C85.4631 97.393 85.2691 97.471 85.1131 97.627C84.9611 97.787 84.8851 97.985 84.8851 98.221C84.8851 98.457 84.9611 98.655 85.1131 98.815ZM89.4812 96.721V97.465H88.8032V98.713C88.8032 98.817 88.8292 98.893 88.8812 98.941C88.9332 98.989 89.0092 99.017 89.1092 99.025C89.2092 99.029 89.3332 99.027 89.4812 99.019V99.721C88.9572 99.781 88.5832 99.733 88.3592 99.577C88.1392 99.417 88.0292 99.129 88.0292 98.713V97.465H87.5072V96.721H88.0292V96.115L88.8032 95.881V96.721H89.4812ZM92.2131 97.075V96.721H92.9871V99.721H92.2131V99.367C91.9811 99.659 91.6551 99.805 91.2351 99.805C90.8351 99.805 90.4911 99.653 90.2031 99.349C89.9191 99.041 89.7771 98.665 89.7771 98.221C89.7771 97.781 89.9191 97.407 90.2031 97.099C90.4911 96.791 90.8351 96.637 91.2351 96.637C91.6551 96.637 91.9811 96.783 92.2131 97.075ZM90.7851 98.833C90.9411 98.989 91.1391 99.067 91.3791 99.067C91.6191 99.067 91.8171 98.989 91.9731 98.833C92.1331 98.673 92.2131 98.469 92.2131 98.221C92.2131 97.973 92.1331 97.771 91.9731 97.615C91.8171 97.455 91.6191 97.375 91.3791 97.375C91.1391 97.375 90.9411 97.455 90.7851 97.615C90.6291 97.771 90.5511 97.973 90.5511 98.221C90.5511 98.469 90.6291 98.673 90.7851 98.833ZM94.463 99.721H93.689V95.341H94.463V99.721ZM97.5354 97.987V98.929H99.3054V99.721H96.7074V95.521H99.2754V96.313H97.5354V97.207H99.1254V97.987H97.5354ZM101.095 98.821L101.827 96.721H102.679L101.539 99.721H100.657L99.5171 96.721H100.369L101.095 98.821ZM105.851 98.539H103.589C103.689 98.915 103.971 99.103 104.435 99.103C104.731 99.103 104.955 99.003 105.107 98.803L105.731 99.163C105.435 99.591 104.999 99.805 104.423 99.805C103.927 99.805 103.529 99.655 103.229 99.355C102.929 99.055 102.779 98.677 102.779 98.221C102.779 97.773 102.927 97.397 103.223 97.093C103.515 96.789 103.895 96.637 104.363 96.637C104.807 96.637 105.169 96.789 105.449 97.093C105.737 97.397 105.881 97.773 105.881 98.221C105.881 98.305 105.871 98.411 105.851 98.539ZM103.577 97.939H105.107C105.063 97.743 104.973 97.593 104.837 97.489C104.705 97.385 104.547 97.333 104.363 97.333C104.155 97.333 103.983 97.387 103.847 97.495C103.711 97.599 103.621 97.747 103.577 97.939ZM108.089 96.637C108.421 96.637 108.691 96.747 108.899 96.967C109.115 97.191 109.223 97.495 109.223 97.879V99.721H108.449V97.975C108.449 97.779 108.395 97.627 108.287 97.519C108.183 97.411 108.039 97.357 107.855 97.357C107.651 97.357 107.489 97.421 107.369 97.549C107.253 97.673 107.195 97.857 107.195 98.101V99.721H106.421V96.721H107.195V97.057C107.379 96.777 107.677 96.637 108.089 96.637ZM111.6 96.721V97.465H110.922V98.713C110.922 98.817 110.948 98.893 111 98.941C111.052 98.989 111.128 99.017 111.228 99.025C111.328 99.029 111.452 99.027 111.6 99.019V99.721C111.076 99.781 110.702 99.733 110.478 99.577C110.258 99.417 110.148 99.129 110.148 98.713V97.465H109.626V96.721H110.148V96.115L110.922 95.881V96.721H111.6ZM112.796 97.573C112.796 97.701 112.978 97.811 113.342 97.903C113.47 97.931 113.586 97.965 113.69 98.005C113.794 98.041 113.898 98.095 114.002 98.167C114.11 98.235 114.194 98.327 114.254 98.443C114.314 98.559 114.344 98.693 114.344 98.845C114.344 99.153 114.228 99.391 113.996 99.559C113.764 99.723 113.478 99.805 113.138 99.805C112.522 99.805 112.102 99.567 111.878 99.091L112.55 98.713C112.642 98.973 112.838 99.103 113.138 99.103C113.414 99.103 113.552 99.017 113.552 98.845C113.552 98.717 113.37 98.607 113.006 98.515C112.87 98.479 112.754 98.443 112.658 98.407C112.562 98.371 112.458 98.319 112.346 98.251C112.234 98.179 112.148 98.089 112.088 97.981C112.032 97.869 112.004 97.739 112.004 97.591C112.004 97.295 112.112 97.063 112.328 96.895C112.548 96.723 112.82 96.637 113.144 96.637C113.388 96.637 113.61 96.693 113.81 96.805C114.01 96.913 114.168 97.069 114.284 97.273L113.624 97.633C113.528 97.429 113.368 97.327 113.144 97.327C113.044 97.327 112.96 97.351 112.892 97.399C112.828 97.443 112.796 97.501 112.796 97.573Z"
                                        fill="#475799"
                                    />
                                    <path
                                        d="M57.168 60.3346C52.3938 67.6646 49.6799 76.1442 49.3107 84.8841C48.9415 93.624 50.9307 102.302 55.0697 110.009C59.2087 117.715 65.345 124.166 72.8351 128.685C80.3253 133.204 88.8933 135.624 97.6407 135.692L97.6876 129.654C90.0236 129.594 82.5169 127.474 75.9545 123.515C69.3921 119.555 64.0159 113.904 60.3896 107.152C56.7632 100.4 55.0204 92.7963 55.3439 85.1389C55.6673 77.4816 58.0451 70.0523 62.2279 63.6302L57.168 60.3346Z"
                                        fill="url(#paint0_linear_0_245)"
                                    />
                                    <g filter="url(#filter2_b_0_245)">
                                        <path
                                            d="M110.985 133.1C110.985 140.261 105.18 146.066 98.019 146.066C90.8581 146.066 85.0531 140.261 85.0531 133.1C85.0531 125.939 90.8581 120.134 98.019 120.134C105.18 120.134 110.985 125.939 110.985 133.1Z"
                                            fill="white"
                                            fillOpacity="0.2"
                                        />
                                    </g>
                                    <circle cx="98.0188" cy="133.1" r="4.66773" fill="white" />
                                    <path
                                        d="M155.06 89.0166C155.329 73.8687 149.72 59.2054 139.412 48.1028C129.104 37.0001 114.896 30.3209 99.7699 29.4661L99.6636 31.3477C114.303 32.175 128.054 38.6395 138.031 49.3851C148.008 60.1307 153.436 74.3224 153.176 88.9832L155.06 89.0166Z"
                                        fill="url(#paint1_linear_0_245)"
                                    />
                                    <circle
                                        cx="98.0194"
                                        cy="30.929"
                                        r="4.40841"
                                        fill="white"
                                        stroke="#2458FF"
                                        strokeWidth="1.55591"
                                    />
                                    <circle cx="153.514" cy="86.9417" r="4.1491" fill="white" />
                                    <path
                                        d="M44.081 124.802C44.2884 124.595 45.5504 123.505 46.1555 122.987M38.3759 115.726L40.9691 114.429M34.4862 105.872C34.6936 105.872 36.4743 105.353 37.3387 105.094M32.4116 95.7583L35.2641 95.2396M31.6337 85.3855C31.8411 85.1781 33.6218 85.2991 34.4862 85.3855M32.6709 74.7535L35.2641 75.2721M35.0048 64.6401L37.598 65.418M39.1539 54.786L41.4878 56.0825M44.5996 45.7098L46.9335 47.525M51.8605 38.1896L53.6757 40.0048M59.8994 31.4473L61.4553 33.5218M68.9755 26.0016L70.2721 28.3355M78.5703 22.1118L79.3483 24.705M88.6837 19.778L89.2024 22.3711M98.5378 19C98.5378 19.4149 98.5378 21.0745 98.5378 21.8525M108.911 19.778L108.392 22.3711M119.283 22.1118C119.283 22.5267 118.592 24.1864 118.246 24.9643M128.878 26.2609L127.582 28.8541M137.954 31.9659L136.139 34.2998M145.734 38.7082C145.734 38.9157 144.351 40.1777 143.659 40.7828M152.735 46.7471L150.402 48.5623M158.181 55.8232L155.588 57.1198M162.071 65.6773L159.218 66.4553M164.405 75.7908L161.552 76.3094M165.183 86.1635H162.33M164.145 96.7956L161.293 96.2769M162.071 107.168L158.959 105.872M157.662 116.763L155.069 115.466M152.217 125.58L149.883 124.024"
                                        stroke="#C7CBDC"
                                        strokeWidth="0.518637"
                                    />
                                    <defs>
                                        <filter
                                            id="filter0_i_0_245"
                                            x="41.4877"
                                            y="30.9286"
                                            width="112.026"
                                            height="112.026"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="4.66773" />
                                            <feComposite
                                                in2="hardAlpha"
                                                operator="arithmetic"
                                                k2={-1}
                                                k3={1}
                                            />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="shape"
                                                result="effect1_innerShadow_0_245"
                                            />
                                        </filter>
                                        <filter
                                            id="filter1_d_0_245"
                                            x="0.515965"
                                            y="0.328933"
                                            width="195.007"
                                            height="195.008"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset dy="11.41" />
                                            <feGaussianBlur stdDeviation="24.8946" />
                                            <feColorMatrix
                                                type="matrix"
                                                values="0 0 0 0 0.666667 0 0 0 0 0.768627 0 0 0 0 0.905882 0 0 0 1 0"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in2="BackgroundImageFix"
                                                result="effect1_dropShadow_0_245"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_dropShadow_0_245"
                                                result="shape"
                                            />
                                        </filter>
                                        <filter
                                            id="filter2_b_0_245"
                                            x="79.8667"
                                            y="114.948"
                                            width="36.3046"
                                            height="36.3046"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImage" stdDeviation="2.59318" />
                                            <feComposite
                                                in2="SourceAlpha"
                                                operator="in"
                                                result="effect1_backgroundBlur_0_245"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="effect1_backgroundBlur_0_245"
                                                result="shape"
                                            />
                                        </filter>
                                        <linearGradient
                                            id="paint0_linear_0_245"
                                            x1="91.3165"
                                            y1="64.3008"
                                            x2="40.0587"
                                            y2="104.837"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0.0052011" stopColor="#D320C1" />
                                            <stop offset="0.320198" stopColor="#C624C6" />
                                            <stop offset="0.970779" stopColor="#1461FF" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_0_245"
                                            x1="154.702"
                                            y1="59.6366"
                                            x2="126.198"
                                            y2="31.5206"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0.0052011" stopColor="#D320C1" />
                                            <stop offset="0.498033" stopColor="#C624C6" />
                                            <stop offset="0.970779" stopColor="#1461FF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h3 className="text-sm font-bold mb-4 text-center text-[#242121]">
                                    Distributions
                                </h3>
                                <div className="flex mb-4 justify-around">
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.532" cy="12.5618" r="12.532" fill="#F9896B" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.94794 13.2975C6.23261 11.0642 7.06927 8.28754 9.41394 7.53287C10.6473 7.13487 12.1693 7.46687 13.0339 8.65954C13.8493 7.42287 15.4153 7.13754 16.6473 7.53287C18.9913 8.28754 19.8326 11.0642 19.1179 13.2975C18.0046 16.8375 14.1199 18.6815 13.0339 18.6815C11.9486 18.6815 8.09861 16.8789 6.94794 13.2975Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.5257 10.0427C16.3304 10.1253 16.8337 10.7633 16.8037 11.6573"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Teachers</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.6404" cy="12.5618" r="12.532" fill="#84E8F4" />
                                            <path
                                                d="M9.65273 7.06754V15.4795"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.93332 9.8C6.93332 9.8 8.37932 7.06667 9.65199 7.06667C10.924 7.06667 12.3707 9.8 12.3707 9.8"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16.2706 16.9517V8.53967"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.99 14.2189C18.99 14.2189 17.5433 16.9523 16.2713 16.9523C14.9993 16.9523 13.5526 14.2189 13.5526 14.2189"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Students</p>
                                    </div>
                                </div>
                                <div className="flex mb-4 justify-around">
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.532" cy="13.4241" r="12.532" fill="#FFBC65" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.6149 19.5389C9.07221 19.5389 6.90021 19.1542 6.90021 17.6142C6.90021 16.0742 9.05821 14.6735 11.6149 14.6735C14.1575 14.6735 16.3295 16.0609 16.3295 17.6002C16.3295 19.1395 14.1715 19.5389 11.6149 19.5389Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.6149 12.4773C13.2835 12.4773 14.6369 11.124 14.6369 9.45533C14.6369 7.786 13.2835 6.43333 11.6149 6.43333C9.9462 6.43333 8.59287 7.786 8.59287 9.45533C8.58687 11.118 9.93087 12.4713 11.5935 12.4773H11.6149Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.7542 10.4194V13.0927"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M19.1184 11.7559H16.3917"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Department</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={35}
                                            height={35}
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="12.6404" cy="13.4241" r="12.532" fill="#51459E" />
                                            <path
                                                d="M15.6263 13.2753H15.6323"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.9536 13.2753H12.9596"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.281 13.2753H10.287"
                                                stroke="white"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M17.714 17.7132C15.6773 19.7509 12.6597 20.1911 10.1909 19.0493C9.82642 18.9026 7.46743 19.5559 6.95557 19.0446C6.44371 18.5327 7.09761 16.1734 6.95088 15.8089C5.80857 13.3404 6.24942 10.3217 8.28681 8.28473C10.8877 5.68286 15.1132 5.68286 17.714 8.28473C20.3202 10.8906 20.3149 15.112 17.714 17.7132Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="text-sm font-semibold text-[#242121] ml-4">Schedules</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-base font-bold mb-4">Statistics</h2>
                    <div className="flex flex-col items-center space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4">
                        <div className="w-full py-4 px-8 bg-white rounded-xl drop-shadow-md flex items-center justify-between">
                            <div>
                                <p className="text-xl text-[#393939] font-bold mb-4">Today's Classes</p>
                                <p className="text-[#4D4A81] font-semibold">25% Completed</p>
                            </div>
                            <hr className="h-20 w-0.5 bg-[#F6F6FC]" />
                            <svg
                                width={77}
                                height={74}
                                viewBox="0 0 77 74"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M34.7073 43H26.7513V41.249L30.8143 37.067C31.721 36.1037 32.1743 35.3103 32.1743 34.687C32.1743 34.2223 32.027 33.8483 31.7323 33.565C31.449 33.2817 31.0807 33.14 30.6273 33.14C29.7207 33.14 29.0576 33.6047 28.6383 34.534L26.6663 33.378C27.029 32.5733 27.556 31.9557 28.2473 31.525C28.95 31.083 29.732 30.862 30.5933 30.862C31.67 30.862 32.5937 31.202 33.3643 31.882C34.135 32.5507 34.5203 33.4573 34.5203 34.602C34.5203 35.8373 33.8687 37.1067 32.5653 38.41L30.2363 40.739H34.7073V43ZM38.6437 35.435H39.8677C41.0237 35.435 41.9871 35.7807 42.7577 36.472C43.5397 37.152 43.9307 38.104 43.9307 39.328C43.9307 40.552 43.5171 41.5097 42.6897 42.201C41.8851 42.8923 40.8821 43.238 39.6807 43.238C38.7061 43.238 37.8504 43.0227 37.1137 42.592C36.3884 42.15 35.8614 41.5153 35.5327 40.688L37.5387 39.515C37.8221 40.467 38.5361 40.943 39.6807 40.943C40.2814 40.943 40.7461 40.8013 41.0747 40.518C41.4147 40.2233 41.5847 39.8267 41.5847 39.328C41.5847 38.8407 41.4204 38.4497 41.0917 38.155C40.7631 37.8603 40.3154 37.713 39.7487 37.713H36.1447L36.6207 31.1H43.3697V33.293H38.7967L38.6437 35.435ZM49.7672 35.673C49.2119 36.2057 48.5319 36.472 47.7272 36.472C46.9112 36.472 46.2255 36.2 45.6702 35.656C45.1262 35.112 44.8542 34.449 44.8542 33.667C44.8542 32.885 45.1262 32.222 45.6702 31.678C46.2369 31.134 46.9225 30.862 47.7272 30.862C48.5432 30.862 49.2232 31.134 49.7672 31.678C50.3112 32.1993 50.5832 32.8623 50.5832 33.667C50.5832 34.4603 50.3112 35.129 49.7672 35.673ZM47.0812 41.793L46.0612 41.198L53.8132 32.579L54.8502 33.157L47.0812 41.793ZM46.9452 34.449C47.1492 34.653 47.4042 34.755 47.7102 34.755C48.0162 34.755 48.2712 34.653 48.4752 34.449C48.6792 34.2337 48.7812 33.973 48.7812 33.667C48.7812 33.361 48.6792 33.106 48.4752 32.902C48.2712 32.698 48.0162 32.596 47.7102 32.596C47.4042 32.596 47.1492 32.698 46.9452 32.902C46.7525 33.106 46.6562 33.361 46.6562 33.667C46.6562 33.973 46.7525 34.2337 46.9452 34.449ZM56.3292 40.399C56.3292 41.181 56.0572 41.844 55.5132 42.388C54.9692 42.932 54.2892 43.204 53.4732 43.204C52.6572 43.204 51.9772 42.932 51.4332 42.388C50.8892 41.844 50.6172 41.181 50.6172 40.399C50.6172 39.617 50.8892 38.954 51.4332 38.41C51.9772 37.866 52.6572 37.594 53.4732 37.594C54.2892 37.594 54.9692 37.866 55.5132 38.41C56.0572 38.954 56.3292 39.617 56.3292 40.399ZM54.2212 41.181C54.4252 40.9657 54.5272 40.705 54.5272 40.399C54.5272 40.093 54.4252 39.838 54.2212 39.634C54.0285 39.4187 53.7792 39.311 53.4732 39.311C53.1672 39.311 52.9122 39.4187 52.7082 39.634C52.5155 39.838 52.4192 40.093 52.4192 40.399C52.4192 40.705 52.5155 40.9657 52.7082 41.181C52.9122 41.385 53.1672 41.487 53.4732 41.487C53.7792 41.487 54.0285 41.385 54.2212 41.181Z"
                                    fill="#4D4A81"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.4276 6.34088C23.7071 2.20828 31.1121 0 38.6903 0V5C38.6903 5 38.6902 5 38.6902 5C20.5479 5 5.84068 19.3269 5.84068 37C5.84068 54.6731 20.5479 69 38.6902 69C56.8325 69 71.5398 54.6731 71.5398 37C71.5398 36.5627 71.5308 36.1275 71.5129 35.6945L76.641 35.4906C76.9501 42.8666 74.9872 50.1642 71.0046 56.4448C67.022 62.7253 61.2018 67.7018 54.2925 70.7343C47.3831 73.7667 39.7006 74.7164 32.2327 73.4613C24.7648 72.2062 17.8531 68.8037 12.3863 63.6913C6.91946 58.5788 3.14754 51.9903 1.55554 44.7728C-0.0364499 37.5553 0.624274 30.0389 3.45275 23.1902C6.28123 16.3414 11.1481 10.4735 17.4276 6.34088Z"
                                    fill="#F6F6FC"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M73.8936 23.1072C75.6183 27.2543 76.5538 31.665 76.6621 36.1242C76.6965 37.539 75.489 38.6335 74.0751 38.5707L72.9624 38.5214C72.1588 38.4857 71.54 37.8044 71.54 37V37C71.54 19.3269 56.8328 5 38.6905 5C38.3626 5 38.0359 5.00468 37.7103 5.01398C36.3362 5.0532 35.112 4.07219 34.9634 2.70555V2.70555C34.8136 1.3271 35.8142 0.0815254 37.1997 0.0285091C41.8134 -0.148028 46.4289 0.496194 50.8178 1.93667C56.0024 3.63831 60.7485 6.41095 64.7312 10.0649C68.714 13.7188 71.8394 18.1677 73.8936 23.1072Z"
                                    fill="#F9896B"
                                />
                            </svg>
                        </div>
                        <div className="w-full py-4 px-8 bg-[#51459E] rounded-xl drop-shadow-md flex items-center justify-between">
                            <div>
                                <p className="text-xl text-white font-bold mb-4">Weekly Classes</p>
                                <p className="text-white font-semibold">50% Completed</p>
                            </div>
                            <hr className="h-20 w-0.5 bg-[#F6F6FC]" />
                            <svg
                                width={77}
                                height={74}
                                viewBox="0 0 77 74"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28.4328 35.435H29.6568C30.8128 35.435 31.7762 35.7807 32.5468 36.472C33.3288 37.152 33.7198 38.104 33.7198 39.328C33.7198 40.552 33.3062 41.5097 32.4788 42.201C31.6742 42.8923 30.6712 43.238 29.4698 43.238C28.4952 43.238 27.6395 43.0227 26.9028 42.592C26.1775 42.15 25.6505 41.5153 25.3218 40.688L27.3278 39.515C27.6112 40.467 28.3252 40.943 29.4698 40.943C30.0705 40.943 30.5352 40.8013 30.8638 40.518C31.2038 40.2233 31.3738 39.8267 31.3738 39.328C31.3738 38.8407 31.2095 38.4497 30.8808 38.155C30.5522 37.8603 30.1045 37.713 29.5378 37.713H25.9338L26.4098 31.1H33.1588V33.293H28.5858L28.4328 35.435ZM39.3661 43.238C37.8814 43.238 36.7141 42.677 35.8641 41.555C35.0254 40.4103 34.6061 38.9087 34.6061 37.05C34.6061 35.1913 35.0254 33.6953 35.8641 32.562C36.7141 31.4287 37.8814 30.862 39.3661 30.862C40.8734 30.862 42.0407 31.4287 42.8681 32.562C43.7067 33.6953 44.1261 35.1913 44.1261 37.05C44.1261 38.9087 43.7067 40.4103 42.8681 41.555C42.0407 42.677 40.8734 43.238 39.3661 43.238ZM41.7971 37.05C41.7971 35.7807 41.5874 34.8117 41.1681 34.143C40.7601 33.4743 40.1594 33.14 39.3661 33.14C38.5727 33.14 37.9721 33.4743 37.5641 34.143C37.1561 34.8117 36.9521 35.7807 36.9521 37.05C36.9521 38.3193 37.1561 39.2883 37.5641 39.957C37.9721 40.6143 38.5727 40.943 39.3661 40.943C40.1594 40.943 40.7601 40.6087 41.1681 39.94C41.5874 39.2713 41.7971 38.308 41.7971 37.05ZM50.0651 35.673C49.5097 36.2057 48.8297 36.472 48.0251 36.472C47.2091 36.472 46.5234 36.2 45.9681 35.656C45.4241 35.112 45.1521 34.449 45.1521 33.667C45.1521 32.885 45.4241 32.222 45.9681 31.678C46.5347 31.134 47.2204 30.862 48.0251 30.862C48.8411 30.862 49.5211 31.134 50.0651 31.678C50.6091 32.1993 50.8811 32.8623 50.8811 33.667C50.8811 34.4603 50.6091 35.129 50.0651 35.673ZM47.3791 41.793L46.3591 41.198L54.1111 32.579L55.1481 33.157L47.3791 41.793ZM47.2431 34.449C47.4471 34.653 47.7021 34.755 48.0081 34.755C48.3141 34.755 48.5691 34.653 48.7731 34.449C48.9771 34.2337 49.0791 33.973 49.0791 33.667C49.0791 33.361 48.9771 33.106 48.7731 32.902C48.5691 32.698 48.3141 32.596 48.0081 32.596C47.7021 32.596 47.4471 32.698 47.2431 32.902C47.0504 33.106 46.9541 33.361 46.9541 33.667C46.9541 33.973 47.0504 34.2337 47.2431 34.449ZM56.6271 40.399C56.6271 41.181 56.3551 41.844 55.8111 42.388C55.2671 42.932 54.5871 43.204 53.7711 43.204C52.9551 43.204 52.2751 42.932 51.7311 42.388C51.1871 41.844 50.9151 41.181 50.9151 40.399C50.9151 39.617 51.1871 38.954 51.7311 38.41C52.2751 37.866 52.9551 37.594 53.7711 37.594C54.5871 37.594 55.2671 37.866 55.8111 38.41C56.3551 38.954 56.6271 39.617 56.6271 40.399ZM54.5191 41.181C54.7231 40.9657 54.8251 40.705 54.8251 40.399C54.8251 40.093 54.7231 39.838 54.5191 39.634C54.3264 39.4187 54.0771 39.311 53.7711 39.311C53.4651 39.311 53.2101 39.4187 53.0061 39.634C52.8134 39.838 52.7171 40.093 52.7171 40.399C52.7171 40.705 52.8134 40.9657 53.0061 41.181C53.2101 41.385 53.4651 41.487 53.7711 41.487C54.0771 41.487 54.3264 41.385 54.5191 41.181Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.8788 6.34088C23.1583 2.20828 30.5632 0 38.1414 0V5C19.9992 5.00005 5.29197 19.3269 5.29197 37C5.29197 54.6731 19.9992 69 38.1415 69C56.2838 69 70.9911 54.6731 70.9911 37C70.9911 36.5627 70.9821 36.1275 70.9642 35.6945L76.0921 35.4906C76.4013 42.8666 74.4383 50.1642 70.4557 56.4448C66.4731 62.7253 60.6529 67.7018 53.7436 70.7343C46.8343 73.7667 39.1517 74.7164 31.6839 73.4613C24.216 72.2062 17.3042 68.8037 11.8374 63.6913C6.37062 58.5788 2.59869 51.9903 1.0067 44.7728C-0.585293 37.5553 0.0754308 30.0389 2.90391 23.1902C5.73239 16.3414 10.5993 10.4735 16.8788 6.34088Z"
                                    fill="#F6F6FC"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M66.1939 12.0552C72.3925 18.6701 75.8974 27.2271 76.1133 36.124C76.1476 37.5388 74.9401 38.6335 73.5262 38.5708L72.4135 38.5214C71.6098 38.4857 70.9911 37.8044 70.9911 37C70.9911 19.3269 56.2839 5.00001 38.1416 5.00001C21.3931 5.00001 7.5721 17.2101 5.54732 32.9909C5.36725 34.3944 4.18071 35.4925 2.76714 35.4297C1.34959 35.3668 0.243097 34.1628 0.410149 32.7537C1.45783 23.9165 5.7464 15.7093 12.5345 9.67319C19.9744 3.05741 29.8075 -0.408342 39.8706 0.0383647C49.9337 0.485071 59.4024 4.80764 66.1939 12.0552Z"
                                    fill="#F9896B"
                                />
                            </svg>
                        </div>
                    </div>
                </section>
                {/* <section className="hidden px-5 py-9 xl:flex xl:flex-col xl:w-3/12">
                    <div className="flex justify-between items-center mb-16">
                        <div>
                            <p className="text-lg font-bold text-gray-900">Hi, Omid</p>
                            <p className="text-sm text-zinc-500 font-semibold">Good morning!</p>
                        </div>
                        <div>
                            <button className="border-2 border-gray-200 rounded-xl p-2.5 btn-shadow">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.9394 12.413H15.9484"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.9304 12.413H11.9394"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.9214 12.413H7.9304"
                                        stroke="black"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.071 19.0698C16.0159 22.1264 11.4896 22.7867 7.78631 21.074C7.23961 20.8539 3.70113 21.8339 2.93334 21.067C2.16555 20.2991 3.14639 16.7601 2.92631 16.2134C1.21285 12.5106 1.87411 7.9826 4.9302 4.9271C8.83147 1.0243 15.1698 1.0243 19.071 4.9271C22.9803 8.83593 22.9723 15.1681 19.071 19.0698Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button className="border-2 border-gray-200 rounded-xl p-2.5 relative btn-shadow">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.9962 2.51419C7.56192 2.51419 5.63525 6.52943 5.63525 9.18371C5.63525 11.1675 5.92287 10.5837 4.82477 13.0037C3.48382 16.4523 8.8762 17.8618 11.9962 17.8618C15.1152 17.8618 20.5076 16.4523 19.1676 13.0037C18.0695 10.5837 18.3572 11.1675 18.3572 9.18371C18.3572 6.52943 16.4295 2.51419 11.9962 2.51419Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.306 20.5122C13.0117 21.9579 10.9927 21.975 9.68604 20.5122"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    width={10}
                                    height={10}
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-2.5 top-2"
                                >
                                    <circle
                                        cx={5}
                                        cy={5}
                                        r={4}
                                        fill="#F9BE7A"
                                        stroke="#5E25BC"
                                        strokeWidth={2}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-3.5">
                        <div className="avatar relative mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
                                alt="Omid Armin"
                                className="w-14 h-14 object-cover rounded-lg blur-3xl absolute inset-x-0 bottom-0 -z-10"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
                                alt="Omid Armin"
                                className="w-24 h-24 object-cover rounded-lg"
                            />
                        </div>
                        <p className="mt-1.5 font-bold text-lg text-[#11243D] mb-3">Omid Armin</p>
                        <p className="text-xs font-semibold text-zinc-500 mb-6">
                            UI/UX Designer @Redwhale
                        </p>
                        <div className="mt-0.5 w-full flex justify-evenly items-center mb-6">
                            <div className="flex flex-col items-center">
                                <p className="text-base text-[#11243D] font-bold">786K</p>
                                <p className="text-zinc-500 font-semibold text-sm">Followers</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-base text-[#11243D] font-bold">298</p>
                                <p className="text-zinc-500 font-semibold text-sm">Following</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-base text-[#11243D] font-bold">438</p>
                                <p className="text-zinc-500 font-semibold text-sm">Posts</p>
                            </div>
                        </div>
                        <div className="flex mt-0.5 w-full justify-evenly items-center mb-8">
                            <button className="bg-[#4F46BA] py-4 px-7 rounded-xl text-white font-semibold">
                                View Profile
                            </button>
                            <button className="border-2 border-gray-200 rounded-xl py-4 px-7 text-[#11243D] font-semibold">
                                Edit Profile
                            </button>
                        </div>
                        <div className="flex w-full mt-0.5 justify-evenly items-center mb-8 space-x-4">
                            <div className="bg-[#4F46BA]-350 pb-8 pl-4 pr-4 pt-16 rounded-xl relative w-1/2 h-48">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mb-5"
                                >
                                    <path
                                        d="M28.265 16.9273C31.4817 14.3773 35.7983 11.9107 36.615 12.794C37.965 14.244 37.8483 28.044 36.615 29.3607C35.865 30.1773 31.515 27.7107 28.265 25.1773"
                                        stroke="#51459E"
                                        strokeWidth="2.625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.40015 21.0647C4.40015 11.978 7.41848 8.94967 16.4768 8.94967C25.5335 8.94967 28.5518 11.978 28.5518 21.0647C28.5518 30.1497 25.5335 33.1797 16.4768 33.1797C7.41848 33.1797 4.40015 30.1497 4.40015 21.0647Z"
                                        stroke="#51459E"
                                        strokeWidth="2.625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-2xl font-bold text-[#4F46BA]">Videos</p>
                                <p className="text-sm font-bold text-[#4F46BA]">Click To Add Video</p>
                                <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-2 top-3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.48291 8.96955L12.0476 6.41047C12.2815 6.17656 12.2815 5.79731 12.0476 5.5634C11.8137 5.32949 11.4345 5.32949 11.2007 5.5634L8.64193 8.12845L6.08321 5.5634C5.84934 5.32949 5.47015 5.32949 5.23627 5.5634C5.00239 5.79731 5.00239 6.17656 5.23627 6.41047L7.80096 8.96955L5.23627 11.5286C5.12336 11.6406 5.05984 11.7931 5.05984 11.9522C5.05984 12.1112 5.12336 12.2637 5.23627 12.3757C5.34826 12.4886 5.50071 12.5522 5.65974 12.5522C5.81877 12.5522 5.97122 12.4886 6.08321 12.3757L8.64193 9.81065L11.2007 12.3757C11.3126 12.4886 11.4651 12.5522 11.6241 12.5522C11.7832 12.5522 11.9356 12.4886 12.0476 12.3757C12.1605 12.2637 12.224 12.1112 12.224 11.9522C12.224 11.7931 12.1605 11.6406 12.0476 11.5286L9.48291 8.96955Z"
                                        fill="#11243D"
                                    />
                                </svg>
                            </div>
                            <div className="bg-[#FEF3F0] pb-8 pl-4 pr-4 pt-16 rounded-xl relative w-1/2 h-48">
                                <svg
                                    width={42}
                                    height={42}
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mb-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M27.0167 21.8717C27.0167 18.8322 24.552 16.3675 21.5125 16.3675C18.473 16.3675 16.0083 18.8322 16.0083 21.8717C16.0083 24.9112 18.473 27.3759 21.5125 27.3759C24.552 27.3759 27.0167 24.9112 27.0167 21.8717Z"
                                        stroke="#AC6755"
                                        strokeWidth="2.625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21.5119 35.3502C35.5911 35.3502 37.2675 31.1318 37.2675 21.9912C37.2675 15.5844 36.4201 12.1562 31.0835 10.6826C30.5935 10.5278 30.0501 10.2331 29.6098 9.7486C28.8988 8.96939 28.3793 6.5765 26.6625 5.85255C24.9456 5.13045 18.0506 5.1636 16.3614 5.85255C14.674 6.54334 14.1251 8.96939 13.414 9.7486C12.9738 10.2331 12.4322 10.5278 11.9404 10.6826C6.60378 12.1562 5.75641 15.5844 5.75641 21.9912C5.75641 31.1318 7.43272 35.3502 21.5119 35.3502Z"
                                        stroke="#AC6755"
                                        strokeWidth="2.625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M30.1078 15.75H30.1236"
                                        stroke="#AC6755"
                                        strokeWidth="2.625"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-2xl font-bold text-[#AC6755]">Photos</p>
                                <p className="text-sm font-bold text-[#AC6755]">Click To Add Photo</p>
                                <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-2 top-3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.48291 8.96955L12.0476 6.41047C12.2815 6.17656 12.2815 5.79731 12.0476 5.5634C11.8137 5.32949 11.4345 5.32949 11.2007 5.5634L8.64193 8.12845L6.08321 5.5634C5.84934 5.32949 5.47015 5.32949 5.23627 5.5634C5.00239 5.79731 5.00239 6.17656 5.23627 6.41047L7.80096 8.96955L5.23627 11.5286C5.12336 11.6406 5.05984 11.7931 5.05984 11.9522C5.05984 12.1112 5.12336 12.2637 5.23627 12.3757C5.34826 12.4886 5.50071 12.5522 5.65974 12.5522C5.81877 12.5522 5.97122 12.4886 6.08321 12.3757L8.64193 9.81065L11.2007 12.3757C11.3126 12.4886 11.4651 12.5522 11.6241 12.5522C11.7832 12.5522 11.9356 12.4886 12.0476 12.3757C12.1605 12.2637 12.224 12.1112 12.224 11.9522C12.224 11.7931 12.1605 11.6406 12.0476 11.5286L9.48291 8.96955Z"
                                        fill="#11243D"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-1.5 grid grid-cols-3 grid-rows-2 gap-1 h-60">
                            <img
                                src="https://images.unsplash.com/photo-1537557174945-0e5c05a1709c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="brown-and-black houses"
                                className="object-cover w-full rounded-tl-xl h-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1494949360228-4e9bde560065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="boats at the sea near stone island during day"
                                className="object-cover w-full h-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1564551713171-b1a90c34daa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="man facing machine turned on"
                                className="object-cover w-full rounded-tr-xl h-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1564779086938-2305f4cd6f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="gray coupe parked near grass field"
                                className="object-cover w-full rounded-bl-xl h-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1456019522711-b85e9744f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
                                className="object-cover w-full h-full"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1564840726097-7c00b05a0f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                                alt="wolf on snow"
                                className="object-cover w-full rounded-br-xl h-full"
                            />
                        </div>
                    </div>
                </section> */}
                {/* Profile section */}
            {/* </div> */}
        </>


    );
};

export default Dashboard;
