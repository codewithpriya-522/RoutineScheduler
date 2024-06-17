/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import userSelector from '../../../redux/selector/UserSelector';
import { userActions } from '../../../redux/slice/UserSlice';

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
        depertmentName: item.depertmentName,
        email: item.email,
        photoUrl:item.photoUrl
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


  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">All Teachers</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => alert('Create action triggered')}
        >
          Create
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 overflow-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">userName</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">dateOfBirth</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
              <td scope="row" className=" px-6 py-4 text-gray-900 whitespace-no-wrap dark:text-white border-b border-gray-200">
             <div className='flex items-center'>
                    <img className="w-10 h-10 rounded-full" src={item.photoUrl} alt="image" />
                    <div className="ps-3">
                        <div className="text-base font-semibold">{item.userName}</div>
                        <div className="font-normal text-gray-500">{item.email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.depertmentName}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.dateOfBirth}</td>
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
      <div className="flex justify-center mt-4">
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
