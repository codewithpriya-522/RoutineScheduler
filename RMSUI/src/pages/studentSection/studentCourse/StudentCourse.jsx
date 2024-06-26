/* eslint-disable no-unused-vars */
import React from 'react';

const StudentCourse = () => {
  const courses = [
    {
      id: 1,
      category: 'Core',
      date: '15 Jan 2023',
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming using Python. This course covers variables, loops, and functions.',
    },
    {
      id: 2,
      category: 'Core',
      date: '10 Feb 2023',
      title: 'Data Structures and Algorithms',
      description: 'Understand data structures such as arrays, linked lists, stacks, queues, and algorithms for sorting and searching.',
    },
    {
      id: 3,
      category: 'Core',
      date: '05 Mar 2023',
      title: 'Database Systems',
      description: 'Introduction to database design and querying using SQL. Covers relational databases and database management systems.',
    },
    {
      id: 4,
      category: 'Core',
      date: '20 Apr 2023',
      title: 'Operating Systems',
      description: 'Learn about operating system concepts including processes, memory management, and file systems.',
    },
    {
      id: 5,
      category: 'Elective',
      date: '10 May 2023',
      title: 'Artificial Intelligence',
      description: 'Explore the fundamentals of artificial intelligence, including machine learning, neural networks, and natural language processing.',
    },
    {
      id: 6,
      category: 'Elective',
      date: '25 Jun 2023',
      title: 'Computer Networks',
      description: 'Study the principles of computer networks, including the OSI model, TCP/IP, and network protocols.',
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <h1 className="text-xl text-gray-700 font-bold">Courses</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-12 divide-y-2 divide-gray-100">
            {courses.map((course) => (
              <div key={course.id} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{course.category}</span>
                  <span className="mt-1 text-gray-500 text-sm">{course.date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{course.title}</h2>
                  <p className="leading-relaxed">{course.description}</p>
                  <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentCourse;
