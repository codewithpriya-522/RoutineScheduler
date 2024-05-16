using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly DataContext _context;
    /// <summary>
    /// Initializes a new instance of the <see cref="UnitOfWork"/> class.
    /// </summary>
    /// <param name="context">The context.</param>
    public UnitOfWork(DataContext context)
    {
        _context = context;
        User = new UserRepository(_context);
        Deperment = new DepertmentReporitory(context);
        Teacher = new TeacherRepository(context);
        Subjects = new SubjectRepository(context);
    }
    /// <summary>
    /// Gets the user repository.
    /// </summary>
    /// <value>
    /// The user repository.
    /// </value>
    public IUserRepository User { get; private set; }
    /// <summary>
    /// Gets the deperment repository.
    /// </summary>
    /// <value>
    /// The deperment repository.
    /// </value>
    public IDepermentRepository Deperment { get; private set; }

    /// <summary>
    /// Gets the Teacher repository.
    /// </summary>
    /// <value>
    /// The Teacher repository.
    /// </value>
    public ITeacherRepository Teacher { get; private set; }

    public ISubjectRepository Subjects { get; private set; }


    /// <summary>
    /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
    /// </summary>
    public void Dispose()
    {
        _context.Dispose();
    }
    /// <summary>
    /// Completes this instance.
    /// </summary>
    /// <returns></returns>
    public async Task<bool> Complete()
    {
        return await _context.SaveChangesAsync() > 0;
    }
    /// <summary>
    /// Determines whether this instance has changes.
    /// </summary>
    /// <returns>
    ///   <c>true</c> if this instance has changes; otherwise, <c>false</c>.
    /// </returns>
    public bool HasChanges()
    {
        return _context.ChangeTracker.HasChanges();
    }
}
