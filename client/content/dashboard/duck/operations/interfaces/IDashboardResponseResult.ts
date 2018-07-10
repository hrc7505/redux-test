import IJobModel from "models/jobs/IJobModel";
import ISiteModel from "models/sites/ISiteModel";

export default interface IDashboardResponseResult {
    activeJobs: IJobModel[];
    activeSites: ISiteModel[];
}
