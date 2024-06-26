/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const StudentProfile = () => {
  return (
    <div className=" mx-auto my-10">
      <Card elevation={3} className="rounded-lg">
        <CardContent className="p-6">
          <div className="flex items-center">
            <Avatar
              alt="Student Avatar"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-20 h-20 mr-4"
            />
            <div>
              <Typography variant="h4" className="font-bold mb-2">
                John Doe
              </Typography>
              <Typography variant="subtitle1" className="text-gray-600">
                Student ID: 123456
              </Typography>
            </div>
          </div>
          <div className="mt-6">
            <Typography variant="h6" className="font-semibold mb-2">
              Contact Information
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="Email" secondary="john.doe@example.com" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Phone" secondary="+1 (123) 456-7890" />
              </ListItem>
            </List>
          </div>
          <div className="mt-6">
            <Typography variant="h6" className="font-semibold mb-2">
              Address
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              123 Main St, Springfield, IL 62701
            </Typography>
          </div>
          <div className="mt-6">
            <Typography variant="h6" className="font-semibold mb-2">
              Courses Enrolled
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemText primary="python" secondary="Professor Smith" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="React" secondary="Professor Johnson" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="java" secondary="Professor Davis" />
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
