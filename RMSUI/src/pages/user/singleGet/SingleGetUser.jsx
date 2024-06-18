// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSelector from '../../../redux/selector/UserSelector';
import { useParams } from 'react-router-dom';
import { userActions } from '../../../redux/slice/UserSlice';

const SingleGetUser = () => {
  const dispatch = useDispatch();
  const { data: user, loading } = useSelector(userSelector);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(userActions.singleGet(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="h-screen p-4 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Information</h2>
        <article className="rounded-xl border border-gray-700 bg-gray-50 p-4 relative">
          <button className="absolute top-4 right-4 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-1">
            Edit
          </button>
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
      
    </div>
  );
}

export default SingleGetUser;
