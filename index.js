
import express from 'express';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';
import session from 'express-session';
import PortalController from './src/controller/portal.controller.js'
import UserController from './src/controller/user.controller.js';
import JobController from './src/controller/jobs.controller.js';
import { auth } from './src/middlewares/auth.middleware.js';
import CandidateController from './src/controller/candidate.controller.js';
import {uploadFile} from './src/middlewares/resume.upload.middleware.js';
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:'Secretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));
app.use(ejsLayouts);




app.set('view engine', 'ejs');
app.set('views', path.join('src','views'));


const portalsController = new PortalController();
const usersController = new UserController();
const jobsController = new JobController();
const candidateController = new CandidateController();

// get
app.get('/',portalsController.getPortal);
app.get('/register',usersController.getRegister);
app.get('/login', usersController.getLogin);
app.get('/jobs', portalsController.getJobs);
app.get('/postjob',auth, jobsController.getPostJobForm);
app.get('/logout', usersController.logout);

app.get('/job/:id', jobsController.getJobDetails);
app.put('/update/:id', jobsController.updateJobDetails);
app.get('/apply/:id', candidateController.getApplyForm);
app.get('/applicants/:id', jobsController.getApplicants);
// post
app.post('/register', usersController.postRegister);
app.post('/login', usersController.postLogin);

app.post('/job', jobsController.addJobs);
app.post('/update', jobsController.updateJobDetails);
app.post('/apply/:id', uploadFile.single('resume'), candidateController.applyJob);

app.listen(5000,(req,res)=>{

    console.log("Server is listening at 5000");
});

export default app;
