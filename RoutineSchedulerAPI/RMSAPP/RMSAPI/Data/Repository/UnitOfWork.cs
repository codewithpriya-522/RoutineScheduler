using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext _context;

        public UnitOfWork(DataContext context)
        {
            _context = context;
            userRepository = new UserRepository(_context);
        }
        public IUserRepository userRepository { get; private set; }

        public void Dispose()
        {
            _context.Dispose();
        }
        public async Task<bool> Complete()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public bool HasChanges()
        {
            return _context.ChangeTracker.HasChanges();
        }
    }
}
