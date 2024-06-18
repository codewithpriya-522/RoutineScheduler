// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../components/nav";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Master = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar for larger screens */}
            <div className="hidden md:flex md:w-64 lg:w-80">
                <Navbar />
            </div>
            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center justify-between p-4 md:hidden">
                    <button onClick={toggleSidebar}>
                        <FaBars size={24} />
                    </button>
                    <h1 className="text-xl font-bold">RMS</h1>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </div>
            </div>
            {/* Floating sidebar for smaller screens */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={toggleSidebar}></div>
                    <div className="relative flex w-2/3 max-w-xs p-4 bg-white">
                        <Navbar />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Master;
