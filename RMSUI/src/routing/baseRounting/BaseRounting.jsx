// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BatchComponent from '../../pages/batch/batchComponent'
import ScheduleComponent from '../../pages/schedule/scheduleComponent'
import WeeklySchedule from '../../pages/schedule/scheduleWeeklyComponent'
import BatchCreate from '../../pages/batch/batchCreate'
import Dashboard from '../../pages/dashboard/dashboard'
const BaseRouting = () => {
    return (
        <div>
            <Routes>
                <Route path='/batch/view' element={<BatchComponent />} />
                <Route path='/batch/create' element={<BatchCreate />} />
                <Route path='/schedule' element={<ScheduleComponent />} />
                <Route path='/schedule/weekly' element={<WeeklySchedule />} />
                <Route path='/' element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default BaseRouting