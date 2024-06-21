// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { teacherActions } from '../../../redux/slice/TeacherSlice';
import teacherSelector from '../../../redux/selector/TeacherSelector';

const SingleGetTeacher = () => {
  const dispatch = useDispatch();
  const { data: teacher, loading } = useSelector(teacherSelector);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(teacherActions.singleGet(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (teacher) {
      setEditableData({
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        email: teacher.email,
        depertmentName: teacher.depertmentName,
        batchName: teacher.batchName,
        gender: teacher.gender,
        dateOfBirth: teacher.dateOfBirth,
        knownAs: teacher.knownAs,
      });
    }
  }, [teacher]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        console.log("Updating teacher with ID:", id);
        console.log("Editable Data:", editableData);
        await dispatch(teacherActions.update({ id, ...editableData }));
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating teacher:", error.message);
      // Handle error (e.g., display error message to user)
    }
  };
  

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!teacher) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div>
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="/home" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <Link to="/home/teachers" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Teachers</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Teacher details</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Teacher Information</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-8 right-4 text-sm text-white bg-gray-500 hover:bg-gray-600 rounded-full px-4 py-1"
      >
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
              <img
                alt={`${teacher.firstName} ${teacher.lastName}`}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAowMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgYDB//EACwQAQACAQIEAwkBAQEAAAAAAAABAgMEEQUSMUEhIlETMkJSYXGBscE0ciP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+kgAAAAAAAD1xabNm8ceO0x69kmnC88x5ppX8ggiwnhWb4b0/O7wy6DUY/G2Pmj1r4gjB08JAAAAAAAAAAAAAAPxuDNaWvaK0iZtPSIXGk4dTHEWzbXt6dob8P0kYMfNaP8A1t1+n0TAYiNoZAAAEfU6TFqI88bW7WjqptXpb6a+1o3rPu2ju6Fplx1y0ml43iQc0PXVYJ02WaT4x2n1h5AAAAAAAAAAAJvCsPtdRzzHlx/tCXXCKcul5u9pmf4CcAAAAAAACFxTD7XTzaI81PH8d1I6e0RaNp6TGzmr15L2r6TMA1AAAAAAAAAAX/Dv8WL7f1QLvhV+bR1jvWZgE0AAAAAAAGJc7q/9Wb/uf26KZ2jeejmstufLe3zWmQagAAAAAAAAAJ/CM3JmnFM+F+n3QGazNZiaztMdAdNDKNodTGpxb+EXj3oSQAAAAAa3vWlZta0REdZkEbiWb2WmtET5r+WFEka3Uzqc0z0pXwrCOAAAAAAAAAAAB9o3Bvhy3w3i+OdrQu9FrKamu0RMXjrCFpOG2vtfP5a/L3WmPHTHSK0rFax2gG4AAANMuSuKk3vvtHXaFLrdbbUztXy447ev3XqDquHY8u9sfkv9OkgpRvmw3wWmmSsxPr2loAAAAAAAAADNKze0VrG8z4RAM46WyXilImbT0iF1otDXT7WvtbJ6+n2baHSV02PtOSfeslAAAAAAAAA88+GmenLkrvH6Ues0l9Nb5sc9LOga5KVyUmtoiYntIOZEjW6WdNk2647T5Z/iOAAAAAAAtuE6blp7a8eNvd+kK3T4vbZ6Y4+KfH7OjrG0RERtEAyAAAAAAAAAAADy1GGufFalu/f0c9kpbFktS/Ws7S6ZU8Zw7Wrmjv5ZBWgAAAAAseDY98l8k/DHLC3QeEU5dLzfNaZ/icAAAAAAAAAAAAAj67H7XS5K99t4/CQxMbxMeoOYG2SvJkvT5bTDUAAAAF/w+NtHi29EkAAAAAAAAAAAAAAAc7ro21mXb5peIAAA/9k="
                className="h-32 w-32 rounded-lg object-cover shadow-sm"
              />
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

      {isModalOpen && (
        <div className="fixed  h-screen inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg h-screen  w-full max-w-lg mx-4 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Teacher Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={editableData.firstName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={editableData.lastName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editableData.email || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="depertmentName">
                  Department Name
                </label>
                <input
                  type="text"
                  name="depertmentName"
                  value={editableData.depertmentName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="batchName">
                  Batch Name
                </label>
                <input
                  type="text"
                  name="batchName"
                  value={editableData.batchName || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  value={editableData.gender || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={editableData.dateOfBirth || ''}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="ml-4 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGetTeacher;
