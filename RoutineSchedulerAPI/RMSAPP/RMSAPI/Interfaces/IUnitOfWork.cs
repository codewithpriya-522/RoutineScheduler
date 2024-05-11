namespace RMSAPI.Interfaces;

public interface IUnitOfWork : IDisposable
{
    /// <summary>
    /// Gets the user repository.
    /// </summary>
    /// <value>
    /// The user repository.
    /// </value>
    IUserRepository userRepository { get; }
    /// <summary>
    /// Gets the deperment repository.
    /// </summary>
    /// <value>
    /// The deperment repository.
    /// </value>
    IDepermentRepository depermentRepository { get; }
    /// <summary>
    /// Completes this instance.
    /// </summary>
    /// <returns></returns>
    Task<bool> Complete();

    /// <summary>
    /// Determines whether this instance has changes.
    /// </summary>
    /// <returns>
    ///   <c>true</c> if this instance has changes; otherwise, <c>false</c>.
    /// </returns>
    bool HasChanges();
}
