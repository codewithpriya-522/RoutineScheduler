// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { MdOutlineDashboard, MdOutlineSchedule,MdOutlinePublishedWithChanges,MdOutlineScheduleSend } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const handleClick = (item, path) => {
        setActiveItem(item);
        navigate(path);
    };

    const navItems = [
        { name: 'Dashboard', icon: <MdOutlineDashboard/>, path: '/home' },
        { name: 'Schedules', icon: <MdOutlineSchedule />, path: '/home/schedule' },
        { name: 'Teachers', icon: <LiaChalkboardTeacherSolid  />, path: '/home/teachers' },
        { name: 'Users', icon: <FaRegUser />, path: '/home/users' },
        { name: 'Students', icon: <PiStudentBold />, path: '/home/students' },
        { name: 'Published', icon: <MdOutlinePublishedWithChanges />, path: '/home/published' },
        { name: 'Today\'s Scheduled', icon: <MdOutlineScheduleSend />, path: '/home/scheduled', extra: '+2' },
        { name: 'Bookmarks', icon: <CiBookmark />, path: '/home/bookmarks' }
    ];

    return (
        <>
            <nav className="md:w-1/3 left-side px-8 py-9 flex-col justify-between hidden md:flex md:py-8 md:px-7 xl:w-2/12">
                <div>
                    <div className="flex items-center mb-10">
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
                        {navItems.map((item, index) => (
                            <li className="mb-6" key={index}>
                                <a
                                    className={`flex text-normal items-center cursor-pointer ${activeItem === item.name ? 'font-bold' : ''}`}
                                    onClick={() => handleClick(item.name, item.path)}
                                >
                                    {item.icon}
                                    <span className="text-normal text-gray-500 font-semibold ml-3 hover:text-zinc-900">
                                        {item.name}
                                    </span>
                                    {item.extra && <button className="border-1 text-zinc-500 rounded-full border-2 px-2 ml-3">{item.extra}</button>}
                                </a>
                            </li>
                        ))}
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
                        {/* Additional items here */}
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
            </nav>
        </>
    );
};
export default Navbar;

