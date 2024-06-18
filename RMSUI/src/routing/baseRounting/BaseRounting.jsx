// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScheduleComponent from '../../pages/schedule/scheduleComponent'
import WeeklySchedule from '../../pages/schedule/scheduleWeeklyComponent'
import Dashboard from '../../pages/dashboard/dashboard'
const BaseRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/schedule' element={<ScheduleComponent />} />
                <Route path='/schedule/weekly' element={<WeeklySchedule />} />
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default BaseRouting