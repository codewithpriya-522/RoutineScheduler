// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { studentActions } from '../../../redux/slice/StudentSlice';
import studentSelector from '../../../redux/selector/StudentSelector';

const SingleGetStudent = () => {
  const dispatch = useDispatch();
  const { data: user, loading } = useSelector(studentSelector);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(studentActions.singleGet(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="mx-auto my-10 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
      <article className="rounded-xl border border-gray-700 bg-gray-50 p-4 relative">
        <button className="absolute top-4 right-4 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-1">
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
                    <span className="text-xs font-medium text-gray-700">Depertment Name: {user.depertmentName}(ID:{user.depertmentID})</span>
                  </li>
                )}
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-gray-700">Subjects:</h4>
          <ul className="mt-2 space-y-2">
           <ul className="mt-2 space-y-2">
            {user.studentSubjects && user.studentSubjects.map((subject, index) => (
              <li key={index} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
                <strong className="font-medium text-gray-700">{subject}</strong>
              </li>
            ))}
          </ul>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default SingleGetStudent;
