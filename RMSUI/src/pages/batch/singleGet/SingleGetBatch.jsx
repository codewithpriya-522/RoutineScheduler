// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import batchSelector from '../../../redux/selector/BatchSelector';
import { batchActions } from '../../../redux/slice/BatchSlice';
import { FaBook } from 'react-icons/fa';

const SingleGetBatch = () => {
  const dispatch = useDispatch();
  const { data: batch, loading } = useSelector(batchSelector);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(batchActions.singleGet(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!batch) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="flex flex-col justify-center items-start min-h-screen ">
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
              <Link to="/home/batch" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Batch</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Batchdetails</span>
            </div>
          </li>
        </ol>
      </nav>
   <h2 className="text-2xl font-bold text-gray-800 mb-4">Batch Information</h2>
      <div className="w-full  px-8 py-4  bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{batch.name}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          Start Date: {new Date(batch.startDate).toLocaleDateString()}<br />
          End Date: {new Date(batch.endDate).toLocaleDateString()}<br />
          Department ID: {batch.departmentId}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Subjects</h3>
          <ul className="mt-2 space-y-2">
            {batch.batchSubjects && batch.batchSubjects.length > 0 ? (
              batch.batchSubjects.map((subject, index) => (
                <li key={index} className="flex items-center p-2 bg-gray-200 rounded dark:bg-gray-700">
                  <FaBook className="text-blue-500 dark:text-blue-400" />
                  <span className="ml-2 text-gray-800 dark:text-gray-200">{subject}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-600 dark:text-gray-200">No subjects available</li>
            )}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Number of Students</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{batch.batchStudents}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Student IDs</h3>
          <ul className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            {batch.batchStudentIds && batch.batchStudentIds.length > 0 ? (
              batch.batchStudentIds.map((id, index) => (
                <li key={index}>{id}</li>
              ))
            ) : (
              <li className="text-gray-600 dark:text-gray-200">No student IDs available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleGetBatch;
