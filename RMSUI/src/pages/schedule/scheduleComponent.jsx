import React, { useState } from 'react';
import { ScheduleService } from '../../services/scheduleService';
import UpdateScheduleDto from '../../models/UpdateScheduleDto';

const WeeklySchhedule = () => {
  const [batchId, setBatchId] = useState('');
  const [day, setDay] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleFetchDailySchedule = async () => {
    try {
      const response = await ScheduleService.getDailySchedule(batchId, day);
      setSchedule(response.data);
    } catch (error) {
      console.error('Error fetching daily schedule', error);
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
      <input
        type="text"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="Day"
      />
      <button onClick={handleFetchDailySchedule}>Fetch Daily Schedule</button>
      {schedule && (
        <div>
          <h3>Schedule for Batch {batchId} on {day}</h3>
          <pre>{JSON.stringify(schedule, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default WeeklySchhedule;
