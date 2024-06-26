/* eslint-disable no-unused-vars */
import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Dummy data for teacher schedule
const scheduleData = [
  { id: 1, day: 'Monday', time: '9:00 AM - 12:00 PM', subject: 'Computer Science 101' },
  { id: 2, day: 'Tuesday', time: '10:00 AM - 1:00 PM', subject: 'Computer Science 201' },
  { id: 3, day: 'Wednesday', time: '8:00 AM - 11:00 AM', subject: 'Computer Science 301' },
  { id: 4, day: 'Thursday', time: '11:00 AM - 2:00 PM', subject: 'Computer Science 102' },
  { id: 5, day: 'Friday', time: '1:00 PM - 4:00 PM', subject: 'Computer Science 401' },
];

const TeacherSchedule = () => {
  return (
    <div className="mx-auto my-4 max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4">Teacher Schedule</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.subject}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TeacherSchedule;
