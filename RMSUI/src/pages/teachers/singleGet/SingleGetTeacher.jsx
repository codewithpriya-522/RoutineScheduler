// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { teacherActions } from '../../../redux/slice/TeacherSlice';
import teacherSelector from '../../../redux/selector/TeacherSelector';

const SingleGetTeacher = () => {
  const dispatch = useDispatch();
  const { data: teacher, loading } = useSelector(teacherSelector);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(teacherActions.singleGet(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!teacher) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
      <button className="absolute top-8 right-4 text-sm text-white bg-gray-500 hover:bg-gray-600 rounded-full px-4 py-1">
          Edit
        </button>
      <div className="relative mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
       
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {teacher.firstName} {teacher.lastName}
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">Email: {teacher.email}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Department: {teacher.depertmentName} (ID: {teacher.depertmentID})</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Batch: {teacher.batchName}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Gender: {teacher.gender}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Date of Birth: {teacher.dateOfBirth}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Known As: {teacher.knownAs || "N/A"}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Created: {teacher.created}</p>
              <p className="mt-1 text-xs font-medium text-gray-600">Last Active: {new Date(teacher.lastActive).toLocaleString()}</p>
            </div>
            <div className="hidden sm:block sm:shrink-0">
              <img alt={`${teacher.firstName} ${teacher.lastName}`} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" className="h-32 w-32 rounded-lg object-cover shadow-sm" />
            </div>
          </div>
          <div className="mt-4">
            <h4 className="mt-4 font-semibold">Subjects</h4>
            {teacher.studentSubjects && teacher.studentSubjects.length > 0 ? (
              <ul className="list-disc pl-5 mt-2">
                {teacher.studentSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No subjects available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGetTeacher;
