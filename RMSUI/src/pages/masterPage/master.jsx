import React from "react";
import Navbar from "../components/nav";
import Dashboard from "../dashboard/dashboard";
import BaseRouting from "../../routing/baseRounting/BaseRounting";
import { BrowserRouter } from "react-router-dom";
const Master = () => {
    return (
        <div className="flex flex-row">
            <Navbar />
            <BrowserRouter>
                <BaseRouting />
            </BrowserRouter>
        </div>
    )
}

export default Master;