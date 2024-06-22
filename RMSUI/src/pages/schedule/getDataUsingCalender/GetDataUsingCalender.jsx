/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { batchActions } from '../../../redux/slice/BatchSlice';
import { scheduleActions } from '../../../redux/slice/ScheduleSlice';
import batchSelector from '../../../redux/selector/BatchSelector';
import scheduleSelector from '../../../redux/selector/ScheduleSelector';
import EventDetailsModal from '../calender/EventDetailsModal';

// Configure dateFnsLocalizer with necessary functions and locales
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Dropdown component for selecting a batch
const Dropdown = ({ options, selectedOption, onChange }) => (
  <select
    id="dropdown"
    value={selectedOption}
    onChange={onChange}
    className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
  >
    <option value="" disabled>Select a batch</option>
    {options.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))}
  </select>
);

// Function to transform schedule data into events for the calendar
const transformSchedulesToEvents = (schedules) => {
  const events = [];
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  daysOfWeek.forEach((day, index) => {
    if (schedules[day] && Array.isArray(schedules[day])) {
      schedules[day].forEach((subject) => {
        const startTimeParts = subject.startTime.split(':');
        const endTimeParts = subject.endTime.split(':');
        const currentDate = new Date();

        const start = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + ((index - currentDate.getDay() + 7) % 7),
          parseInt(startTimeParts[0]),
          parseInt(startTimeParts[1])
        );

        const end = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + ((index - currentDate.getDay() + 7) % 7),
          parseInt(endTimeParts[0]),
          parseInt(endTimeParts[1])
        );

        events.push({
          title: subject.subjectName,
          start,
          end,
          allDay: false,
          subjectType: subject.subjectType,
          teacherName: subject.teacherName,
        });
      });
    }
  });

  return events;
};

const GetDataUsingCalender = () => {
  const dispatch = useDispatch();
  const batch = useSelector(batchSelector); // Selecting batch state from Redux store
  const schedules = useSelector(scheduleSelector); // Selecting schedules state from Redux store
  const [selectedOption, setSelectedOption] = useState(''); // State to track selected batch option
  const [dataTable, setDataTable] = useState([]); // State to store batch data for dropdown
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [events, setEvents] = useState([]); // State to store events for the calendar
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track selected event for modal

  // Fetch batch data when component mounts
  useEffect(() => {
    console.log("Dispatching batchActions.getall()");
    dispatch(batchActions.getall());
  }, [dispatch]);

  // Update batch data in local state when batch state changes
  useEffect(() => {
    console.log("Batch data:", batch);
    if (batch && batch.data && Array.isArray(batch.data) && batch.data.length > 0) {
      setDataTable(batch.data);
    }
  }, [batch]);

  // Update calendar events when schedules state changes
  useEffect(() => {
    console.log("Schedule data:", schedules);
    if (schedules && schedules.data && typeof schedules.data === 'object') {
      setShowCalendar(true);
      setEvents(transformSchedulesToEvents(schedules.data));
    } else {
      setShowCalendar(false);
    }
  }, [schedules]);

  // Handler for batch dropdown selection change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handler for generating schedules for selected batch
  const handleGenerateClick = async () => {
    if (selectedOption) {
      try {
        console.log("Dispatching scheduleActions.generate() with:", selectedOption);
        await dispatch(scheduleActions.generate(selectedOption));
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    }
  };

  // Handler for selecting an event on the calendar
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  // Handler for closing the event details modal
  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between items-center">
        <label htmlFor="dropdown" className="block text-xl font-medium text-gray-700">
          Select a batch
        </label>
      </div>
      <div className="relative flex space-x-4">
        {/* Render batch dropdown */}
        <Dropdown options={dataTable} selectedOption={selectedOption} onChange={handleSelectChange} />
        {/* Button to generate schedules */}
        <button
          onClick={handleGenerateClick}
          className="text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="button"
        >
          Generate
        </button>
      </div>
      {/* Render calendar if showCalendar is true */}
      {showCalendar && (
        <div className="mt-6">
          {/* Display batch name */}
          <h2 className="text-2xl font-bold">Batch: {schedules.data.batchName}</h2>
          {/* Render calendar component */}
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectEvent={handleEventSelect}
            defaultView='week'
          />
        </div>
      )}
      {/* Render event details modal if selectedEvent is not null */}
      {selectedEvent && <EventDetailsModal event={selectedEvent} onClose={handleCloseModal} />}
    </div>
  );
};

export default GetDataUsingCalender;
