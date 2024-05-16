using Microsoft.EntityFrameworkCore;
using RMSAPI.Interfaces;
using System.Linq;
using System.Linq.Expressions;

namespace RMSAPI.Data.Repository;

public class GenericRepository<T> : IGenericRepository<T> where T : class
{
    protected readonly DataContext context;
    /// <summary>
    /// Initializes a new instance of the <see cref="GenericRepository{T}"/> class.
    /// </summary>
    /// <param name="context">The context.</param>
    public GenericRepository(DataContext context)
    {
        this.context = context;
    }
    /// <summary>
    /// Adds the asynchronous.
    /// </summary>
    /// <param name="entity">The entity.</param>
    public async Task AddAsync(T entity)
    {
        await context.Set<T>().AddAsync(entity);
    }
    /// <summary>
    /// Adds the range asynchronous.
    /// </summary>
    /// <param name="entities">The entities.</param>
    public async Task AddRangeAsync(IEnumerable<T> entities)
    {
        await context.Set<T>().AddRangeAsync(entities);
    }
    /// <summary>
    /// Deletes the by identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    public async Task DeleteByID(int id)
    {
        var entity = await context.Set<T>().FindAsync(id);
        if (entity == null) return;
        Remove(entity);
    }
    /// <summary>
    /// Finds the specified expression.
    /// </summary>
    /// <param name="expression">The expression.</param>
    /// <returns></returns>
    public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> expression)
    {
        return await context.Set<T>().Where(expression).ToListAsync();
    }
    /// <summary>
    /// Queries the specified query builder.
    /// </summary>
    /// <param name="queryBuilder">The query builder.</param>
    /// <returns></returns>
    public async Task<IEnumerable<T>> Query(Func<IQueryable<T>, IQueryable<T>> queryBuilder)
    {
        IQueryable<T> query = context.Set<T>();

        query = queryBuilder(query);

        return await query.ToListAsync();
    }
    /// <summary>
    /// Gets all.
    /// </summary>
    /// <returns></returns>
    public async Task<IEnumerable<T>> GetAll()
    {
        return await context.Set<T>().ToListAsync();
    }
    /// <summary>
    /// Gets the by identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns></returns>
    public async Task<T> GetById(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }
    /// <summary>
    /// Removes the specified entity.
    /// </summary>
    /// <param name="entity">The entity.</param>
    public void Remove(T entity)
    {
        context.Set<T>().Remove(entity);
    }
    /// <summary>
    /// Removes the range.
    /// </summary>
    /// <param name="entities">The entities.</param>
    public void RemoveRange(IEnumerable<T> entities)
    {
        context.Set<T>().RemoveRange(entities);
    }
    /// <summary>
    /// Updates the asynchronous.
    /// </summary>
    /// <param name="entity">The entity.</param>
    public void UpdateAsync(T entity)
    {
        context.Entry(entity).State = EntityState.Modified;
    }
    /// <summary>
    /// Determines whether the specified identifier is exist.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns>
    ///   <c>true</c> if the specified identifier is exist; otherwise, <c>false</c>.
    /// </returns>
    public bool IsExist(int id)
    {
        var entity = context.Set<T>().FindAsync(id);
        return entity.Result != null;
    }


}
