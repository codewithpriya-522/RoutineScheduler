/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import userSelector from '../../../redux/selector/UserSelector';
import { userActions } from '../../../redux/slice/UserSlice';
import { useNavigate } from 'react-router-dom';

const GetAllUser = () => {
  const dispatch = useDispatch();
  const selector = useSelector(userSelector);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    if (
      selector &&
      selector.data &&
      Array.isArray(selector.data) &&
      selector.data.length > 0
    ) {
      const allData = selector.data.map((item) => ({
        id: item.id,
        userName: item.userName,
        dateOfBirth: item.dateOfBirth,
        gender: item.gender,
        email: item.email,
        photoUrl: item.photoUrl,
        isActive: item.isActive,
        lastActive: item.lastActive
      }));
      setDataTable(allData);
    }
  }, [selector]);

  useEffect(() => {
    dispatch(userActions.getall());
  }, [dispatch]);


  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataTable.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate()
  return (
    <div className="container mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">All Users</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => alert('Create action triggered')}
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 overflow-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">userName</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">gender</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">date Of Birth</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">status</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">last Active</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50" onClick={() => { navigate(`/home/users/details/${item.id}`) }}>
                <td scope="row" className=" px-6 py-4 text-gray-900 whitespace-no-wrap dark:text-white border-b border-gray-200">
                  <div className='flex items-center'>
                    <img className="w-9 h-8 rounded-full" src={item.photoUrl ? item.photoUrl : 'data:image/png;base64,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'} alt="image" />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{item.userName}</div>
                      <div className="font-normal text-gray-500">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.gender}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.dateOfBirth}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.isActive === 'true' ? 'online' : 'offline'}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.lastActive}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex">
                    <BsPencilSquare
                      className="text-green-500 cursor-pointer hover:text-green-700"
                      onClick={() => alert(`Edit entry with ID ${item.id}`)}
                    />
                    <BsFillTrashFill
                      className="ml-2 text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => alert(`Delete entry with ID ${item.id}`)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-end mt-4">
        <nav>
          <ul className="flex items-center">
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded-md mr-2"
              >
                Previous
              </button>
            </li>
            {dataTable.length > itemsPerPage &&
              Array.from({ length: Math.ceil(dataTable.length / itemsPerPage) }, (_, i) => (
                <li key={i}>
                  <button
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded-md mr-2 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            <li>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(dataTable.length / itemsPerPage)}
                className="px-3 py-1 bg-gray-200 rounded-md ml-2"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default GetAllUser;
