import { api } from './apiService';

export const BatchService = {
  getBatchById: (id) => {
    return api.get(`/Batch/${id}`);
  },
  deleteBatch: (id) => {
    return api.delete(`/Batch/${id}`);
  },
  createBatch: (batchDataDTO) => {
    return api.post('/Batch', batchDataDTO);
  },
  updateBatch: (batchDataDTO) => {
    return api.put('/Batch', batchDataDTO);
  },
  getAllBatches: () => {
    return api.get('/Batch/getall');
  }
};
