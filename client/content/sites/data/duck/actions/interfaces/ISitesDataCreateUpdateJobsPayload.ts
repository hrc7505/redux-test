import IJobModel from "models/jobs/IJobModel";

export default interface ISitesDataCreateUpdateJobsPayload {
    jobs: { [jobId: string]: IJobModel };
}
