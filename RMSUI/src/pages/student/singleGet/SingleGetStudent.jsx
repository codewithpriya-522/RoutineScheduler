// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { studentActions } from '../../../redux/slice/StudentSlice';
import studentSelector from '../../../redux/selector/StudentSelector';

const SingleGetStudent = () => {
  const dispatch = useDispatch();
  const { data: user, loading } = useSelector(studentSelector);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(studentActions.singleGet(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setEditableData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        depertmentName: user.depertmentName,
        depertmentID: user.depertmentID,
        batchName: user.batchName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        knownAs: user.knownAs,
        studentSubjects: user.studentSubjects ? [...user.studentSubjects] : [],
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your update logic here
    console.log("Editable Data:", editableData);
    setIsModalOpen(false);
    // Dispatch an action to update the student data
     dispatch(studentActions.update({ id, ...editableData }));
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="mx-auto">
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
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
                to="/home/students"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Students
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
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Student details</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
      <article className="rounded-xl border border-gray-700 bg-gray-50 p-4 relative">
        <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-1"
        >
          Edit
        </button>
        <div className="flex items-center gap-4">
          <img
            alt={`${user.firstName} ${user.lastName}`}
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            className="size-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-medium text-gray-800">{`${user.firstName} ${user.lastName}`}</h3>
            <div className="flow-root">
              <ul className="-m-1 flex flex-wrap">
                {user.email && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Email: {user.email}</span>
                  </li>
                )}
                {user.gender && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Gender: {user.gender}</span>
                  </li>
                )}
                {user.dateOfBirth && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Date of Birth: {user.dateOfBirth}</span>
                  </li>
                )}
                {user.batchName && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Batch: {user.batchName}</span>
                  </li>
                )}
                {user.knownAs && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Known As: {user.knownAs}</span>
                  </li>
                )}
              </ul>
              <ul className="-m-1 flex flex-wrap">
                {user.depertmentName && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">
                      Depertment Name: {user.depertmentName} (ID: {user.depertmentID})
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-gray-700">Subjects:</h4>
          <ul className="mt-2 space-y-2">
            {user.studentSubjects && user.studentSubjects.map((subject, index) => (
              <li key={index} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-gray-700">{subject}</strong>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Modal for editing */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white w-full max-w-lg p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Student Information</h2>
            <form onSubmit={handleSubmit}>
              {/* Input fields for editing */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={editableData.firstName || ''}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={editableData.lastName || ''}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              {/* Add more fields as needed */}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGetStudent;
