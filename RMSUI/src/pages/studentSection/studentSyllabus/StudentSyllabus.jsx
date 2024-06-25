/* eslint-disable no-unused-vars */
import React from 'react';

const StudentSyllabus = () => {
  // Dummy data for syllabus
  const syllabusData = [
    {
      id: 1,
      subject: 'Mathematics',
      teacher: 'John Doe',
      description: 'Introduction to calculus and algebra',
    },
    {
      id: 2,
      subject: 'Science',
      teacher: 'Jane Smith',
      description: 'Biology, chemistry, and physics basics',
    },
    {
      id: 3,
      subject: 'History',
      teacher: 'Michael Johnson',
      description: 'World history from ancient civilizations to modern times',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Student Syllabus</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          {syllabusData.map((item) => (
            <div key={item.id} className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">{item.subject}</h2>
              <p className="text-sm text-gray-600 mb-2">Teacher: {item.teacher}</p>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSyllabus;
