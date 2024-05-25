import { api } from './apiService';

export const ScheduleService = {
  getDailySchedule: (batchId, day) => {
    return api.get(`/Schedule/daily/${batchId}/${day}`);
  },
  getDepartmentSchedule: (departmentId) => {
    return api.get(`/Schedule/department/${departmentId}`);
  },
  updateSchedule: (updateScheduleDto) => {
    return api.put('/Schedule/update', updateScheduleDto);
  },
  getFreeSchedule: (teacherId, departmentId) => {
    return api.get(`/Schedule/free/${teacherId}/${departmentId}`);
  },
  deleteSchedule: (scheduleId) => {
    return api.delete(`/Schedule/delete/${scheduleId}`);
  },
  getWeeklySchedule: (batchId) => {
    return api.get(`/Schedule/weekly/${batchId}`);
  },
  createTimeSlot: (timeSlotDTO) => {
    return api.post('/Schedule/timeslot', timeSlotDTO);
  }
};