/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const EditUserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    // eslint-disable-next-line react/prop-types
    userName: user.userName,
    // eslint-disable-next-line react/prop-types
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    gender: user.gender,
    bio: user.bio,
    preferredLanguage: user.preferredLanguage,
    location: user.location,
    dateOfBirth: user.dateOfBirth,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          {/* Add other input fields similarly */}
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
