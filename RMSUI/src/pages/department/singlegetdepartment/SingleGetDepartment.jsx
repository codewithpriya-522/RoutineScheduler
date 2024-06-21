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
        {/* Breadcrumb navigation */}
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
        {/* Additional department details */}
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
