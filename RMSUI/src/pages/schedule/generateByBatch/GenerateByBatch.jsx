/* eslint-disable no-unused-vars */
// GenerateSchedulebyBatch.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scheduleActions } from '../../../redux/slice/ScheduleSlice';
import scheduleSelector from '../../../redux/selector/ScheduleSelector';
import batchSelector from '../../../redux/selector/BatchSelector';
import { batchActions } from '../../../redux/slice/BatchSlice';

const GenerateSchedulebyBatch = () => {
  const dispatch = useDispatch();
  const batch = useSelector(batchSelector);
  const schedules = useSelector(scheduleSelector);
  const [selectedOption, setSelectedOption] = useState('');
  const [showCard, setShowCard] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [generatedContent, setGeneratedContent] = useState(null);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    dispatch(batchActions.getall());
  }, [dispatch]);

  useEffect(() => {
    if (
      batch &&
      batch.data &&
      Array.isArray(batch.data) &&
      batch.data.length > 0
    ) {
      setDataTable(batch.data);
    }
  }, [batch]);

  useEffect(() => {
    if (
      schedules &&
      schedules.data &&
      Array.isArray(schedules.data) &&
      schedules.data.length > 0
    ) {
      setShowCard(true); // Show card when data is available
    } else {
      setShowCard(false); // Hide card if no data or empty array
    }
  }, [schedules]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenerateClick = async () => {
    if (selectedOption) {
      try {
        await dispatch(scheduleActions.getall(selectedOption));
        setGeneratedContent(selectedOption);
      } catch (error) {
        console.error('Error fetching schedule:', error);
        // Handle error state or display error message
      }
    }
  };

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between items-center">
        <label htmlFor="dropdown" className="block text-xl font-medium text-gray-700">
          Select a batch
        </label>
      </div>
      <div className="relative flex  space-x-4">
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          className="w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>Select a batch</option>
          {dataTable.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleGenerateClick}
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          type="button"
        >
          Generate
        </button>
      </div>
      {showCard && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white">
          <h3 className="text-lg font-bold mb-2">Generated Card</h3>
          {schedules.data.map((schedule) => (
            <div key={schedule.id} className="mb-3">
              <p className="text-gray-700 font-medium">Schedule ID: {schedule.id}</p>
              <p className="text-gray-700">Name: {schedule.name}</p>
              <p className="text-gray-700">Start Time: {schedule.startTime}</p>
              <p className="text-gray-700">End Time: {schedule.endTime}</p>
              <p className="text-gray-700">Location: {schedule.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenerateSchedulebyBatch;
