using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RMSAPI.Data.Entities;

namespace RMSAPI.Data
{
    /// <summary>
    /// Initializes a new instance of the <see cref="DataContext"/> class.
    /// </summary>
    /// <param name="options">The options to be used by a <see cref="T:Microsoft.EntityFrameworkCore.DbContext" />.</param>
    public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, int,
    IdentityUserClaim<int>, AppUserRole,
    IdentityUserLogin<int>, IdentityRoleClaim<int>,
    IdentityUserToken<int>>(options)
    {
        /// <summary>
        /// Gets or sets the departments.
        /// </summary>
        /// <value>
        /// The departments.
        /// </value>
        public DbSet<Depertment> Departments { get; set; }
        /// <summary>
        /// Gets or sets the batches.
        /// </summary>
        /// <value>
        /// The batches.
        /// </value>
        public DbSet<Batch> Batches { get; set; }
        /// <summary>
        /// Gets or sets the teachers.
        /// </summary>
        /// <value>
        /// The teachers.
        /// </value>
        public DbSet<Teacher> Teachers { get; set; }
        /// <summary>
        /// Gets or sets the students.
        /// </summary>
        /// <value>
        /// The students.
        /// </value>
        public DbSet<Student> Students { get; set; }
        /// <summary>
        /// Gets or sets the subjects.
        /// </summary>
        /// <value>
        /// The subjects.
        /// </value>
        public DbSet<Subject> Subjects { get; set; }
        /// <summary>
        /// Gets or sets the batch subjects.
        /// </summary>
        /// <value>
        /// The batch subjects.
        /// </value>
        public DbSet<BatchSubjects> BatchSubjects { get; set; }
        /// <summary>
        /// Gets or sets the teacher subjects.
        /// </summary>
        /// <value>
        /// The teacher subjects.
        /// </value>
        public DbSet<TeacherSubjects> TeacherSubjects { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<TimeSlot> TimeSlots { get; set; }

        /// <summary>
        /// Configures the schema needed for the identity framework.
        /// </summary>
        /// <param name="builder">The builder being used to construct the model for this context.</param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                // SQLite does not have proper support for TimeSpan via Entity Framework Core, see the limitations
                // here: https://docs.microsoft.com/en-us/ef/core/providers/sqlite/limitations#query-limitations
                // To work around this, when the Sqlite database provider is used, all model properties of type TimeSpan
                // use the TimeSpanToBinaryConverter
                // Based on: https://github.com/aspnet/EntityFrameworkCore/issues/10784#issuecomment-415769754
                // This only supports millisecond precision, but should be sufficient for most use cases.
                foreach (var entityType in builder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(TimeSpan)
                                                                                || p.PropertyType == typeof(TimeSpan?));
                    foreach (var property in properties)
                    {
                        builder
                            .Entity(entityType.Name)
                            .Property(property.Name)
                            .HasConversion(new TimeSpanToStringConverter());
                    }
                }
            }

            builder.Entity<AppUser>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<AppRole>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();

            builder.Entity<Depertment>()
                .HasMany(d => d.Teachers)
                .WithOne(t => t.Department)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Depertment>()
                .HasMany(d => d.Batches)
                .WithOne(b => b.Department)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Batch>()
                .HasOne(b => b.Department)
                .WithMany(d => d.Batches)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Batch>()
                .HasMany(b => b.BatchSubjects)
                .WithOne(b => b.Batch)
                .HasForeignKey(b => b.BatchId);

            builder.Entity<Batch>()
                .HasMany(b => b.BatchStudents)
                .WithOne(s => s.Batch)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Subject>()
                .HasMany(b => b.BatchSubjects)
                .WithOne(b => b.Subject)
                .HasForeignKey(b => b.SubjectId);

            builder.Entity<Teacher>()
                .HasMany(s => s.TeacherSubjects)
                .WithOne(t => t.Teacher)
                .HasForeignKey(te => te.TeacherID);

            builder.Entity<Subject>()
                .HasMany(s => s.SubjectTeachers)
                .WithOne(t => t.Subject)
                .HasForeignKey(te => te.SubjectID);

        }
    }
}
