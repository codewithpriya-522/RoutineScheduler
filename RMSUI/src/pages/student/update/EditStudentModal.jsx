/* eslint-disable react/prop-types */
// EditStudentModal.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { studentActions } from '../../../redux/slice/StudentSlice';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line no-unused-vars
const EditStudentModal = ({ student, onClose, }) => {
    const [formData, setFormData] = useState({
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        departmentName: student.departmentName,
        departmentID: student.departmentID,
        batchName: student.batchName,
        gender: student.gender,
        dateOfBirth: student.dateOfBirth,
        knownAs: student.knownAs,
        studentSubjects: student.studentSubjects ? [...student.studentSubjects] : [],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(studentActions.update(formData))
        onClose();

    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-full sm:w-96">
                <h2 className="text-lg font-bold mb-4">Edit Student Information</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
                    {/* <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                            Department Name
                        </label>
                        <input
                            type="text"
                            id="departmentName"
                            name="departmentName"
                            value={formData.departmentName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departmentID" className="block text-sm font-medium text-gray-700">
                            Department ID
                        </label>
                        <input
                            type="text"
                            id="departmentID"
                            name="departmentID"
                            value={formData.departmentID}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="batchName" className="block text-sm font-medium text-gray-700">
                            Batch Name
                        </label>
                        <input
                            type="text"
                            id="batchName"
                            name="batchName"
                            value={formData.batchName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="knownAs" className="block text-sm font-medium text-gray-700">
                            Known As
                        </label>
                        <input
                            type="text"
                            id="knownAs"
                            name="knownAs"
                            value={formData.knownAs}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="studentSubjects" className="block text-sm font-medium text-gray-700">
                            Subjects
                        </label>
                        <input
                            type="text"
                            id="studentSubjects"
                            name="studentSubjects"
                            value={formData.studentSubjects.join(', ')}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    studentSubjects: e.target.value.split(',').map((sub) => sub.trim()),
                                })
                            }
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div> */}
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

export default EditStudentModal;
