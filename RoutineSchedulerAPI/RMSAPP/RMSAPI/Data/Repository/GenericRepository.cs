using Microsoft.EntityFrameworkCore;
using RMSAPI.Interfaces;
using System.Linq.Expressions;

namespace RMSAPI.Data.Repository;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    protected readonly DataContext context;
    public GenericRepository(DataContext context)
    {
        this.context = context;
    }
    public async Task AddAsync(T entity)
    {
        await context.Set<T>().AddAsync(entity);
    }
    public async Task AddRangeAsync(IEnumerable<T> entities)
    {
        await context.Set<T>().AddRangeAsync(entities);
    }

    public async Task DeleteByID(int id)
    {
        var entity = await context.Set<T>().FindAsync(id);
        if (entity == null) return;
        Remove(entity);
    }

    public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> expression)
    {
        return await context.Set<T>().Where(expression).ToListAsync();
    }
    public async Task<IEnumerable<T>> GetAll()
    {
        return await context.Set<T>().ToListAsync();
    }
    public async Task<T> GetById(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }
    public void Remove(T entity)
    {
        context.Set<T>().Remove(entity);
    }
    public void RemoveRange(IEnumerable<T> entities)
    {
        context.Set<T>().RemoveRange(entities);
    }
    public void UpdateAsync(T entity)
    {
        context.Entry(entity).State = EntityState.Modified;
    }

    public bool IsExist(int id)
    {
        var entity = context.Set<T>().FindAsync(id);
        return entity.Result != null;
    }

    
}
