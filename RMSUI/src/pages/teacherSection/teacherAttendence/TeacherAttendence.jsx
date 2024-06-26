/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Tooltip } from '@mui/material';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const TeacherAttendance = () => {
  const events = [
    {
      title: 'Present',
      start: new Date(2024, 5, 1),
      end: new Date(2024, 5, 1),
      status: 'present',
    },
    {
      title: 'Absent',
      start: new Date(2024, 5, 2),
      end: new Date(2024, 5, 2),
      status: 'absent',
    },
    {
      title: 'Canceled',
      start: new Date(2024, 5, 3),
      end: new Date(2024, 5, 3),
      status: 'canceled',
    },
    // Add more events as needed
  ];

  const eventPropGetter = (event) => {
    let bgColor = '';
    if (event.status === 'present') {
      bgColor = 'bg-green-200';
    } else if (event.status === 'absent') {
      bgColor = 'bg-red-200';
    } else if (event.status === 'canceled') {
      bgColor = 'bg-yellow-200';
    }

    return {
      className: `${bgColor} relative group`,
    };
  };

  const EventComponent = ({ event }) => (
    <Tooltip title={event.title} arrow>
      <div className="p-1">
        {event.title}
      </div>
    </Tooltip>
  );

  return (
    <div className="mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Teacher Attendance Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventPropGetter}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default TeacherAttendance;
