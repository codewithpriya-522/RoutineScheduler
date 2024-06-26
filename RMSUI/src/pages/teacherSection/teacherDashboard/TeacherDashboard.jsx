/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { People, School, EventNote, BarChart, DonutLarge } from '@mui/icons-material';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const attendanceData = {
  labels: ['Present', 'Absent', 'Late'],
  datasets: [
    {
      label: 'Attendance',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const TeacherDashboard = () => {
  return (
    <Container maxWidth="lg" className="mt-4 mb-4">
      <Grid container spacing={3}>
        {/* Total Students Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-blue-100">
            <People className="text-blue-500" style={{ fontSize: 30 }} />
            <Typography variant="subtitle2" className="text-gray-700 mt-2">Covered Syllabus</Typography>
            <Typography variant="h6" className="text-indigo-600">50%</Typography>
          </Paper>
        </Grid>
        {/* Total Courses Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-green-100">
            <School className="text-green-500" style={{ fontSize: 30 }} />
            <Typography variant="subtitle2" className="text-gray-700 mt-2">Total Courses</Typography>
            <Typography variant="h6" className="text-green-600">20</Typography>
          </Paper>
        </Grid>
        {/* Total Attendance Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-yellow-100">
            <EventNote className="text-yellow-500" style={{ fontSize: 30 }} />
            <Typography variant="subtitle2" className="text-gray-700 mt-2">Total Attendance</Typography>
            <Typography variant="h6" className="text-yellow-600">200</Typography>
          </Paper>
        </Grid>
        {/* Upcoming Schedules Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-red-100">
            <EventNote className="text-red-500" style={{ fontSize: 30 }} />
            <Typography variant="subtitle2" className="text-gray-700 mt-2">Upcoming Schedules</Typography>
            <Typography variant="h6" className="text-red-600">20</Typography>
          </Paper>
        </Grid>
        {/* Line Chart */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper className="p-4 pb-5 flex flex-col h-72 justify-center shadow-lg">
            <div className="flex items-center justify-between">
              <Typography variant="subtitle1" className="text-gray-700">Performace</Typography>
              <BarChart className="text-gray-500" style={{ fontSize: 30 }} />
            </div>
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid>
        {/* Bar Chart */}
        {/* <Grid item xs={12} md={6} lg={6}>
          <Paper className="p-4 pb-5 flex flex-col h-72 justify-center shadow-lg">
            <div className="flex items-center justify-between">
              <Typography variant="subtitle1" className="text-gray-700">Performace</Typography>
              <BarChart className="text-gray-500" style={{ fontSize: 30 }} />
            </div>
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid> */}
        {/* Attendance Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper className="p-4 pb-5 flex flex-col h-72 justify-center shadow-lg">
            <div className="flex items-center justify-between">
              <Typography variant="subtitle1" className="text-gray-700">Attendance</Typography>
              <DonutLarge className="text-gray-500" style={{ fontSize: 30 }} />
            </div>
            <Doughnut data={attendanceData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeacherDashboard;
