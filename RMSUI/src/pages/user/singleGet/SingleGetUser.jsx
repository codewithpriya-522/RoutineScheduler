// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { userActions } from '../../../redux/slice/UserSlice';
import userSelector from '../../../redux/selector/UserSelector';
//import EditUserModal from '../update/UpdateUser';

const SingleGetUser = () => {
  const dispatch = useDispatch();
  const { data: user, loading, error } = useSelector(userSelector);
  const { id } = useParams();
  //const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(userActions.singleGet(id));
    }
  }, [dispatch, id]);

  // const handleEditClick = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleSaveUser = (updatedUser) => {
  //   // Dispatch the action to save the updated user details
  //   dispatch(userActions.update(updatedUser));
  //   setIsModalOpen(false);
  // };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="h-screen">
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
              <Link to="/home/users" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Users</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">User details</span>
            </div>
          </li>
        </ol>
      </nav>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Information</h2>
      <article className="rounded-xl border border-gray-700 bg-gray-50 p-4 relative">
        {/* <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-1"
        >
          Edit
        </button> */}
        <div className="flex items-center gap-4">
          <img
            alt={user.userName}
            src={user.photoUrl || "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.userName}
            </h3>
            <div className="flow-root">
              <ul className="-m-1 flex flex-wrap">
                {user.website && (
                  <li className="p-1 leading-none">
                    <a href={user.website} className="text-xs font-medium text-gray-700">Website</a>
                  </li>
                )}
                {user.roles && (
                  <li className="p-1 leading-none">
                    <span className="text-xs font-medium text-gray-700">Role: {user.roles.join(', ')}</span>
                  </li>
                )}
                <li className="p-1 leading-none">
                  <span className="text-xs font-medium text-gray-700">Email: {user.email}</span>
                </li>
                <li className="p-1 leading-none">
                  <span className="text-xs font-medium text-gray-700">Gender: {user.gender}</span>
                </li>
                <li className="p-1 leading-none">
                  <span className="text-xs font-medium text-gray-700">Active: {user.isActive ? "Yes" : "No"}</span>
                </li>
                <li className="p-1 leading-none">
                  <span className="text-xs font-medium text-gray-700">Notifications Enabled: {user.notificationsEnabled ? "Yes" : "No"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-gray-700">Bio</strong>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {user.bio || "No bio available"}
            </p>
          </li>
          <li className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-gray-700">Preferred Language</strong>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {user.preferredLanguage || "Not specified"}
            </p>
          </li>
          <li className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-gray-700">Location</strong>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {user.location || "Not specified"}
            </p>
          </li>
          <li className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-gray-700">Date of Birth</strong>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {user.dateOfBirth}
            </p>
          </li>
          <li className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium text-gray-700">Last Active</strong>
            <p className="mt-1 text-xs font-medium text-gray-500">
              {new Date(user.lastActive).toLocaleString()}
            </p>
          </li>
        </ul>
      </article>
      {/* {isModalOpen && (
      
        <EditUserModal user={user} onClose={handleCloseModal} onSave={handleSaveUser} />
  
      )} */}
    </div>
  );
}

export default SingleGetUser;
