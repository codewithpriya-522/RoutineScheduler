/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const EditUserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    userName: user.userName || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    gender: user.gender || '',
    bio: user.bio || '',
    preferredLanguage: user.preferredLanguage || '',
    location: user.location || '',
    dateOfBirth: user.dateOfBirth || '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.userName) newErrors.userName = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSave(formData);
    }
  };

  const renderInputField = (label, name, type = 'text') => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && <p className="mt-1 text-sm text-red-600" id={`${name}-error`}>{errors[name]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md" role="dialog" aria-modal="true" aria-labelledby="edit-user-modal-title">
        <h2 id="edit-user-modal-title" className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          {renderInputField('Username', 'userName')}
          {renderInputField('First Name', 'firstName')}
          {renderInputField('Last Name', 'lastName')}
          {renderInputField('Email', 'email', 'email')}
          {renderInputField('Gender', 'gender')}
          {renderInputField('Bio', 'bio')}
          {renderInputField('Preferred Language', 'preferredLanguage')}
          {renderInputField('Location', 'location')}
          {renderInputField('Date of Birth', 'dateOfBirth', 'date')}
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
