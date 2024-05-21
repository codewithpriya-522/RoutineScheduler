# Routine Management System (RMS) API

## Project Overview

The Routine Management System (RMS) API facilitates the management and scheduling of routines in educational institutions. It provides endpoints for administration related to departments, teachers, students, and schedules, ensuring efficient operation and user management.

**Technology Stack**: ASP.NET Core, Entity Framework Core, OpenAPI 3.0.1

## Features

- Authentication Management: Handles user authentication including login, registration, and token refresh.
- Department Management: Operations to manage department information within the institution.
- Schedule Management: Provides functionalities for creating, retrieving, updating, and deleting different aspects of the school timetable.
- User Roles Management: Distinguishes access rights between admins, teachers, and students.
## Project Structure
```markdown
RoutineScheduler
├───.github
│   └───workflows
├───RMSAPI
│   ├───Controllers
│   │   ├───Authentication
│   │   ├───ClassSchedules
│   │   ├───Depertments
│   │   │   ├───Batches
│   │   │   ├───Students
│   │   │   └───Teachers
│   │   ├───DTO
│   │   └───User
│   ├───Data
│   │   ├───Entities
│   │   ├───Enums
│   │   ├───Migrations
│   │   └───Repository
│   ├───Extentions
│   ├───Helper
│   ├───Interfaces
│   ├───Middleware
│   ├───Properties
│   └───Services
└───RoutineSchedulerFrontend
    ├───public
    └───src
        ├───assets
        ├───pages
        │   ├───forgotPassword
        │   ├───landingPage
        │   ├───login
        │   └───registration
        └───routing
            ├───baseRounting
            └───homerouting
```
## API Endpoints Description

Here is a breakdown of the main functionalities provided by each endpoint in the RMS API:

### Authentication

- **Register**: Create a new user account. `POST /api/Auth/register`
- **Login**: Authenticate a user and receive tokens. `POST /api/Auth/login`
- **Token Refresh**: Refresh the authentication token. `POST /api/Auth/refresh`

### Department Operations

- **Retrieve All Departments**: Get a list of all departments. `GET /api/Department/getall`

### Schedule Operations

- **Get Daily Schedule**: Retrieve the schedule for a specific batch on a given day. `GET /api/Schedule/daily/{batchId}/{day}`
- **Get Department Schedule**: Fetch schedules by department ID. `GET /api/Schedule/department/{departmentId}`
- **Update Schedule**: Modify the existing schedule. `PUT /api/Schedule/update`
- **Check Teacher Availability**: Find free slots for a teacher. `GET /api/Schedule/free/{teacherId}/{departmentId}`
- **Delete Schedule**: Remove a specific schedule entry. `DELETE /api/Schedule/delete/{scheduleId}`
- **Weekly Schedule**: Access full weekly schedule for a batch. `GET /api/Schedule/weekly/{batchId}`
- **Manage Time Slots**: Handle time slots dynamically. `POST /api/Schedule/timeslot`

## Installation

```bash
git clone https://github.com/SumitKsoft/RoutineScheduler.git
cd RoutineScheduler/API/RMSAPI
dotnet restore
dotnet build
dotnet run
```

Access the RMS API at http://localhost:5000. Utilize tools like Postman or Swagger UI to send requests and manage the routine schedules effectively.

## Usage
For detailed usage instructions, refer to the Swagger documentation available at /api-docs.

## Contributing
Contributors are encouraged to fork this project and propose changes through pull requests.

## License
Distributed under the MIT License. See LICENSE for more information.

## Contact
For support and further inquiries, you can reach out in our issue section.