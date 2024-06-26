/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Tooltip from '@mui/material/Tooltip';

const StudentAttendance = () => {
  // Example of attendance data (replace with your actual data handling)
  const [attendance, setAttendance] = useState({
    '2024-06-01': 'present',
    '2024-06-03': 'late',
    '2024-06-10': 'absent',
    '2024-06-15': 'present',
    '2024-06-20': 'late',
    '2024-06-25': 'absent',
  });

  // Function to handle date click events
  const handleDateClick = (date) => {
    // Logic to handle date click (if needed)
    console.log('Clicked date:', date);
  };

  // Function to customize calendar tile content
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = formatDate(date);
      const status = attendance[formattedDate];
      let bgColorClass = '';
      let tooltipText = '';

      if (status === 'present') {
        bgColorClass = 'bg-green-400';
        tooltipText = 'Attend';
      } else if (status === 'absent') {
        bgColorClass = 'bg-red-400';
        tooltipText = 'Absent';
      } else if (status === 'late') {
        bgColorClass = 'bg-yellow-400';
        tooltipText = 'Late';
      }

      return (
        <Tooltip title={tooltipText} arrow>
          <div className={`relative ${bgColorClass} rounded-full h-6 w-6`} />
        </Tooltip>
      );
    }
    return null; // Return null for tiles not in month view
  };

  // Helper function to format date to YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className=" mx-w-screen ">
      <h1 className="text-2xl font-bold mb-4">Attendance</h1>
      <div className="flex justify-center mb-8">
        <Calendar
          onChange={handleDateClick} // Handle date click event
          tileContent={tileContent} // Customize tile content
          showWeekNumbers={true} // Optionally show week numbers
        />
      </div>
      <p className="text-sm text-gray-500">
        Click on a date to view or update attendance.
      </p>
    </div>
  );
};

export default StudentAttendance;
