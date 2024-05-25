import React, { useEffect, useState } from 'react';
import { DepartmentService } from '../services/DepartmentService';
import DepartmentDTO from '../models/DepartmentDTO';

const DepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await DepartmentService.getAllDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments', error);
    }
  };

  const handleCreateDepartment = async () => {
    const departmentDTO = new DepartmentDTO(null, name);
    try {
      await DepartmentService.createDepartment(departmentDTO);
      fetchDepartments();
    } catch (error) {
      console.error('Error creating department', error);
    }
  };

  return (
    <div>
      <h2>Departments</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Department Name"
      />
      <button onClick={handleCreateDepartment}>Create Department</button>
      <ul>
        {departments.map((department) => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentComponent;
