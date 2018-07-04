import IJobModel from "../../../../../models/jobs/IJobModel";

export default interface IJobData {
    [jobId: string]: IJobModel;
}
