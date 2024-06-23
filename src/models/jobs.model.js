
export default class JobModels{

    constructor(jobData) {
        this.job_category = jobData.job_category;
        this.job_designation = jobData.job_designation;
        this.job_location = jobData.job_location;
        this.company_name = jobData.company_name;
        this.salary = jobData.salary;
        this.number_of_openings = jobData.number_of_openings;
        this.skills_required = jobData.skills_required;
        this.apply_by = jobData.apply_by;
        this.id = jobs.length+1;
        this.created_at = new Date().toLocaleString();

    }

    static getJobs(){

        return jobs;
    }

    static addJob(job){
        
        let newJob = new JobModels(job);
        jobs.push(newJob);
        console.log(newJob);
    }

    static jobDetails(id){
        const index = jobs.findIndex(j=>j.id == id);
        return jobs[index];
    }

    static update(job){
        const index = jobs.findIndex((j)=> j.id == job.id);
        jobs[index] = job;
    }

   
}

var jobs = [];