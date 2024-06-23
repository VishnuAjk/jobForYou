import JobModels from "../models/jobs.model.js";

export default class PortalController{

    getPortal(req,res){

        res.render('homePage',{userEmail: req.session.userEmail});
    }

    getJobs(req, res){
        let job = JobModels.getJobs();
        res.render('jobs', {jobs: job, userEmail: req.session.userEmail});
    }
}