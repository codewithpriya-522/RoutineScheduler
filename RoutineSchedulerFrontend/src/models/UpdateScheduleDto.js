export default class UpdateScheduleDto {
    constructor(scheduleId, teacherId, batchId, subjectId, day, timeSlot) {
      this.scheduleId = scheduleId;
      this.teacherId = teacherId;
      this.batchId = batchId;
      this.subjectId = subjectId;
      this.day = day;
      this.timeSlot = timeSlot;
    }
  }
  