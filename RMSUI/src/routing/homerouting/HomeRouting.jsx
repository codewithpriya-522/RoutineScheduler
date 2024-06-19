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
import GetAllUser from '../../pages/user/getall/GetAllUser'
import GetAllStudent from '../../pages/student/getall/GetAllStudent'
import SingleGetStudent from '../../pages/student/singleGet/SingleGetStudent'
import SingleGetTeacher from '../../pages/teachers/singleGet/SingleGetTeacher'
import SingleGetUser from '../../pages/user/singleGet/SingleGetUser'
import GetAllBatch from '../../pages/batch/getall/GetAllBatch'
import SingleGetBatch from '../../pages/batch/singleGet/SingleGetBatch'
import GetAllDepartment from '../../pages/department/getall/GetAllDepartment'
import SingleGetDepartment from '../../pages/department/singlegetdepartment/SingleGetDepartment'
import GetAllSchedule from '../../pages/schedule/getall/GetAllSchedule'

const HomeRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Regitration />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
                <Route path='/home' element={<Master />} >
                    <Route index element={<Dashboard />} />
                    <Route path='/home/schedule' element={<GetAllSchedule />} />
                    <Route path='/home/teachers' element={<GetAll />} />
                    <Route path='/home/users' element={<GetAllUser />} />
                    <Route path='/home/students' element={<GetAllStudent />} />
                    <Route path='/home/students/details/:id' element={<SingleGetStudent />} />
                    <Route path='/home/teachers/details/:id' element={<SingleGetTeacher />} />
                    <Route path='/home/users/details/:id' element={<SingleGetUser />} />
                    <Route path='/home/department' element={<GetAllDepartment />} />
                    <Route path='/home/department/details/:id' element={<SingleGetDepartment />} />
                    <Route path='/home/batch' element={<GetAllBatch />} />
                    <Route path='/home/batch/details/:id' element={<SingleGetBatch />} />
                </Route>
            </Routes>
        </div>
    )
}

export default HomeRouting