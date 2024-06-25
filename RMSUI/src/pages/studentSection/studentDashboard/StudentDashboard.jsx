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
import { People, School } from '@mui/icons-material';

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

const StudentDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>

        {/* Total Students Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-blue-100">
            <People className="text-blue-500" style={{ fontSize: 40 }} />
            <Typography variant="h6" className="text-gray-700 mt-2">Total Students</Typography>
            <Typography variant="h4" className="text-indigo-600">1200</Typography>
          </Paper>
        </Grid>
        {/* Total Courses Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-green-100">
            <School className="text-green-500" style={{ fontSize: 40 }} />
            <Typography variant="h6" className="text-gray-700 mt-2">Total Courses</Typography>
            <Typography variant="h4" className="text-green-600">75</Typography>
          </Paper>
        </Grid>
         {/* Total Students Card */}
         <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-blue-100">
            <People className="text-blue-500" style={{ fontSize: 40 }} />
            <Typography variant="h6" className="text-gray-700 mt-2">Total Students</Typography>
            <Typography variant="h4" className="text-indigo-600">1200</Typography>
          </Paper>
        </Grid>
        {/* Total Courses Card */}
        <Grid item xs={12} md={6} lg={3}>
          <Paper className="p-4 flex flex-col h-36 justify-center items-center shadow-lg bg-green-100">
            <School className="text-green-500" style={{ fontSize: 40 }} />
            <Typography variant="h6" className="text-gray-700 mt-2">Total Courses</Typography>
            <Typography variant="h4" className="text-green-600">75</Typography>
          </Paper>
        </Grid>
        {/* Line Chart */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ p: 2,pb:5, display: 'flex', flexDirection: 'column', height: 280 }}>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid>
        {/* Bar Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper sx={{ p: 2,pb:5, display: 'flex', flexDirection: 'column', height: 280 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid>
        {/* Attendance Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper sx={{ p: 2,pb:5 ,display: 'flex', flexDirection: 'column', height: 280 }}>
            <Typography variant="h6" gutterBottom>
              Attendance
            </Typography>
            <Doughnut data={attendanceData} options={{ responsive: true, maintainAspectRatio: false }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
