// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from '../../pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../pages/landingPage/LandingPage'
import Regitration from '../../pages/registration/Regitration'
import ForgotPassword from '../../pages/forgotPassword/ForgotPassword'
const HomeRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Regitration />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Routes>
        </div>
    )
}

export default HomeRouting