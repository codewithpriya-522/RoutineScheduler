// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDashboard, MdOutlineSchedule, MdOutlinePublishedWithChanges, MdOutlineScheduleSend } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { CiBookmark } from "react-icons/ci";
import { FaSchool } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const handleClick = (item, path) => {
        setActiveItem(item);
        navigate(path);
    };

    const navItems = [
        { name: 'Dashboard', icon: <MdOutlineDashboard />, path: '/home' },
        { name: 'Schedules', icon: <MdOutlineSchedule />, path: '/home/schedule' },
        { name: 'Teachers', icon: <LiaChalkboardTeacherSolid />, path: '/home/teachers' },
        { name: 'Users', icon: <FaRegUser />, path: '/home/users' },
        { name: 'Students', icon: <PiStudentBold />, path: '/home/students' },
        { name: 'Department', icon: <FaSchool />, path: '/home/department' },
        { name: 'Batch', icon: <SiGoogleclassroom />, path: '/home/batch' },
        { name: 'Published', icon: <MdOutlinePublishedWithChanges />, path: '/home/published' },
        { name: 'Today\'s Scheduled', icon: <MdOutlineScheduleSend />, path: '/home/scheduled', extra: '+2' },
        { name: 'Bookmarks', icon: <CiBookmark />, path: '/home/bookmarks' }
    ];

    return (
        <nav className="bg-gray-800 text-white h-screen fixed p-4">
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
                    <p className="text-base font-bold text-gray-200">RMS</p>
                    <p className="text-xs font-bold text-gray-400">
                        Simple &amp; Time Saving
                    </p>
                </div>
            </div>
            <ul>
                {navItems.map((item, index) => (
                    <li className="mb-6" key={index}>
                        <a
                            className={`flex items-center cursor-pointer ${activeItem === item.name ? 'font-bold text-white' : 'text-gray-300'}`}
                            onClick={() => handleClick(item.name, item.path)}
                        >
                            <div className="text-2xl">{item.icon}</div>
                            <span className="text-normal font-semibold ml-3 hover:text-white">
                                {item.name}
                            </span>
                            {item.extra && <button className="border-1 text-gray-400 rounded-full border-2 px-2 ml-3">{item.extra}</button>}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
