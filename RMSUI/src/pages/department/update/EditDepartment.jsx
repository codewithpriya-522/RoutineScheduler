/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { departmentActions } from '../../../redux/slice/DepartmentSlice';

const EditDepartmentModal = ({ department, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: department.id,
    name: department.name,
    headOfDepartment: department.headOfDepartment,
    description: department.description,
    totalTeachers: department.totalTeachers,
    totalBatches: department.totalBatches,
    totalSubjects: department.totalSubjects,
    totalStudents: department.totalStudents,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(departmentActions.update(formData))
      .then(() => {
        onSuccess(); // Trigger success action in parent component
        onClose(); // Close modal after successful update
      })
      .catch((error) => {
        console.error('Error updating department:', error);
        // Handle error if needed
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-bold mb-4">Edit Department</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Other form inputs for headOfDepartment, description, etc. */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDepartmentModal;
