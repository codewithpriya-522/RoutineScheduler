// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ScheduleService } from '../../services/scheduleService';

const WeeklySchedule = () => {
  const [batchId, setBatchId] = useState('');
  const [day, setDay] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleFetchDailySchedule = async () => {
    try {
      const response = await ScheduleService.getDailySchedule(batchId);
      setSchedule(response.data);
    } catch (error) {
      console.error('Error fetching daily schedule', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Weekly Schedule</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="batchId">Batch ID</label>
          <input
            type="text"
            id="batchId"
            value={batchId}
            onChange={(e) => setBatchId(e.target.value)}
            placeholder="Enter Batch ID"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="day">Day</label>
          <input
            type="text"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Enter Day"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleFetchDailySchedule}
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Fetch Daily Schedule
        </button>
        {schedule && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-gray-700">Schedule for Batch {batchId} on {day}</h3>
            <pre className="mt-2 text-sm text-gray-900">{JSON.stringify(schedule, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklySchedule;
