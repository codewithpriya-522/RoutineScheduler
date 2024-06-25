/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scheduleActions } from '../../../redux/slice/ScheduleSlice';
import scheduleSelector from '../../../redux/selector/ScheduleSelector';
import {  studentActions } from '../../../redux/slice/StudentSlice';
import studentSelector from '../../../redux/selector/StudentSelector';

const StudentDailySchedule = () => {
    const dispatch = useDispatch();
    const schedule = useSelector(scheduleSelector);
    const student = useSelector(studentSelector);
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        const studentId = localStorage.getItem('studentId');
        console.log('studentId',studentId) // Get student ID from localStorage
        if (studentId) {
            dispatch(studentActions.singleGet(studentId)); // Fetch student data using studentId
        }
    }, [dispatch]);

    useEffect(() => {
        if (student && student.batchId) {
            const today = new Date(); // get today's date
            const formattedDate = today.getDate().toString().padStart(2, '0'); // get day and pad with leading zero if necessary
            dispatch(scheduleActions.getDaily({ batchId: student.batchId, day: formattedDate }));
        }
    }, [dispatch, student]);

    useEffect(() => {
        if (schedule && schedule.data && Array.isArray(schedule.data) && schedule.data.length > 0) {
            setDataTable(schedule.data);
        }
    }, [schedule]);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4 border-b">Student Daily Schedule</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Profile" />
                                    <div className="ps-3">
                                        <div className="text-base font-semibold">{item.name}</div>
                                        <div className="font-normal text-gray-500">{item.email}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    {item.position}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDailySchedule;
