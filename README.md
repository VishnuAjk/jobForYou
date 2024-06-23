
# JobFoYou- Job portal

This is a job portal application built with Node.js and Express. It allows users to register, login, view available jobs, post jobs, and apply for jobs. The application uses EJS for templating and has authentication and session management functionalities.


## Features

- User Registration and Login
- Job Posting and Viewing 
- Job Application with Resume Upload
- Job Details and Applicants Viewing
- Authentication and Authorization
- Automatic email to Applicants


## Technology Used

- Node.js
- Express.js
- EJS
- Express Sessions
- Multer for File Upload
- Nodemailer for Emailing
## Usage
### Register a New User
1. Go to `http://localhost:5000/register`
2. Fill in the registration form and submit.
### Login
1. Go to `http://localhost:5000/login`
2. Fill in the login form and submit.
### View Jobs
1. Go to `http://localhost:5000/jobs`
2. You will see a list of all posted jobs.
### Post a Job
1. Login as a user.
2. Go to http://localhost:5000/postjob
3. Fill in the job posting form and submit.
### Apply for a Job
1. Go to the job details page.
2. Click on the "Apply" button.
3. Fill in the application form and upload your resume.
## Future Improvements

### 1. Delete Job Feature

Recruiters will be able to delete their job postings.

- **Backend Changes:**
  - Added `deleteJob` method in `JobController` and `JobModels`.
  - Added route for deleting a job: `app.delete('/job/:id', auth, jobsController.deleteJob);`

- **Frontend Changes:**
  - Added a delete button in `jobs.ejs` or `jobDetails.ejs`.

### 2. Update Job Feature

Recruiters will be able to update their job postings.

- **Backend Changes:**
  - Modified `updateJobDetails` in `JobController` to handle updates.
  - Added `getUpdateJobForm` method in `JobController` to render the update form.
  - Updated `updateJob` method in `JobModels` to process updates.
  - Added routes for updating a job: `app.get('/job/edit/:id', auth, jobsController.getUpdateJobForm);` and `app.post('/job/edit/:id', auth, jobsController.updateJobDetails);`

- **Frontend Changes:**
  - Created `updateJobForm.ejs` to allow job updates.