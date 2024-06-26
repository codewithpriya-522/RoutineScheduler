/* eslint-disable no-unused-vars */
import React from 'react';

const StudentSyllabus = () => {
  // Dummy data for syllabus
  const syllabusData = [
    {
      id: 1,
      subject: 'Computer Science 101',
      teacher: 'Alice Brown',
      description: 'Introduction to programming and data structures',
    },
    {
      id: 2,
      subject: 'Computer Science 102',
      teacher: 'Alice Brown',
      description: 'Object-oriented programming and software engineering',
    },
    {
      id: 3,
      subject: 'Computer Science 201',
      teacher: 'Bob White',
      description: 'Algorithms and data structures',
    },
    {
      id: 4,
      subject: 'Computer Science 202',
      teacher: 'Bob White',
      description: 'Database systems and SQL',
    },
    {
      id: 5,
      subject: 'Computer Science 301',
      teacher: 'Charlie Green',
      description: 'Operating systems and concurrency',
    },
    {
      id: 6,
      subject: 'Computer Science 302',
      teacher: 'Charlie Green',
      description: 'Computer networks and security',
    },
    {
      id: 7,
      subject: 'Computer Science 401',
      teacher: 'David Black',
      description: 'Artificial intelligence and machine learning',
    },
    {
      id: 8,
      subject: 'Computer Science 402',
      teacher: 'David Black',
      description: 'Big data and cloud computing',
    },
  ];

  return (
    <div className="mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Syllabus</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <div className="flex flex-wrap -mx-2">
          {syllabusData.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="bg-gray-50 shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-bold text-gray-900">{item.subject}</h2>
                <p className="text-sm text-gray-600 mb-2">Teacher: {item.teacher}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentSyllabus;
