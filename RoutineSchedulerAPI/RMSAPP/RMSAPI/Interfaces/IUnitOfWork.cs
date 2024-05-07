using Microsoft.EntityFrameworkCore;

namespace RMSAPI.Interfaces;

public interface IUnitOfWork : IDisposable
{
    IUserRepository userRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
}
