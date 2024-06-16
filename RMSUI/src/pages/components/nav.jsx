// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();

    const handleClick = (item, path) => {
        setActiveItem(item);
        navigate(path);
    };

    const navItems = [
        { name: 'Dashboard', icon: <DashboardIcon />, path: '/home' },
        { name: 'Schedules', icon: <SchedulesIcon />, path: '/home/schedule' },
        { name: 'Teachers', icon: <TeachersIcon />, path: '/home/teachers' },
        { name: 'Published', icon: <PublishedIcon />, path: '/home/published' },
        { name: 'Today\'s Scheduled', icon: <ScheduledIcon />, path: '/home/scheduled', extra: '+2' },
        { name: 'Bookmarks', icon: <BookmarksIcon />, path: '/home/bookmarks' }
    ];

    return (
        <>
            <nav className="md:w-1/3 left-side px-8 py-9 flex-col justify-between hidden md:flex md:py-8 md:px-7 xl:w-2/12">
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
                        {navItems.map((item, index) => (
                            <li className="mb-10" key={index}>
                                <a
                                    className={`flex items-center cursor-pointer ${activeItem === item.name ? 'font-bold' : ''}`}
                                    onClick={() => handleClick(item.name, item.path)}
                                >
                                    {item.icon}
                                    <span className="text-base text-gray-500 font-semibold ml-3 hover:text-zinc-900">
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

const DashboardIcon = () => (
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
            d="M2.40002 13.713C2.40002 8.082 3.01402 8.475 6.31902 5.41C7.76502 4.246 10.015 2.2 11.566 2.2C13.117 2.2 15.367 4.246 16.813 5.41C20.118 8.475 20.732 8.082 20.732 13.713C20.732 19.344 16.147 21.8 11.566 21.8C6.98402 21.8 2.40002 19.344 2.40002 13.713Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const SchedulesIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="1.008"
        />
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.41203 3.24999 9.1414 3.24999 9.94358 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.6472 7.88567 22.681 8.29459 22.7037 8.74007C22.7337 8.82106 22.75 8.90861 22.75 9C22.75 9.06932 22.7406 9.13644 22.723 9.20016C22.75 10.0021 22.75 10.9128 22.75 11.9436V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24999 10.9127 1.24998 10.0021 1.27701 9.20017C1.25941 9.13645 1.25 9.06932 1.25 9C1.25 8.90862 1.26634 8.82105 1.29627 8.74006C1.31895 8.29458 1.35276 7.88566 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM2.76309 9.75C2.75032 10.4027 2.75 11.146 2.75 12V14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V12C21.25 11.146 21.2497 10.4027 21.2369 9.75H2.76309ZM21.1683 8.25H2.83168C2.8477 8.06061 2.86685 7.88123 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.1331 7.88123 21.1523 8.06061 21.1683 8.25ZM16.5 15.75C16.0858 15.75 15.75 16.0858 15.75 16.5C15.75 16.9142 16.0858 17.25 16.5 17.25C16.9142 17.25 17.25 16.9142 17.25 16.5C17.25 16.0858 16.9142 15.75 16.5 15.75ZM14.25 16.5C14.25 15.2574 15.2574 14.25 16.5 14.25C17.7426 14.25 18.75 15.2574 18.75 16.5C18.75 17.7426 17.7426 18.75 16.5 18.75C15.2574 18.75 14.25 17.7426 14.25 16.5Z"
                fill="#1C274C"
            />{" "}
        </g>
    </svg>
);

const TeachersIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            {" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z"
                fill="#1C274C"
            />{" "}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z"
                fill="#1C274C"
            />{" "}
        </g>
    </svg>

);

const PublishedIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
                fill="#1C274C"
            />{" "}
        </g>
    </svg>

);

const ScheduledIcon = () => (
    <svg
        height={24}
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1.75a.75.75 0 01.75.75v.763c.662-.013 1.391-.013 2.194-.013h4.112c.803 0 1.532 0 2.194.013V2.5a.75.75 0 011.5 0v.827c.26.02.506.045.739.076 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.05.375.084.784.107 1.23a.747.747 0 01.019.46c.027.801.027 1.712.027 2.743v2.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.031 0-1.942.027-2.744a.75.75 0 01.02-.46c.022-.445.056-.854.106-1.229.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238.233-.031.48-.056.739-.076V2.5A.75.75 0 017 1.75zm-4.237 8c-.013.653-.013 1.396-.013 2.25v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-2c0-.854 0-1.597-.013-2.25H2.763zm18.405-1.5H2.832c.016-.19.035-.369.058-.54.135-1.005.389-1.585.812-2.008.423-.423 1.003-.677 2.009-.812 1.028-.138 2.382-.14 4.289-.14h4c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.023.17.042.35.058.539zm-10.381 4.057a.75.75 0 01.463.693v4a.75.75 0 01-1.5 0v-2.19l-.22.22a.75.75 0 01-1.06-1.06l1.5-1.5a.75.75 0 01.817-.163zM14 13.75a.25.25 0 00-.25.25v2a.25.25 0 10.5 0v-2a.25.25 0 00-.25-.25zm-1.75.25a1.75 1.75 0 113.5 0v2a1.75 1.75 0 11-3.5 0v-2z"
            fill="#1C274C"
        />
    </svg>
);

const BookmarksIcon = () => (
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
            d="M12 0.999998C8.229 0.999998 5.343 3.855 5.343 7.614C5.343 8.937 5.706 10.21 6.398 11.317C7.029 12.304 7.834 13.19 8.676 13.964C9.727 14.906 10.818 15.699 11.576 16.508L12 16.918L12.424 16.508C13.182 15.699 14.273 14.906 15.324 13.964C16.166 13.19 16.971 12.304 17.602 11.317C18.294 10.21 18.657 8.937 18.657 7.614C18.657 3.855 15.771 0.999998 12 0.999998ZM12 15.433L10.755 14.248C9.925 13.443 9.03 12.641 8.345 11.677C7.764 10.874 7.343 9.766 7.343 7.614C7.343 4.605 9.98 1.999 12 1.999C14.02 1.999 16.657 4.605 16.657 7.614C16.657 9.766 16.236 10.874 15.655 11.677C14.97 12.641 14.075 13.443 13.245 14.248L12 15.433Z"
            fill="black"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9999 22C11.9999 22 12.5359 20.987 12.7939 20.58C13.0999 20.104 13.4999 19.499 14.1429 18.849C15.0749 17.931 15.6669 17.551 16.6669 17.551C17.4549 17.551 18.3329 17.992 18.3329 18.803C18.3329 19.264 18.0999 19.698 17.6569 19.698C17.1969 19.698 17.0939 19.309 16.4789 19.309C15.8639 19.309 15.3029 19.692 15.3029 20.386C15.3029 20.973 15.6679 21.371 16.0849 21.747C16.4449 22.074 16.7999 22.447 16.7999 23.051C16.7999 23.896 16.1299 24 15.7029 24C14.2789 24 12.6999 22.902 11.9999 22Z"
            fill="black"
        />
    </svg>
);

export default Navbar;

