// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/nav";
import { Outlet } from "react-router-dom";
const Master = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <div className="my-8 mx-3">
            <Outlet />
            </div>
        </div>
    )
}

export default Master;