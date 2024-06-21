/* eslint-disable no-unused-vars */
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
  const [dataTable, setDataTable] = useState([]);
  const [showCard, setShowCard] = useState(false); // Initialize showCard state

  useEffect(() => {
    dispatch(batchActions.getall());
  }, [dispatch]);

  useEffect(() => {
    if (batch && batch.data && Array.isArray(batch.data) && batch.data.length > 0) {
      setDataTable(batch.data);
    }
  }, [batch]);

  useEffect(() => {
    if (schedules && schedules.data && typeof schedules.data === 'object') {
      setShowCard(true); // Update showCard state based on conditions
    } else {
      setShowCard(false);
    }
  }, [schedules]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenerateClick = async () => {
    if (selectedOption) {
      try {
        await dispatch(scheduleActions.generate(selectedOption));
      } catch (error) {
        console.error('Error fetching schedule:', error);
        // Handle error state or display error message
      }
    }
  };

  // Extract batchName from schedules.data
  const batchName = schedules.data?.batchName || '';

  return (
    <div className="p-5">
      <div className="mb-4 flex justify-between items-center">
        <label htmlFor="dropdown" className="block text-xl font-medium text-gray-700">
          Select a batch
        </label>
      </div>
      <div className="relative flex space-x-4">
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
        <>
          <h2 className="text-2xl font-bold mt-6">Batch: {batchName}</h2>
          {Object.keys(schedules.data).map((day) => (
            day !== 'batchName' && (
              <div key={day} className="mt-6">
                <h2 className="text-xl font-bold">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
                <div className="grid grid-cols-1 gap-4 mt-3">
                  {Array.isArray(schedules.data[day]) && schedules.data[day].length > 0 && (
                    schedules.data[day].map((subject, index) => (
                      <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
                        <p className="text-gray-700 font-medium">Subject Name: {subject.subjectName}</p>
                        <p className="text-gray-700">Subject Type: {subject.subjectType}</p>
                        <p className="text-gray-700">Teacher Name: {subject.teacherName}</p>
                        <p className="text-gray-700">Start Time: {subject.startTime}</p>
                        <p className="text-gray-700">End Time: {subject.endTime}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )
          ))}
        </>
      )}
    </div>
  );
};

export default GenerateSchedulebyBatch;
