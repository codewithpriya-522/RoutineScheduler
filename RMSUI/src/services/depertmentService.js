import { api } from './apiService';

export const DepartmentService = {
  getDepartmentById: (id) => {
    return api.get(`/Depertment/${id}`);
  },
  deleteDepartment: (id) => {
    return api.delete(`/Depertment/${id}`);
  },
  createDepartment: (departmentDTO) => {
    return api.post('/Depertment', departmentDTO);
  },
  updateDepartment: (departmentDTO) => {
    return api.put('/Depertment', departmentDTO);
  },
  getAllDepartments: () => {
    return api.get('/Depertment/getall');
  }
};