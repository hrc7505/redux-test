import IJobInfo from "../../../../../models/jobs/IJobInfo";
import ISiteInfo from "../../../../../models/sites/ISiteInfo";

export default interface IDashboardResponseResult {
    activeJobs: IJobInfo[];
    activeSites: ISiteInfo[];
}
