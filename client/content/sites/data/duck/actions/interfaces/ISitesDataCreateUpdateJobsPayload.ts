import IJobInfo from "../../../../../../models/jobs/IJobInfo";

export default interface ISitesDataCreateUpdateJobsPayload {
    jobs: { [jobId: string]: IJobInfo };
}
