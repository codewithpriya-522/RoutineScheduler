// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import batchSelector from '../../../redux/selector/BatchSelector';
import { batchActions } from '../../../redux/slice/BatchSlice';

const GetAllBatch = () => {
  const dispatch = useDispatch();
  const selector = useSelector(batchSelector);
  const [dataTable, setDataTable] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    dispatch(batchActions.getall());
  }, [dispatch]);

  useEffect(() => {
    if (
      selector &&
      selector.data &&
      Array.isArray(selector.data) &&
      selector.data.length > 0
    ) {
      setDataTable(selector.data);
    }
  }, [selector]);

  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataTable.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">All Batches</h1>
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
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Number of Students</th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{new Date(item.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{new Date(item.endDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <ul className="list-disc">
                    {item.batchSubjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{item.batchStudents}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex">
                    <BsPencilSquare
                      className="text-green-500 cursor-pointer hover:text-green-700"
                      onClick={() => alert(`Edit batch with ID ${item.id}`)}
                    />
                    <BsFillTrashFill
                      className="ml-2 text-red-500 cursor-pointer hover:text-red-700"
                      onClick={() => alert(`Delete batch with ID ${item.id}`)}
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

export default GetAllBatch;
