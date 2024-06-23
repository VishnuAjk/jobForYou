import JobModels from "../models/jobs.model.js";
import CandidateModel from "../models/candidate.model.js";

export default class JobController{


    getPostJobForm(req, res){
        
        res.render('postJobForm', {userEmail: req.session.userEmail});
    }

    addJobs(req,res){
        const newJobData = req.body;
        newJobData.created_at = new Date()
        JobModels.addJob(newJobData);
        let job = JobModels.getJobs();
        return res.render('jobs',{jobs : job, userEmail: req.session.userEmail});

    }

    getJobDetails(req, res){
        const jobId = req.params.id;
        let jobDetail = JobModels.jobDetails(jobId);
        return res.render('jobDetails', { jobDetail: jobDetail, userEmail: req.session.userEmail });
    }

    updateJobDetails(req, res){

        JobModels.update(req.body);
        let jobDetail = JobModels.getJobs();
        res.render('jobDetails', {jobDetail: jobDetail, userEmail: req.session.userEmail} );
    }

    getApplicants(req, res){

        const jobId = req.params.id;
        let candidates = CandidateModel.getApplicants(jobId);
        res.render('applicantsList', { applicants: candidates });;
    }

}