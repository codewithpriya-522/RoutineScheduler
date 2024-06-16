// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from '../../pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../../pages/landingPage/LandingPage'
import Regitration from '../../pages/registration/Regitration'
import ForgotPassword from '../../pages/forgotPassword/ForgotPassword'
import Master from '../../pages/masterPage/master'
import Dashboard from '../../pages/dashboard/dashboard'
import GetAll from '../../pages/teachers/getall/GetAll'
import WeeklySchedule from '../../pages/schedule/WeeklySchedule'
const HomeRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Regitration />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
                <Route path='/home' element={<Master />} >
                    <Route index element={<Dashboard />}/>
                    <Route path='/home/schedule' element={<WeeklySchedule/>} />
                    <Route path='/home/teachers' element={<GetAll />} />
                </Route>
            </Routes>
        </div>
    )
}

export default HomeRouting