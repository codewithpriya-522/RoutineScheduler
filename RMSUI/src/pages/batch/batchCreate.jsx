import React, { useEffect, useState } from 'react';
import { BatchService } from '../../services/batchService';
import BatchDataDTO from '../../models/BatchDataDTO';

const BatchCreate = () => {
  const [batches, setBatches] = useState([]);
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await BatchService.getAllBatches();
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches', error);
    }
  };

  const handleCreateBatch = async () => {
    const batchDataDTO = new BatchDataDTO(null, name, departmentId);
    try {
      await BatchService.createBatch(batchDataDTO);
      fetchBatches();
    } catch (error) {
      console.error('Error creating batch', error);
    }
  };

  return (
    <div>
      <h2>Batches</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Batch Name"
      />
      <input
        type="text"
        value={departmentId}
        onChange={(e) => setDepartmentId(e.target.value)}
        placeholder="Department ID"
      />
      <button onClick={handleCreateBatch}>Create Batch</button>
      <ul>
        {batches.map((batch) => (
          <li key={batch.id}>{batch.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BatchCreate;
