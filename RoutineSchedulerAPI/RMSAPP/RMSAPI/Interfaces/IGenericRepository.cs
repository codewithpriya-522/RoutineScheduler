using System.Linq.Expressions;

namespace RMSAPI.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        /// <summary>
        /// Gets the by identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        Task<T> GetById(int id);
        /// <summary>
        /// Gets all.
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<T>> GetAll();
        /// <summary>
        /// Finds the specified expression.
        /// </summary>
        /// <param name="expression">The expression.</param>
        /// <returns></returns>
        Task<IEnumerable<T>> Find(Expression<Func<T, bool>> expression);
        /// <summary>
        /// Queries the specified query builder.
        /// </summary>
        /// <param name="queryBuilder">The query builder.</param>
        /// <returns></returns>
        Task<IEnumerable<T>> Query(Func<IQueryable<T>, IQueryable<T>> queryBuilder);
        /// <summary>
        /// Adds the asynchronous.
        /// </summary>
        /// <param name="entity">The entity.</param>
        /// <returns></returns>
        Task AddAsync(T entity);
        /// <summary>
        /// Adds the range asynchronous.
        /// </summary>
        /// <param name="entities">The entities.</param>
        /// <returns></returns>
        Task AddRangeAsync(IEnumerable<T> entities);
        /// <summary>
        /// Removes the specified entity.
        /// </summary>
        /// <param name="entity">The entity.</param>
        void Remove(T entity);
        /// <summary>
        /// Removes the range.
        /// </summary>
        /// <param name="entities">The entities.</param>
        void RemoveRange(IEnumerable<T> entities);
        /// <summary>
        /// Updates the asynchronous.
        /// </summary>
        /// <param name="entity">The entity.</param>
        void UpdateAsync(T entity);
        /// <summary>
        /// Deletes the by identifier.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        Task DeleteByID(int id);
        /// <summary>
        /// Determines whether the specified identifier is exist.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns>
        ///   <c>true</c> if the specified identifier is exist; otherwise, <c>false</c>.
        /// </returns>
        bool IsExist(int id);
    }
}
