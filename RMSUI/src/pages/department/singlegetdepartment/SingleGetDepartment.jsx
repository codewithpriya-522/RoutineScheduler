/* eslint-disable no-unused-vars */
// SingleGetDepartment.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import departmentSelector from '../../../redux/selector/DepartmentSelector';
import { departmentActions } from '../../../redux/slice/DepartmentSlice';
import EditDepartmentModal from '../update/EditDepartment' // Corrected import path

const SingleGetDepartment = () => {
  const dispatch = useDispatch();
  const { data: department, loading } = useSelector(departmentSelector);
  const { id } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState(null);


  const handleEditClick = () => {
    // Prepare formData here
    setFormData({
      id: department.id,
      name: department.name,
      headOfDepartment: department.headOfDepartment,
      description: department.description,
      totalTeachers: department.totalTeachers,
      totalBatches: department.totalBatches,
      totalSubjects: department.totalSubjects,
      totalStudents: department.totalStudents,
    });
    setShowEditModal(true);
    
  };

  const handleModalClose = () => {
    setShowEditModal(false);
    setFormData(null);
  };
  useEffect(() => {
    if (id) {
      dispatch(departmentActions.singleGet(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!department) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="flex flex-col items-start min-h-screen">
       <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/home"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <Link
                to="/home/department"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                department
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Department details</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Department Information</h2>
      <div className="w-full px-8 py-4 bg-white rounded-lg shadow-lg dark:bg-white relative">
        <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">{department.name}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Head of Department:</strong> {department.headOfDepartment}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Description:</strong> {department.description}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Total Teachers:</strong> {department.totalTeachers}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Total students:</strong> {department.totalStudents}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Total Batches:</strong> {department.totalBatches}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          <strong>Total Subjects:</strong> {department.totalSubjects}
        </p>
      </div>
      
      {/* Edit Department Modal */}
      {showEditModal && (
        <EditDepartmentModal
          department={formData}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default SingleGetDepartment;
