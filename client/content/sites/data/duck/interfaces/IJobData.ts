import IJobInfo from "../../../../../models/jobs/IJobInfo";

export default interface IJobData {
    [jobId: string]: IJobInfo;
}
