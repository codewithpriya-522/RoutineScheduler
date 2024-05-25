﻿using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class BatchRepository(DataContext context) : GenericRepository<Batch>(context), IBatchRepository
{

    public async Task<bool> IsSubjectInBatchExist(string name, int batchId)
    {
        return
            await _context
            .BatchSubjects
            .Include(b => b.Subject)
            .AnyAsync(bs => bs.BatchId == batchId
            && bs.Subject.Name == name);
    }

    public async Task<bool> IsBatchStudent(int batchID, int StudnetID)
    {
        var batch = await _context.Batches.Include(b => b.BatchStudents).Where(p => p.Id == batchID).SingleOrDefaultAsync();

        return batch.BatchStudents.Any(p => p.BatchId == batchID && p.AppUserId == StudnetID);
    }

    public async Task<IEnumerable<Batch>> GetAllAsync()
    {
        return await _context.Batches
            .Include(p => p.BatchStudents)
            .ThenInclude(p => p.AppUser)
            .Include(p => p.BatchSubjects)
            .ThenInclude(p => p.Subject)
            .ToListAsync();
    }
}
