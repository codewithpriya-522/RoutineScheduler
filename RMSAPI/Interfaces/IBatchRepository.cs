using RMSAPI.Data.Entities;

namespace RMSAPI.Interfaces;

public interface IBatchRepository : IGenericRepository<Batch>
{
    Task<bool> IsSubjectInBatchExist(string name, int batchId);
    Task<bool> IsBatchStudent(int batchID, int StudnetID);
    Task<IEnumerable<Batch>> GetAllAsync();
}
