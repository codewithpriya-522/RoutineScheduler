using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;
using RMSAPI.Data.Enums;

namespace RMSAPI.Data;

public class Seeder
{
    /// <summary>
    /// Seeds the users.
    /// </summary>
    /// <param name="userManager">The user manager.</param>
    /// <param name="roleManager">The role manager.</param>
    /// <param name="context">The context.</param>
/    public static async Task SeedUsers(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager, DataContext context)
    {
        if (await userManager.Users.AnyAsync()) return;

        #region Adding Default users
        // Adding default roles 
        var roles = new List<AppRole>{
            new AppRole{Name = "Member"},
            new AppRole{Name = "Admin"},
            new AppRole{Name = "Student"},
            new AppRole{Name = "Teacher"},
        };
        foreach (var role in roles)
        {
            await roleManager.CreateAsync(role);
        }

        //adding a default admin user
        var admin =
            new AppUser
            {
                Email = "admintest@rms.com",
                UserName = "admin",
                City = "Kolkata",
                Gender = "Male",

            };
        await userManager.CreateAsync(admin, "Pa$$w0rd");
        await userManager.AddToRoleAsync(admin, "Admin");

        //adding a default member user
        var member =
            new AppUser
            {
                Email = "Member@rms.com",
                UserName = "member",
                City = "Kolkata",
                Gender = "Male",

            };
        await userManager.CreateAsync(member, "Pa$$w0rd");
        await userManager.AddToRoleAsync(member, "Member");

        //adding a default Student user
        await AddDefaultUser(userManager, "Student1", "Student");
        await AddDefaultUser(userManager, "Student2", "Student");
        await AddDefaultUser(userManager, "Student3", "Student");
        await AddDefaultUser(userManager, "Student4", "Student");
        await AddDefaultUser(userManager, "Student5", "Student");
        await AddDefaultUser(userManager, "Student6", "Student");
        await AddDefaultUser(userManager, "Student7", "Student");

        //adding a default Teacher user
        await AddDefaultUser(userManager, "Teacher", "Teacher");
        await AddDefaultUser(userManager, "Teacher2", "Teacher");
        await AddDefaultUser(userManager, "Teacher3", "Teacher");
        await AddDefaultUser(userManager, "Teacher4", "Teacher");
        await AddDefaultUser(userManager, "Teacher5", "Teacher");
        await AddDefaultUser(userManager, "Teacher6", "Teacher");
        await AddDefaultUser(userManager, "Teacher7", "Teacher");
        await AddDefaultUser(userManager, "Teacher8", "Teacher");
        #endregion
        #region Adding Batch subjects and other defaults
        //Adding Depertment
        var dept = new Depertment
        {
            Name = "Computer Science",
            Description = "Sample depertment object for cosh",
            HeadOfDepartment = "Some one from the teachers.",
            Batches = null,
            Teachers = null,
        };
        await context.Departments.AddAsync(dept);
        await context.SaveChangesAsync();
        var insertDept = await context.Departments.Where(b => b.Name == "Computer Science").SingleOrDefaultAsync();
        //Adding batch 
        var batch = new Batch
        {
            Department = dept,
            DepartmentId = dept.Id,
            Name = "Semester 1",
            StartDate = DateTime.Now,
            EndDate = DateTime.Now.AddMonths(6),

        };
        await context.Batches.AddAsync(batch);
        await context.SaveChangesAsync();

        // Adding teachers 
        #region Fetching dependent value
        //var insertDept = await context.Departments.Where(b => b.Name == "Computer Science").SingleOrDefaultAsync();
        var insertBatch = await context.Batches.Where(b => b.Name == "Semester 1").SingleOrDefaultAsync();
        var insertTeacher1 = await userManager.FindByNameAsync("Teacher");
        var insertTeacher2 = await userManager.FindByNameAsync("Teacher1");
        var insertTeacher3 = await userManager.FindByNameAsync("Teacher2");
        var insertTeacher4 = await userManager.FindByNameAsync("Teacher3");
        #endregion
        var teachers = new List<Teacher> {
            new Teacher
            {
                AppUserId = insertTeacher1.Id,
                AppUser = insertTeacher1,
                Department = insertDept,
                DepartmentId = insertDept.Id,

            },
            new Teacher
            {
                AppUserId = insertTeacher1.Id,
                AppUser = insertTeacher1,
                Department = insertDept,
                DepartmentId = insertDept.Id,

            },
            new Teacher
            {
                AppUserId = insertTeacher3.Id,
                AppUser = insertTeacher3,
                Department = insertDept,
                DepartmentId = insertDept.Id,
            },
            new Teacher
            {
                AppUserId = insertTeacher4.Id,
                AppUser = insertTeacher4,
                Department = insertDept,
                DepartmentId = insertDept.Id,
            },
        };
        await context.Teachers.AddRangeAsync(teachers);
        await context.SaveChangesAsync();

        //adding subjects 
        var subjects = new List<Subject>
        {
            new Subject
            {
                Name = "Programming in C",
                Type = SubjectType.Core,
            },
            new Subject
            {
                Name = "Programming in C Lab",
                Type = SubjectType.Practical,
            },
            new Subject
            {
                Name = "Programming in Python",
                Type = SubjectType.Core,
            },
            new Subject
            {
                Name = "Programming in Python Lab",
                Type = SubjectType.Practical,
            },
            new Subject
            {
                Name = "Advance Math",
                Type = SubjectType.Ge,
            },
            new Subject
            {
                Name = "Data Structure",
                Type = SubjectType.Core,
            },
            new Subject
            {
                Name = "Data Structure Lab",
                Type = SubjectType.Practical,
            },
        };
        await context.Subjects.AddRangeAsync(subjects);
        await context.SaveChangesAsync();

        //Adding teacher subject mapping 
        #region Pulling subjects dat to map
        //Labs 
        var labdss = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Data Structure Lab");
        var labC = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Programming in C Lab");
        var labpython = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Programming in Python");
        // Core subjects
        var dataStruct = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Data Structure");
        var programmingInC = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Programming in C");
        var python = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Programming in Python Lab");
        var math = await context.Subjects.SingleOrDefaultAsync(s => s.Name == "Advance Math");
        //Teachers
        var subTeacher = await context.Teachers.Where(s => s.AppUser.UserName == "Teacher").FirstOrDefaultAsync();
        var subTeacher2 = await context.Teachers.SingleOrDefaultAsync(s => s.AppUser.UserName == "Teacher2");
        var subTeacher3 = await context.Teachers.SingleOrDefaultAsync(s => s.AppUser.UserName == "Teacher3");
        // Students 
        var mapStudent1 = await userManager.FindByNameAsync("Student1");
        var mapStudent2 = await userManager.FindByNameAsync("Student2");
        var mapStudent3 = await userManager.FindByNameAsync("Student3");
        var mapStudent4 = await userManager.FindByNameAsync("Student4");
        var mapStudent5 = await userManager.FindByNameAsync("Student5");
        var mapStudent6 = await userManager.FindByNameAsync("Student6");
        var mapStudent7 = await userManager.FindByNameAsync("Student7");

        #endregion
        var teacherSubjects = new List<TeacherSubjects>()
        {
            new TeacherSubjects
            {
                Subject = dataStruct,
                SubjectID = dataStruct.Id,
                Teacher = subTeacher,
                TeacherID = subTeacher.Id
            },

            new TeacherSubjects
            {
                Subject = programmingInC,
                SubjectID = programmingInC.Id,
                Teacher = subTeacher,
                TeacherID = subTeacher.Id
            },

            new TeacherSubjects
            {
                Subject = python,
                SubjectID = python.Id,
                Teacher = subTeacher,
                TeacherID = subTeacher.Id
            },

            new TeacherSubjects
            {
                Subject = math,
                SubjectID = math.Id,
                Teacher = subTeacher2,
                TeacherID = subTeacher2.Id
            },
            new TeacherSubjects
            {
                Subject = labdss,
                SubjectID = labdss.Id,
                Teacher = subTeacher3,
                TeacherID = subTeacher3.Id
            },

            new TeacherSubjects
            {
                Subject = labC,
                SubjectID = labC.Id,
                Teacher = subTeacher3,
                TeacherID = subTeacher3.Id
            },

            new TeacherSubjects
            {
                Subject = labpython,
                SubjectID = labpython.Id,
                Teacher = subTeacher3,
                TeacherID = subTeacher3.Id
            }

        };

        await context.TeacherSubjects.AddRangeAsync(teacherSubjects);
        await context.SaveChangesAsync();

        //Batch Subject mapping 
        var batchSubject = new List<BatchSubjects>
        {
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = dataStruct,
                SubjectId = dataStruct.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = programmingInC,
                SubjectId = programmingInC.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = python,
                SubjectId = python.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = labC,
                SubjectId = labC.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = math,
                SubjectId = math.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = labdss,
                SubjectId = labdss.Id
            },
            new BatchSubjects
            {
                Batch = insertBatch,
                BatchId = insertBatch.Id,
                Subject = labpython,
                SubjectId = labpython.Id
            },
        };

        await context.BatchSubjects.AddRangeAsync(batchSubject);
        await context.SaveChangesAsync();

        //mapping batch students 
        var students = new List<Student>
        {
            new Student
            {
                AppUser = mapStudent1,
                AppUserId = mapStudent1.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent2,
                AppUserId = mapStudent2.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent3,
                AppUserId = mapStudent3.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent4,
                AppUserId = mapStudent4.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent5,
                AppUserId = mapStudent5.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent6,
                AppUserId = mapStudent6.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
            new Student
            {
                AppUser = mapStudent7,
                AppUserId = mapStudent7.Id,
                Batch = insertBatch,
                BatchId = insertBatch.Id
            },
        };

        await context.Students.AddRangeAsync(students);
        await context.SaveChangesAsync();
        #endregion
    }
    /// <summary>
    /// Adds the default user.
    /// </summary>
    /// <param name="userManager">The user manager.</param>
    /// <param name="name">The name.</param>
    /// <param name="roleName">Name of the role.</param>
    /// <returns></returns>
    private static async Task AddDefaultUser(UserManager<AppUser> userManager, string name, string roleName)
    {
        var user = new AppUser
        {
            Email = name.ToLower() + "@rms.com",
            UserName = name,
            City = "Kolkata",
            Gender = "Male",

        };


        await userManager.CreateAsync(user, "Pa$$w0rd");
        await userManager.AddToRoleAsync(user, roleName);
    }
}