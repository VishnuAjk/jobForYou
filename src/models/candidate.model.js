import JobModels from "./jobs.model.js";
export default class CandidateModel{

    constructor(candidate){

        this.name = candidate.name;
        this.email = candidate.email;
        this.contact = candidate.contact;
        this.jobId = candidate.jobId;
        
          
    }

    static addCandidateToJob(jobId, candidate){
        let jobs = JobModels.getJobs();
        const index = jobs.findIndex((j) => j.id == jobId);
        if (index !== -1) {
            if (!candidates[index]) {
                // If candidates array doesn't exist at the index, create a new array
                candidates[index] = [];
            }
            
             // Push the candidate to the array
            candidates[index].push(candidate);
        }

        console.log(candidates);
    }

    static getApplicants(jobId) {

        let jobs = JobModels.getJobs();
        const jobIndex = jobs.findIndex((j) => j.id == jobId);
        // If the job exists in the array and has candidates, return the candidates
        if (jobIndex !== -1 && candidates[jobIndex]) {
            return candidates[jobIndex];
        }

        // If the job doesn't exist or has no candidates, return an empty array
        return [];
    }
}




const candidates = [];