import React, { useState } from 'react';
import { ScheduleService } from '../../services/scheduleService';
import UpdateScheduleDto from '../../models/UpdateScheduleDto';

const ScheduleComponent = () => {
  const [batchId, setBatchId] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleFetchDailySchedule = async () => {
    try {
      const response = await ScheduleService.getWeeklySchedule(batchId);
      setSchedule(response.data);
      console.log('Weekly schedule fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching weekly schedule', error);
    }
  };

  return (
    <div>
      <h2>Schedule</h2>
      <input
        type="text"
        value={batchId}
        onChange={(e) => setBatchId(e.target.value)}
        placeholder="Batch ID"
      />
      <button onClick={handleFetchDailySchedule}>Fetch Daily Schedule</button>
      {schedule && (
        <div>
          <h3>Schedule for Batch {batchId} </h3>
          <pre>{JSON.stringify(schedule)}</pre>
        </div>
      )}
    </div>
  );
};

export default ScheduleComponent;
