import CandidateModel from "../models/candidate.model.js";
import JobModels from "../models/jobs.model.js";
import { sendMail } from "../middlewares/emailer.middleware.js";
export default class CandidateController{

    getApplyForm(req, res){

        const jobId = req.params.id;
        let job = JobModels.jobDetails(jobId);
        res.render('applyJobForm', { job });
    }

    applyJob(req, res){

        const jobId = req.params.id;
        const { name, email, contact} = req.body;
        const resume = 'resumesUploaded/' + req.file.filename;
        
        const newCandidate = { name, email, contact, resume, jobId };

         // Add the candidate to the job
        CandidateModel.addCandidateToJob(jobId, newCandidate);

        const to = newCandidate.email;
        const Candidatename = newCandidate.name;

        sendMail(to, Candidatename);
        
        // Redirect to job details page
        res.redirect(`/job/${jobId}`);

    }

    
}