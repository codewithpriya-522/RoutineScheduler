using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class DepertmentReporitory : GenericRepository<Depertment>, IDepermentRepository
{
    /// <summary>
    /// Initializes a new instance of the <see cref="DepertmentReporitory"/> class.
    /// </summary>
    /// <param name="context">The context.</param>
    public DepertmentReporitory(DataContext context) : base(context) { }
}
